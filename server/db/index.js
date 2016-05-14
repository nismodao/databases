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
    console.log(err);
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection to chat database established');
});

// con.query('insert into messages (message) values (\"Hello World\")', function (err, rows, fields) {
//   if (!err) {
//     console.log('Message was inserted');
//   } else {
//     console.log('Woops message was not inserted');
//   }
// });

// con.query('SELECT * from messages', function (err, rows, fields) {
//   if (!err) {
//     console.log('Here are all the messages: rows', rows);
//   } else {
//     console.log('Error while perfoming query');
//   }
// });



con.end(function(err) {

});
