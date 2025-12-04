const express = require('express');
const { connectDatabase } = require('./config/database');

// express server instance
const app = express();

// starting the server after db connection is established
connectDatabase().then(() => {
    console.log('Connected to database');
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
})
    .catch((err) => { 
        console.error('Database connection error: ', err);
    })
