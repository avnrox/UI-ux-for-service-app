import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import UserLoginValidation from './UserLoginValidation';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();


export const UserLogin = () => { 

  const [user,setUser] = useState({
    user_id:"",
    user_pwd:""
  })
  // const [user,setUser] = useState({
  //   user_id:"",
  //   user_pwd:""
  // })

  const{user_id, user_pwd}=user
  const navigate = useNavigate();

  const [errors, setError] = useState({})
  const valdn = errors.user_id;
  const valdp = errors.user_pwd;

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   username: data.get('username'),
    //   password: data.get('password'),
    // });
    console.log("hello,",user)
    await axios.post("http://localhost:8082/users/login?user_id="+user_id+"&user_pwd="+user_pwd) 
    .then((response) => {
      console.log("response"+response.data)
      // localStorage.setItem("token",response.data.token)
      localStorage.setItem("user_id",response.data)
      console.log("user_id",localStorage.getItem("user_id"))
      // localStorage.setItem("user_name",response.data.user_name)
      // localStorage.setItem("user_email",response.data.user_email)
      // localStorage.setItem("user_mobile",response.data.user_mobile)
      // localStorage.setItem("user_role",response.data.user_role)
      // localStorage.setItem("user_status",response.data.user_status)
      // localStorage.setItem("user_created_at",response.data.user_created_at)
      // localStorage.setItem("user_updated_at",response.data.user_updated_at)
      if ( valdn === "Cant be empty" || 
      valdn === "Invalid email-id entered" || 
      valdp === "Password field cant be empty" ||
      valdp === "Password needs atleast 4 charectors" ||
      valdn === "Wrong or unregistered email" ||
      valdp === "Wrong Password"){
        //navigate('/UserHome')
      }
      else if (response.data === "empty"){
        errors.user_id = "Wrong or unregistered Email";
      }
      else if (response.data === "wrong pwd!"){
        errors.user_pwd = "Wrong password";
      }
      else if(errors.user_id === "\u2713" && errors.user_pwd === "\u2713") {
        navigate('/UserHome')
      }
      setUser({...user,[e.target.name]:e.target.value}) //done to update and show error to the user when they enter wrong pass or email


    })
    
    //navigate('/UserHome')
  };
 



  const onInputChange  = (e) => {
      setUser({...user,[e.target.name]:e.target.value})
      setError(UserLoginValidation(user));

  }


  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?admin)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="user_id"
                label="Username"
                name="user_id"
                autoComplete="username"
                autoFocus
                value={user.user_id}
                onChange={(e) => onInputChange(e)}
              />
              {errors.user_id && <p style={{color: "red", fontSize: "13px" }}>{errors.user_id}</p>}
              <TextField
                margin="normal"
                required
                fullWidth
                name="user_pwd"
                label="Password"
                type="password"
                id="user_pwd"
                autoComplete="current-password"
                value={user.user_pwd}
                onChange={(e) => onInputChange(e)}
              />
              {errors.user_pwd && <p style={{color: "red", fontSize: "13px" }}>{errors.user_pwd}</p>}
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                {/* <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid> */}
                <Grid item>
                  <Link href="userregisterverify/" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>

  );
}