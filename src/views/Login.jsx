import {Grid, Button, Typography} from '@mui/material';
import {useState} from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const Login = (props) => {
  const [formToggle, setFormToggle] = useState(true);
  const toggle = () => {
    setFormToggle(!formToggle);
  };
  return (
    <Grid container direction="column" alignItems="center" sx={{mt: 2}}>
      <Grid item xs={5}>
        <Typography component="h1" variant="h3">
          Login/Register
        </Typography>
      </Grid>
      <Grid item xs={5}>
        {formToggle ? <LoginForm /> : <RegisterForm />}
      </Grid>
      <Grid item xs={5}>
        <p>{formToggle ? 'First time here?' : 'or'}</p>
      </Grid>
      <Grid item xs={5}>
        <Button onClick={toggle}>{formToggle ? 'Register' : 'Login'}</Button>
      </Grid>
    </Grid>
  );
};

Login.propTypes = {};

export default Login;
