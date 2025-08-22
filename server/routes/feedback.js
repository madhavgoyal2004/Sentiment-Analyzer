const express = require('express');
const router = express.Router();
const { spawn } = require('child_process');

router.post('/', (req, res) => {
  const { text } = req.body;

  python = 'D:\\Sentiment-Analyzer\\server\\venv\\Scripts\\python.exe'
  const process = spawn(python, ['analyze.py', text]);

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
