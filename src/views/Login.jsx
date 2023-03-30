import {Grid} from '@mui/material';
import {useState} from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const Login = (props) => {
  const [formToggle, setFormToggle] = useState(true);
  const toggle = () => {
    setFormToggle(!formToggle);
  };
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item xs={5}>
        {formToggle ? <LoginForm /> : <RegisterForm />}
      </Grid>
      <Grid item xs={5}>
        <p>{formToggle ? 'First time here?' : 'or'}</p>
      </Grid>
      <Grid item xs={5}>
        <button onClick={toggle}>{formToggle ? 'Register' : 'Login'}</button>
      </Grid>
    </Grid>
  );
};

Login.propTypes = {};

export default Login;
