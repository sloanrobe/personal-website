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
  }
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

    try {
        // STEP 1: CRITICAL ACTION - Save to Database (MUST AWAIT)
        const insertQuery = `
            INSERT INTO contact_submissions (name, email, message)
            VALUES ($1, $2, $3)
            RETURNING id, submission_date;
        `;
        await pool.query(insertQuery, [name, email, message]);

        // STEP 2: Send IMMEDIATE Success Response to Frontend
        // The user gets their confirmation right away.
        res.status(200).json({ success: true, message: 'Submission saved and email process started!' });

        // STEP 3: NON-CRITICAL ACTION - Send Email (FIRE AND FORGET)
        // We do NOT use 'await' here, allowing the function to exit immediately.
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
                    // Log the error for yourself
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
    }
};

export default contactHandler;