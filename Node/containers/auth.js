const bcrypt = require('bcrypt');
const { errHandler} = require('./error/error_hundler');
const Err = require('./error/error');

function sendNewUser(user, db, response) {
  let userInformation = user;

  userInformation.password = bcrypt.hashSync(user.password, 10);

  db.collection('Users').insert(userInformation, function (err, result) {
    if(err) {
      throw new errHandler(err, response);
    }

    response.json({ "status": "logged in" });
  });
}

function auth(db, request, response) {
  const user = request.body;

  db.collection('Users').findOne({ email: user.email }, function (err, doc) {
    if(err) {
      throw new errHandler(err, response);
    }

    if(!doc) {
      sendNewUser(user, db, response);
    } else {
      throw new Error('fff')
    }
  });
}

function signIn(db, request, response) {
  const user = request.body;

  db.collection('Users').findOne({ email: user.email }, function (err, doc) {
    if(err) {
      throw new errHandler(err, response);
    }
    if(bcrypt.compareSync(user.password, doc.password) && !!doc) {
      response.json({ "status": "welcome" });
     } else if(!doc) {
      throw new errHandler('emailNotLogined', response);
     } else {
      throw new errHandler('passwordWrong', response);
     }
  });
}

module.exports = { auth, signIn };

