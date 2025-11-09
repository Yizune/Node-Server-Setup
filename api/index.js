const express = require('express');
const cors = require('cors');
const objectsRoutes = require('./routes/objectsRoutes'); // ← FIXED path  // Import serverless-http

const app = express();

// Set up CORS
app.use(cors());
app.use(express.json());

// Add your routes
app.use('/objects', objectsRoutes);

// Wrap your express app for serverless
module.exports = app; // Optional for local dev
module.exports.handler = serverless(app); // Export the handler for serverless