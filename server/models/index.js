var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.con.query('SELECT * messages', function (err, rows, fields) {
        if (!err) {
          console.log('Here are all the messages: rows', rows, 'fields: ', fields);
        } else {
          console.log('Error while perfoming query');
        }
      });
    }, // a function which produces all the messages
    post: function (callback) {
      console.log('messages is being called');      
      console.log('req body: ', req.body);

      db.con.query('insert into messages (message) values (\"Hello World\")', function (err, rows, fields) {
        if (!err) {
          console.log('Message was inserted');
          callback(rows);
        } else {
          console.log('Woops message was not inserted');
        }
      });

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {

    },
    post: function () {
      console.log('post 2');

    }
  }
};

