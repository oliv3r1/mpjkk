import {useContext, useEffect} from 'react';
import {Navigate} from 'react-router-dom';
import {MediaContext} from '../context/MediaContext';

const Logout = (props) => {
  const {setUser} = useContext(MediaContext);
  useEffect(() => {
    setUser(null);
    localStorage.removeItem('userToken');
  });

  return <Navigate to="/" />;
};

Logout.propTypes = {};

export default Logout;
