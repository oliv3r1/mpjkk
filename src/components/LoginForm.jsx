import {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {MediaContext} from '../context/MediaContext';
import {useAuthentication} from '../hooks/apiHooks';
import useForm from '../hooks/FormHooks';
import Button from '@mui/material/Button';
import {TextField} from '@mui/material';

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
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          name="username"
          placeholder="Username"
          onChange={handleInputChange}
          value={inputs.username}
        />
        <TextField
          fullWidth
          margin="dense"
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleInputChange}
          value={inputs.password}
        />
        <Button fullWidth sx={{mt: 0.7}} variant="contained" type="submit">
          Login
        </Button>
      </form>
    </>
  );
};

LoginForm.propTypes = {};

export default LoginForm;
