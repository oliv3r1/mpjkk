import {Button, Container} from '@mui/material';
import {useContext} from 'react';
import {TextValidator, ValidatorForm} from 'react-material-ui-form-validator';
import {useNavigate} from 'react-router-dom';
import {MediaContext} from '../context/MediaContext';
import {useAuthentication} from '../hooks/ApiHooks';
import useForm from '../hooks/FormHooks';
import {registerForm} from '../utils/errorMessages';
import {registerValidators} from '../utils/validators';

const LoginForm = (props) => {
  const {setUser} = useContext(MediaContext);
  const {postLogin} = useAuthentication();
  const navigate = useNavigate();

  const initValues = {
    username: '',
    password: '',
  };

  const doLogin = async () => {
    try {
      const loginResult = await postLogin(inputs);
      localStorage.setItem('userToken', loginResult.token);
      setUser(loginResult.user);
      navigate('/home');
    } catch (error) {
      alert(error.message);
    }
  };

  const {inputs, handleSubmit, handleInputChange} = useForm(
    doLogin,
    initValues
  );

  return (
    <Container maxWidth="xs">
      <ValidatorForm onSubmit={handleSubmit} noValidate>
        <TextValidator
          fullWidth
          margin="dense"
          name="username"
          label="Username"
          onChange={handleInputChange}
          value={inputs.username}
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
        <Button fullWidth sx={{mt: 1}} variant="contained" type="submit">
          Login
        </Button>
      </ValidatorForm>
    </Container>
  );
};
LoginForm.propTypes = {};

export default LoginForm;
