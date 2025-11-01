const express = require('express');

// express server instance
const app = express();

// request handlers

app.use('/first', (req, res) => {
  res.send('This is first endpoint.');
});

app.use("/", (req, res) => {
    res.send("This is server response.");
});

app.use("/second", (req, res) => {
    res.send("This is second endpoint.");
})

// start the server at port 3000
app.listen(3000);
