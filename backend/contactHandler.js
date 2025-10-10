import 'dotenv/config'; 
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const WEB3FORMS_ACCESS_KEY = process.env.WEB3FORMS_KEY || "38c7b6fa-52a0-476c-889b-3c9560fcbe5b"; 

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

export default contactHandler;