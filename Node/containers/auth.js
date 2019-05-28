
function sendNewUser(user, db, response) {
  db.collection('Users').insert(user, function (err, result) {
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

module.exports = auth;

