const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the /app directory
app.use(express.static('/app'));

// Catch all handler: redirect to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join('/app', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Pac-Man game server running on port ${port}`);
});