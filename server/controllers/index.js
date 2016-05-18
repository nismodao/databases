var models = require('../models');

module.exports = {

  messages: {
    get: function (req, res) {
      models.messages.get(function (err,result) {
        if (err) {
          console.log(err);
        } else {
        res.sendStatus(200);
        res.json(result);
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req, res, function (err,result) {
        res.sendStatus(201).end();
      });
    } // a function which handles posting a message to the database
    //req.body contains the post information
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(req, res, function (err,result) {
        if (err) {
          console.log(err);
        } else {
          res.sendStatus(201);
          res.json(result); 
        }

      });
    },
    post: function (req, res) {
      models.users.post(req, res, function (err,result) {
        if (err) {
          console.log(err);
        } else {
          res.sendStatus(201).end();
        }
      });
    
    }
  }
};

