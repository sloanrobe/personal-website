import express from 'express';
import bodyParser from 'body-parser';
import contactHandler from './backend/contact-handler.js';

const app = express();
const PORT = process.env.PORT || 3001; 

app.use(bodyParser.json()); 
app.get('/api/health', (req, res) => {
    res.status(200).json({ message: 'Backend API is running.' });
});
app.post('/api/contact', contactHandler);

app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
});