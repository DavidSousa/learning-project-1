const mongoose = require('mongoose');
const config = require('../config/config');


// Connect to the database
// construct the database URI and encode username and password.
const dbURI = `mongodb://${encodeURIComponent(config.db.username)}:${encodeURIComponent(config.db.password)}@${config.db.host}:${config.db.port}/${config.db.name}`;

mongoose.connect(dbURI);

// Throw an error if the connection fails
mongoose.connection.on('error', (err) => {
  if (err) {
    throw err;
  }
});

module.exports = mongoose;
