var models = require('../models');

module.exports = {

  messages: {
    get: function (req, res) {
      //req.body contains our information, pass this into our function below. 
      //models.messages.get();
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('messages is being called');      
      console.log('req body: ', req.body);
    } // a function which handles posting a message to the database
    //req.body contains the post information
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      console.log('post 3');
      db.con.query('insert into messages (message) values (\"Hello World\")', function (err, rows, fields) {
        if (!err) {
          console.log('Message was inserted');
        } else {
          console.log('Woops message was not inserted');
        }
      });
    
    }
  }
};

