/* import 'dotenv/config'; 
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const WEB3FORMS_ACCESS_KEY = process.env.WEB3FORMS_KEY; 


 @param {object} req
 @param {object} res
 
const contactHandler = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: 'Missing required fields: name, email, or message.' });
    }

    try {
        const insertQuery = `
            INSERT INTO contact_submissions (name, email, message)
            VALUES ($1, $2, $3)
            RETURNING id, submission_date;
        `;
        await pool.query(insertQuery, [name, email, message]);

        const web3formsBody = JSON.stringify({
            name, 
            email, 
            message, 
            access_key: WEB3FORMS_ACCESS_KEY
        });
        
        const web3formsRes = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: web3formsBody
        });

        const web3formsData = await web3formsRes.json();

        if (web3formsData.success) {
            return res.status(200).json({ success: true, message: 'Submission saved and email sent!' });
        } else {
            console.error('Web3Forms Email Error:', web3formsData.message);
            return res.status(202).json({ 
                success: true,
                message: 'Submission saved, but failed to send email notification. Check server logs.' 
            });
        }

    } catch (error) {
        console.error('Server Error during submission:', error);
        return res.status(500).json({ success: false, message: 'Submission failed due to a server error. Check the console.' });
    }
};

export default contactHandler; */






import 'dotenv/config'; 
import { Pool } from 'pg';

const pool = new Pool({
 connectionString: process.env.DATABASE_URL,
 ssl: {
 rejectUnauthorized: false
 },
  // 💡 Add Max connections and a connection idle timeout
  max: 20, // Maximum number of clients in the pool
  idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
  connectionTimeoutMillis: 2000, // Terminate connection attempts after 2 seconds
});

// 💡 NEW: Add an error listener to the pool for better diagnostic logging
pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client (Pool-level error)', err);
  // This usually means the client was disconnected from the database
  // The pool will attempt to recreate the client on the next request.
});

const WEB3FORMS_ACCESS_KEY = process.env.WEB3FORMS_KEY; 

/**
 * Express route handler for /api/contact submissions.
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 */
const contactHandler = async (req, res) => {
 if (req.method !== 'POST') {
  return res.status(405).json({ message: 'Method not allowed' });
 }

 const { name, email, message } = req.body;

 if (!name || !email || !message) {
  return res.status(400).json({ success: false, message: 'Missing required fields: name, email, or message.' });
 }

 // 💡 Initialize client variable outside try block for scope
  let client;

 try {
    // 💡 NEW: Acquire a client from the pool (This is generally safer than pool.query)
    client = await pool.connect();

  // STEP 1: CRITICAL ACTION - Save to Database (MUST AWAIT)
  const insertQuery = `
   INSERT INTO contact_submissions (name, email, message)
   VALUES ($1, $2, $3)
   RETURNING id, submission_date;
  `;
  await client.query(insertQuery, [name, email, message]); // 💡 Use client.query

    // STEP 2: Send IMMEDIATE Success Response to Frontend
  // The user gets their confirmation right away.
    res.status(200).json({ success: true, message: 'Submission saved and email process started!' });

    // STEP 3: NON-CRITICAL ACTION - Send Email (FIRE AND FORGET)
  const web3formsBody = JSON.stringify({
   name, 
   email, 
   message, 
   access_key: WEB3FORMS_ACCESS_KEY
  });
   
    // We wrap this in a separate anonymous async function for cleaner error handling
    (async () => {
      try {
         const web3formsRes = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: web3formsBody
        });
        const web3formsData = await web3formsRes.json();
          
        if (!web3formsData.success) {
          console.error('Web3Forms Email Background Error:', web3formsData.message);
        }
      } catch (emailError) {
        console.error('Web3Forms Email Background Network Failure:', emailError);
      }
    })();


 } catch (error) {
  // If the database failed (Step 1), we still send an error.
  console.error('Server Error during DB submission:', error);
  return res.status(500).json({ success: false, message: 'Submission failed due to a server error. Check the console.' });
 } finally {
    // 💡 NEW: Always release the client back to the pool
    if (client) {
        client.release();
    }
  }
};

export default contactHandler;