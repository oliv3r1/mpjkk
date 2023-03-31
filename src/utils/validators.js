const registerValidators = {
  username: ['required', 'minStringLenth: 3'],
  password: ['required', 'minStringLenth: 5'],
  confirm: [],
  email: ['This field is required', 'isEmail'],
  full_name: ['minStringLenth: 3'],
};

const loginValidators = {
  username: ['required'],
  password: ['required'],
};

export {registerValidators, loginValidators};
