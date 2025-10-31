const express = require('express');

// express server instance
const app = express();

// request handler
app.use("/", (req, res) => {
    res.send("This is server response.");
});
// start the server at port 3000
app.listen(3000);
