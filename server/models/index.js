var db = require('../db');
module.exports = {
  messages: {
    get: function (callback) {
      db.query('SELECT * from messages', function (err, result) {
        if (!err) {
          console.log('Here are all the messages: rows', rows);
          callback(result);
        } else {
          console.log('Error while perfoming query');
          callback(err);
        }
      });
    }, // a function which produces all the messages
    post: function (req,res,callback) {
    var message = req.body.message;
    var room = req.body.roomname;
    var user = req.body.username;
      db.query('insert into messages (message) values (?)', [message], function (err, result) {
        if (!err) {
          console.log('Message was inserted');
          callback(result);
        } else {
          console.log('Woops message was not inserted err is', err);
          callback(err);
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (req, res, callback) {
      var user = req.body.username;
      db.query('SELECT * from users where user =' + user, function (err, results) {
        if (!err) {
          console.log('Here are all the messages: rows', rows);
          callback(results);
        } else {
          console.log('Error while perfoming query');
        }
      });
    },
    post: function (req, res, callback) {
      var message = req.body.message;
      var room = req.body.roomname;
      var user = req.body.username;
        db.query('insert into users (user) values (?)', [user], function (err, result) {
          if (!err) {
            console.log('Message was inserted');
            callback(result);
          } else {
            console.log('Woops message was not inserted err is', err);
            callback(err);
          }
        });
    }
  }
};

