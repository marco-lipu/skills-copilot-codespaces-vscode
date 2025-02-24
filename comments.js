// Create web server
// 1. Create a web server using express
// 2. Create a route to handle GET requests on '/comments'
// 3. Send back the comments
// 4. Start the server on port 3000

// 1. Create a web server using express
const express = require('express');
const app = express();

// 2. Create a route to handle GET requests on '/comments'
app.get('/comments', (req, res) => {
  // 3. Send back the comments
  res.send('Comments will be here');
});

// 4. Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});