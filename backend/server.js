/* import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import contactHandler from './backend/contactHandler.js';

const app = express();
const PORT = 3001;

app.use(
  cors({
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Accept'],
  })
);

app.use(bodyParser.json());

app.get('/api/health', (req, res) => {
  res.status(200).json({ message: 'Backend API is running.' });
});

app.post('/api/contact', contactHandler);

app.use((err, req, res, next) => {
  console.error('Server error:', err);
  const status = err.status || 500;
  res.status(status).json({
    success: false,
    message: err.message || 'Internal server error.',
  });
});

app.listen(PORT, () => {
  console.log(`✅ Backend server running on http://localhost:${PORT}`);
  console.log(`✅ CORS enabled for http://localhost:5173`);
}); */


import 'dotenv/config'; // Must be the first import to load .env variables
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import contactHandler from './contactHandler.js';

const app = express();

// Use the environment variable for the port, with a safe fallback for local development
const PORT = process.env.BACKEND_PORT || 3001; 
// Use the environment variable for the frontend URL
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173'; 

// Frontend talks to backend
app.use(
  cors({
    origin: [FRONTEND_URL], // DYNAMIC URL!
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Accept'],
  })
);

// Parse incoming JSON requests
app.use(bodyParser.json());

app.get('/api/health', (req, res) => {
  res.status(200).json({ message: 'Backend API is running.' });
});

app.post('/api/contact', contactHandler);

app.use((err, req, res, next) => {
  console.error('Server error:', err);
  const status = err.status || 500;
  res.status(status).json({
    success: false,
    message: err.message || 'Internal server error.',
  });
});

app.listen(PORT, () => {
  console.log(`✅ Backend server running on http://localhost:${PORT}`);
  console.log(`✅ CORS enabled for ${FRONTEND_URL}`);
});