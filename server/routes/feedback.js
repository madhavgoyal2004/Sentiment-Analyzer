const express = require('express');
const router = express.Router();
const { spawn } = require('child_process');

router.post('/', (req, res) => {
  const { text } = req.body;

  const process = spawn('python', ['analyze.py', text]);

  process.stdout.on('data', (data) => {
    const sentiment = data.toString().trim();
    res.json({ sentiment });
  });

  process.stderr.on('data', (err) => {
    console.error(`Python error: ${err}`);
    res.status(500).json({ error: 'Python script error' });
  });
});

module.exports = router;
