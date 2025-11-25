const express = require('express');

// express server instance
const app = express();

const {authAdmin, authUser} = require('./middlewares/auth');

// request handlers
app.use('/admin', authAdmin);
app.use('/user', authUser);

app.get('/user/getInfo', (req, res) => {
    res.send("User Info");
});
app.listen(3000);
