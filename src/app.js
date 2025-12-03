const express = require('express');

// express server instance
const app = express();

// handling middlewares from separate file as authAdmin and authUser from auth.js
// const {authAdmin, authUser} = require('./middlewares/auth');

// request handlers
// app.use('/admin', authAdmin);
// app.use('/user', authUser);

// app.get('/user/getInfo', authUser, (req, res) => {
//     res.send("User Info");
// });
app.get('/getUserInfo', (req, res) => {
    try {
        // try logic here...
    throw new Error("Simulated server error");
    res.send("User Info");
    } catch (err) {
        res.status(500).send('Internal Server Error: ' + err.message);
    }
});

// app.use('/', (err, req, res, next) => {
//   // here error is handled properly.
//   res.status(500).send('Internal Server Error: ' + err.message);
// });

app.listen(3000);
