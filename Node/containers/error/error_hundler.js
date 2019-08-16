const Err = require('./error');

// function errHandler(type, res) {

function errHandler(err, req, res, next) {
  console.log(err, req, res, next)
  // const error = Err.find(item => item.type === type);
  // console.log(error)
  // if (typeof error === 'undefined') {
  //   console.log(err);
  //   res.status(500).json({ message: 'Something went wrong.' });
  // }

  // res.status(500).json({ message: 'Something went wrong.' });
}

module.exports = { errHandler };