const isInvalidData = {
  status: 400,
  type: 'isInvalidData',
  message: 'Your data is invalid. Check it and send again.'
}

const emailAreadyUse = {
  status: 400,
  type: 'emailAreadyUse',
  message: 'Is email already used. Choice another.'
}

const emailNotLogined = {
  status: 400,
  type: 'emailNotLogined',
  message: 'This user is missing. Check email or go through registration.'
}

const passwordWrong = {
  status: 400,
  type: 'passwordWrong',
  message: 'This password is wrong'
}

class ppp {
  constructor() {
    // super('dsfsdfsdfs');
    // this.ddd = 'dddd';
    // this.status = 300;
  }

  get status() {
    return 500;
  }
}

module.exports = [ 
  ppp,
  isInvalidData,
  emailAreadyUse,
  emailNotLogined,
  passwordWrong,
];
