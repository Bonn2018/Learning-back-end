const state = document.getElementById('req_state');
const proxyurl = "https://cors-anywhere.herokuapp.com/";


function sendReq() {
  fetch('http://localhost:3000/ddss', 
  {
    method: 'GET',
    // mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
      "Accept": 'application/json',
      // "Origin": 'http://localhost/',
      // "mode": 'no-cors',
      // "Host": 'localhost:3000'
    },
  })
    // .then(res => res)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

sendReq();
