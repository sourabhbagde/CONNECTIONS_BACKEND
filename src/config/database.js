const mongoose = require('mongoose');

const connectDatabase = async () => {
    await mongoose.connect(
      'mongodb+srv://sourabhbagde:UEeZFSgS6i3mYkPZ@connections.qrfepvi.mongodb.net/',
    );
}

module.exports = { connectDatabase };