const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http');  // Import serverless-http

const app = express();
const objectsRoutes = require('../routes/objectsRoutes');

// Set up CORS
app.use(cors());
app.use(express.json());

// Add your routes
app.use('/objects', objectsRoutes);

// Wrap your express app for serverless
module.exports.handler = serverless(app); // Export the handler for serverless