const registerForm = {
  username: ['This field is required', 'Minimum lenght 3'],
  password: ['This field is required', 'Minimum lenght 5'],
  confirm: ['This field is required'],
  email: ['This field is required', 'isEmail'],
  full_name: ['Minimum lenght 3'],
};

const loginForm = {
  username: ['This field is required'],
  password: ['This field is required'],
};

export {registerForm, loginForm};
