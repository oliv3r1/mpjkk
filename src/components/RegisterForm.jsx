import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import useForm from '../hooks/FormHooks';
import {useUser} from '../hooks/ApiHooks';
import {Button} from '@mui/material';
import {Container} from '@mui/system';
import {registerForm} from '../utils/errorMessages';
import {registerValidators} from '../utils/validators';

const RegisterForm = (props) => {
  const {postUser, getCheckUser} = useUser();

  const initValues = {
    username: '',
    password: '',
    email: '',
    full_name: '',
  };

  const doRegister = async () => {
    try {
      const userResult = await postUser(inputs);
      alert(userResult.message);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleUsername = async () => {
    const {available} = await getCheckUser(inputs.username);
    available || alert('Username not available');
  };

  const {inputs, handleSubmit, handleInputChange} = useForm(
    doRegister,
    initValues
  );

  return (
    <Container maxWidth>
      <ValidatorForm onSubmit={handleSubmit}>
        <TextValidator
          fullWidth
          margin="dense"
          name="username"
          label="Username"
          onChange={handleInputChange}
          value={inputs.username}
          validators={registerValidators.username}
          errorMessages={registerForm.username}
        />
        <TextValidator
          fullWidth
          margin="dense"
          name="password"
          type="password"
          label="Password"
          onChange={handleInputChange}
          value={inputs.password}
          validators={registerValidators.password}
          errorMessages={registerForm.password}
        />
        <TextValidator
          fullWidth
          margin="dense"
          name="email"
          type="email"
          label="Email"
          onChange={handleInputChange}
          value={inputs.email}
          validators={registerValidators.email}
          errorMessages={registerForm.email}
        />
        <TextValidator
          fullWidth
          margin="dense"
          name="full_name"
          label="Full name"
          onChange={handleInputChange}
          value={inputs.full_name}
          validators={registerValidators.full_name}
          errorMessages={registerForm.full_name}
        />
        <Button fullWidth sx={{mt: 1}} variant="contained" type="submit">
          Register
        </Button>
      </ValidatorForm>
    </Container>
  );
};

RegisterForm.propTypes = {};

export default RegisterForm;
