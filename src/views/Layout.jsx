import {
  AppBar,
  Box,
  Button,
  Container,
  createTheme,
  ThemeProvider,
  Toolbar,
} from '@mui/material';
import {useContext, useEffect} from 'react';
import {Link, Outlet, useLocation, useNavigate} from 'react-router-dom';
import {MediaContext} from '../context/MediaContext';
import {useUser} from '../hooks/apiHooks';
import {themeOptions} from '../theme/themeOptions';

const Layout = () => {
  const {user, setUser} = useContext(MediaContext);
  const {getUserByToken} = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  const getUserInfo = async () => {
    const userToken = localStorage.getItem('userToken');
    if (userToken) {
      console.log(userToken);
      const user = await getUserByToken(userToken);
      if (user) {
        setUser(user);
        console.log('Layout', user);
        const target = location.pathname === '/' ? '/home' : location.pathname;
        navigate(target);
        return;
      }
    }
    navigate('/');
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const theme = createTheme(themeOptions);
  return (
    <ThemeProvider theme={theme}>
      <Container fixed>
        <AppBar position="sticky">
          <Toolbar>
            <Box sx={{flexGrow: 1, display: {xs: 'flex'}}}>
              <Button
                sx={{my: 2, color: 'white', display: 'block'}}
                component={Link}
                to="/home"
              >
                Home
              </Button>
              {user ? (
                <>
                  <Button
                    sx={{my: 2, color: 'white', display: 'block'}}
                    component={Link}
                    to="/profile"
                  >
                    Profile
                  </Button>

                  <Button
                    sx={{my: 2, color: 'white', display: 'block'}}
                    component={Link}
                    to="/logout"
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <Button
                  sx={{my: 2, color: 'white', display: 'block'}}
                  component={Link}
                  to="/"
                >
                  Login
                </Button>
              )}
            </Box>
          </Toolbar>
        </AppBar>
        <main>
          <Outlet />
        </main>
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
