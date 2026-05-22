const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Root endpoint - shows available endpoints
app.get('/', (req, res) => {
  res.json({
    message: 'Calculator API',
    version: '1.0.0',
    endpoints: {
      health: 'GET /health',
      add: 'POST /add ({"a": number, "b": number})',
      subtract: 'POST /subtract ({"a": number, "b": number})',
      multiply: 'POST /multiply ({"a": number, "b": number})',
      divide: 'POST /divide ({"a": number, "b": number})',
      power: 'POST /power ({"a": number, "b": number})'
    }
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    service: 'Calculator API',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// Calculator endpoints
app.post('/add', (req, res) => {
  const { a, b } = req.body;
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).json({ error: 'Both a and b must be numbers' });
  }
  res.json({ result: a + b });
});

app.post('/subtract', (req, res) => {
  const { a, b } = req.body;
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).json({ error: 'Both a and b must be numbers' });
  }
  res.json({ result: a - b });
});

app.post('/multiply', (req, res) => {
  const { a, b } = req.body;
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).json({ error: 'Both a and b must be numbers' });
  }
  res.json({ result: a * b });
});

app.post('/divide', (req, res) => {
  const { a, b } = req.body;
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).json({ error: 'Both a and b must be numbers' });
  }
  if (b === 0) {
    return res.status(400).json({ error: 'Cannot divide by zero' });
  }
  res.json({ result: a / b });
});

app.post('/power', (req, res) => {
  const { a, b } = req.body;
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).json({ error: 'Both a and b must be numbers' });
  }
  res.json({ result: Math.pow(a, b) });
});

app.listen(PORT, () => {
  console.log(`Calculator API running on port ${PORT}`);
});

module.exports = app;
