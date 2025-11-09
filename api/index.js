const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const objectsRoutes = require('../routes/objectsRoutes'); // ← FIXED path

const app = express();
// const objectsRoutes = require('./routes/objectsRoutes'); // ← FIXED path

app.use(cors());
app.use(express.json());
// app.use('/objects', objectsRoutes);

// 👇 Add a simple test route for "/"
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'API is live on Vercel!',
    endpoints: ['/objects'],
    status: 'OK'
  });
});

// Export for Vercel serverless
module.exports = app; // Optional for local dev
module.exports.handler = serverless(app);