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
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// 💡 NEW: Add an error listener to the pool for better diagnostic logging
pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client (Pool-level error)', err);
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

  let client;

 try {
    client = await pool.connect();

  const insertQuery = `
   INSERT INTO contact_submissions (name, email, message)
   VALUES ($1, $2, $3)
   RETURNING id, submission_date;
  `;
  await client.query(insertQuery, [name, email, message]);

    res.status(200).json({ success: true, message: 'Submission saved and email process started!' });

    // Send Email (FIRE AND FORGET)
  const web3formsBody = JSON.stringify({
   name, 
   email, 
   message, 
   access_key: WEB3FORMS_ACCESS_KEY
  });
   
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
  console.error('Server Error during DB submission:', error);
  return res.status(500).json({ success: false, message: 'Submission failed due to a server error. Check the console.' });
 } finally {
    if (client) {
        client.release();
    }
  }
};

export default contactHandler;