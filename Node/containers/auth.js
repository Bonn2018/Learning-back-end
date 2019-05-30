const bcrypt = require('bcrypt');

function sendNewUser(user, db, response) {
  let userInformation = user;

  userInformation.password = bcrypt.hashSync(user.password, 10);

  db.collection('Users').insert(userInformation, function (err, result) {
    if(err) {
      console.log(err);
      request.sendStatus(500);
    }
    response.json({ "status": "logged in" });
  });
}

function auth(db, request, response) {
  const user = request.body;

  db.collection('Users').findOne({ email: user.email }, function (err, doc) {
    if(err) {
      console.log(err);
      return request.sendStatus(500);
    }

    if(!doc) {
      sendNewUser(user, db, response);
    } else {
      response.json({ "status": "email already use" });
    }
  });
}

function signIn(db, request, response) {
  const user = request.body;

  db.collection('Users').findOne({ email: user.email }, function (err, doc) {
    if(err) {
      console.log(err);
      return request.sendStatus(500);
    }
    if(bcrypt.compareSync(user.password, doc.password) && !!doc) {
      response.json({ "status": "welcome" });
     } else if(!doc) {
      response.json({ "status": "email not found" });

     } else {
      response.json({ "status": "password wrong" });
     }
  });
}

module.exports = { auth, signIn };

