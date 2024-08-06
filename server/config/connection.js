const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.DB_URI || 'mongodb://127.0.0.1:27017/googlebooks');

module.exports = mongoose.connection;
