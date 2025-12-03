const mongoose = require('mongoose');

const connectDatabase = async () => {
    await mongoose.connect(
      'mongodb+srv://sourabhbagde:ZRvlCuNWVTElRwkg@nodeproject01.lgtpdsn.mongodb.net/',
    );
}

connectDatabase().then(() => {
    console.log('Connected to database');
})
    .catch((err) => { 
        console.error('Database connection error: ', err);
    })