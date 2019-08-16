const state = document.getElementById('req_state');
const fieldName = document.getElementById('field_name');
const fieldSurname = document.getElementById('field_surname');
const fieldEmail = document.getElementById('field_email');
const fieldPassword = document.getElementById('field_password');
const button = document.getElementById('button_login');
const buttonSignIn = document.getElementById('button_sign_in');
const title = document.getElementById('status');
const fields = {
  name: '',
  surname: '',
  email: '',
  password: '',
}

function changeField(type, e) {
  fields[type] = e.target.value;
}

function sendAuthData() {
  fetch('http://localhost:4000/auth', 
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "Accept": 'application/json',
    },
    body: JSON.stringify(fields),
  })
    .then(res => res.json())
    .then(res => showStateResponse(res))
    .catch(err => console.log(err));
}

function signIn() {
  fetch('http://localhost:4000/sign_in', 
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "Accept": 'application/json',
    },
    body: JSON.stringify(fields),
  })
    .then(res => res.json())
    .then(res => showStateResponse(res))
    .catch(err => console.log(err));
}

function showStateResponse(res) {
  title.innerHTML = res.status;
}

button.addEventListener('click', () => sendAuthData());
fieldName.addEventListener('change', (e) => changeField('name', e));
fieldSurname.addEventListener('change', (e) => changeField('surname', e));
fieldEmail.addEventListener('change', (e) => changeField('email', e));
fieldPassword.addEventListener('change', (e) => changeField('password', e));
buttonSignIn.addEventListener('click', (e) => signIn());