const express = require('express');

// express server instance
const app = express();

// handling middlewares from separate file as authAdmin and authUser from auth.js
const {authAdmin, authUser} = require('./middlewares/auth');

// request handlers
app.use('/admin', authAdmin);
app.use('/user', authUser);

app.get('/user/getInfo', authUser, (req, res) => {
    res.send("User Info");
});
app.listen(3000);
