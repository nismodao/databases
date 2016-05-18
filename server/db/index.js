var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'chat'
});

con.connect(function (err) {
  if (err) {
    console.log('Error connecting to Db', err);
    return;
  }
  console.log('Connection to chat database established');
});

module.exports = con;
