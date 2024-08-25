import {
  Avatar,
  Paper,
  Grid,
  Typography,
  Container,
  TextField, 
  InputAdornment, 
  IconButton
} from '@mui/material'
import Button from '@mui/material/Button';
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './LoginForm.css'
import { useState } from 'react'
import * as api from '../API'
import { useNavigate } from 'react-router-dom';
import { signin, signup } from '../actions/auth';
import { useDispatch } from 'react-redux';

const initialState = { firstName:'', lastName:'', email:'', password:'', confirmPassword:'' };

const Input = ({ name, handleChange, label, half, autoFocus, type, handleShowPassword }) => (
  <Grid item xs={12} sm={half ? 6 : 12}>
    <TextField
      name={name}
      onChange={handleChange}
      variant="filled"
      required
      color="warning"
      fullWidth
      label={label}
      autoFocus={autoFocus}
      type={type}
      InputProps={name === 'password' ? {
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleShowPassword}>
              {type === 'password' ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      } : null}
    />
  </Grid>
);

const LoginForm = () => {

  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleShowPassword = () => setShowPassword(!showPassword);
  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    if(isSignup){/*
      const {data} = await api.signUp(formData);
      const {token} = data;
      const {user} = data;
      const {name} = user;
      localStorage.setItem('authToken', token);
      localStorage.setItem('user', name)
      navigate('/')*/
      dispatch(signup(formData, navigate));
    }
    else{/*
      const {data} = await api.signIn(formData);
      const {token} = data;
      const {user} = data;
      const {name} = user;
      localStorage.setItem('authToken', token);
      localStorage.setItem('user', name)
      navigate('/')*/
      dispatch(signin(formData, navigate));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container component="main" maxWidth="xs" className='form-main'>
      <Paper elevation={3} className='paper-form' style={{backgroundColor:'rgba(255, 255, 255, 0.781)', backdropFilter:'blur(4px)'}}>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {isSignup ? "Sign up" : "Sign in"}
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <br />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className='submit-btn'
            style={{background:'#d18615'}}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>

          <Grid container>
            <Grid item>
              <Button onClick={switchMode} style={{color:'rgb(0, 105, 91)', fontWeight:'bolder'}}>
                {isSignup
                  ? "Already have an account? Sign in"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default LoginForm
