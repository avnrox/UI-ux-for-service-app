import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import RegisterValidation from './RegisterValidation';
import emailjs from 'emailjs-com'
import apiKeys from './apiKeys'


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

function sendEmail(e) {
   e.preventDefault();
    console.log("test", e);
   emailjs.sendForm("service_8c89192", apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
   .then((result) => {
   console.log(result.text);
   }, (error) => {
   console.log(error.text);
   });
  }

const theme = createTheme();

export const UserRegister = () => {

  const [user,setUser] = useState({
    userId:"",
    userPwd:"",
    email:"",
    confirmPwd: "",
  })
  const [OTP, setOTP] = useState([]); 

  const [topic, settempusername] = useState([]);
  const [to, settempuseremail] = useState([]);
  const [message, settemptext] = useState([]);

  const handletempusernameChange = (event) => {
    settempusername(event.target.value);
  };
  const handletempuseremailChange = (event) => {
    settempuseremail(event.target.value);
  };
  const handletemputextChange = (event) => {
    settemptext(event.target.value);
  };



   const [errors, setError] = useState({})
  const valdn = errors.userId;
  const valdp = errors.userPwd;

  const{userId, userPwd, email}=user
  const navigate = useNavigate();

  const onConfirmPwdChange = (e) => {
    setUser({ ...user, confirmPwd: e.target.value });
  };

  const handleOTPChange = (event) => {
    setOTP(event.target.value);
  };

  // const [message, setMessage] = useState('');
  // const [randomNumber, setRandomNumber] = useState(0);

    // const handlete = () => {
    const newRandomNumber = Math.floor(Math.random() * 100) + 1;
  //   setRandomNumber(newRandomNumber);
  //   setMessage(String(newRandomNumber));
  // };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   username: data.get('username'),
    //   password: data.get('password'),
    // });
    if ( valdn === "Cant be empty" || 
      valdn === "Invalid email-id entered" || 
      valdp === "Password field cant be empty" ||
      valdp === "Password needs atleast 4 charectors"){
        //stop navigation.
      }
      else if (user.userPwd !== user.confirmPwd){
        // setError({ confirmPwd: "Passwords do not match" });
        window.alert("Passwords do not match");
        return;
      }
      else if(errors.userId === "\u2713" && errors.userPwd === "\u2713") {
        await axios.post("http://localhost:8082/users/register", user)
        .then((response) => {
          console.log(response.data)
          // localStorage.setItem("token",response.data.token)
          localStorage.setItem("user_id",response.data.user_id)
          console.log("user_id",localStorage.getItem("user_id"))
          if (response.data === "user does exist!"){
            errors.userId = "User already exisits!"
            setUser({...user,[e.target.name]:e.target.value})//to show user exisists
          }
          else{
            navigate('/userlogin')
          }
          setError(RegisterValidation(user));
          setUser({...user,[e.target.name]:e.target.value})
          // localStorage.setItem("user_name",response.data.user_name)
          // localStorage.setItem("user_email",response.data.user_email)
          // localStorage.setItem("user_mobile",response.data.user_mobile)
          // localStorage.setItem("user_role",response.data.user_role)
          // localStorage.setItem("user_status",response.data.user_status)
          // localStorage.setItem("user_created_at",response.data.user_created_at)
          // localStorage.setItem("user_updated_at",response.data.user_updated_at)           
        })
      }
    //await axios.post("http://localhost:8082/users/register",user)
    //navigate('/UserHome')
  };
 

  const onInputChange  = (e) => {
    setUser({...user,[e.target.name]:e.target.value})
    setError(RegisterValidation(user));
      const { name, value } = e.target;
      if (name === "userId") {
        setUser({
          ...user,
          userId: value,
          email: value, // set email to the same value as userId
        });
      } else {
        setUser({
          ...user,
          [name]: value,
        });
      }

  }



  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid> */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="userId"
                  label="Username"
                  name="userId"
                  autoComplete="Username"
                  value={userId}
                  onChange={(e) => onInputChange(e)}
                />
                {errors.userId && <p style={{color: "red", fontSize: "13px" }}>{errors.userId}</p>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="userPwd"
                  label="Password"
                  type="password"
                  id="userPwd"
                  autoComplete="new-password"
                  value={userPwd}
                  onChange={(e) => onInputChange(e)}
                />
                {errors.userPwd && <p style={{color: "red", fontSize: "13px" }}>{errors.userPwd}</p>}
              </Grid>
              <Grid item xs={12}>
  <TextField
    required
    fullWidth
    name="confirmPwd"
    label="Confirm Password"
    type="password"
    id="confirmPwd"
    autoComplete="new-password"
    value={user.confirmPwd}
    onChange={onConfirmPwdChange}
  />
</Grid>

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
           
          </Box>
        </Box>
      
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
    
  );
}