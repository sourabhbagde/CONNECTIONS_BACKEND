const express = require('express');

// express server instance
const app = express();

// request handlers

// app.get("/ab*c", (req, res) => {
//   res.send("This is a get request");
// });

app.get("/user/:userId", (req, res) => {
    console.log(req.params);
    res.send("This is user get request");
});

app.post("/user", (req, res) => {
    res.send("This is user post request");
})

app.put("/user", (req, res) => {
    res.send("This is user put request");
})

app.delete("/user", (req, res) => {
    res.send("This is user delete request");
})

app.patch("/user", (req, res) => {
    res.send("This is user patch request");
})

// start the server at port 3000
app.listen(3000);
