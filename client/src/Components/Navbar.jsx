import { Link, useLocation, useNavigate } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {jwtDecode as jwt_decode} from 'jwt-decode';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout'
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import * as actionType from '../constants/actionTypes';
import { useDispatch } from 'react-redux';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Navbar = () => {

  const [inputSearch, setInputSearch] = useState("");
  const [user, setUser] = useState(localStorage.getItem("user"));
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setUser(localStorage.getItem("user"));
  }, [user, location]);

  const handleKeyPress = (e) => {
    if (e.keyCode === 13)
      alert(inputSearch);
  }

  const logOut = () => {
    dispatch({ type: actionType.LOGOUT });
    navigate('/login');
    setUser(null);
  }

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      const decodedToken = jwt_decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logOut();
    }
    setUser(localStorage.getItem("user"));
  }, [user,location]);
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ height: '60px', borderRadius: '10px', backgroundColor: '#03464a' }}>
        <Toolbar>

          <Typography
            variant="h4"
            noWrap
            component={Link}
            to='/'
            underline='none'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            style={{ fontWeight: 'bolder', color: 'white', textDecoration: 'none' }}
          >
            zeeRaaw
          </Typography>
          
          <Search sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              value={inputSearch}
              onChange={(e) => setInputSearch(e.target.value)}
              onKeyDown={handleKeyPress}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          
          
          {
            user? (
              <>
                <Typography
                  variant="h5"
                  noWrap
                  sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                  style={{ fontWeight: 'bolder', color: 'white', textDecoration: 'none', textAlign: 'center' }}
                >
                  {user}
                </Typography>
                <Button
                  noWrap
                  sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                  style={{ fontWeight: 'bolder', color: 'white', textDecoration: 'none', background:'#d11534'}}
                  onClick={logOut}
                >
                  Logout <LogoutIcon style={{ fontSize: '20px' }} />
                </Button>
              </>
            ) : (
              <>
              <Typography
                  variant="h5"
                  noWrap
                  sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                  style={{ fontWeight: 'bolder', color: 'white', textDecoration: 'none', textAlign: 'center' }}
                >
                  
                </Typography>
              <Button
                noWrap
                component={Link}
                to='/login'
                underline='none'
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                style={{ fontWeight: 'bolder', color: 'white', textDecoration: 'none', background:'#d18615', textAlign: 'center' }}
              >
                Login <LoginIcon style={{ fontSize: '20px' }} />
              </Button>
              </>
            )
          }
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;