const mongoose = require('mongoose');

const connectDatabase = async () => {
    await mongoose.connect(
      'mongodb+srv://sourabhbagde:ZRvlCuNWVTElRwkg@nodeproject01.lgtpdsn.mongodb.net/',
    );
}

module.exports = { connectDatabase };