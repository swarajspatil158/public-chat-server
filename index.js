// index.js
const express = require('express')
const app = express()
const PORT = 4000


app.get('/home', (req, res) => {
  res.status(200).json('Welcome, your app is working well');
})

app.post('/postData', (req, res) => {
    res.status(200).json({
      message: "Data received successfully",
      data: req.body
    });
  })

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// Export the Express API
module.exports = app