const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL || 'mongodb://0.0.0.0/ERS');
//mongoose.connect('mongodb://0.0.0.0/ERS');
//mongoose.connect(process.env.MONGODB_URL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error connecting to the db'));
db.once('open', function () {
  console.log("Successfully connected to the Database:: MongoDB");
});
module.exports = db;