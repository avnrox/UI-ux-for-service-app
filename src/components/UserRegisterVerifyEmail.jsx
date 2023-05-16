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

const newRandomNumber = Math.floor(Math.random() * 1000) + 1;



const theme = createTheme();

export const UserRegisterVerifyEmail = () => {

  
  const [OTP, setOTP] = useState([]); 
  const navigate = useNavigate();

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

  const [check, setCheck] = useState(false);
    async function sendEmail(e) {
    e.preventDefault();
     console.log("test", e);
     console.log("checking just the message?", e.target.message.value);

    //  const modifiedMessage = newRandomNumber;

    await emailjs.sendForm("service_8c89192", apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
    .then((result) => {
    console.log(result.text);
    // navigate('/userregister')
    setCheck(true);
    }, (error) => {
    console.log(error.text);
    });
   }

   const handleOTPChange = (event) => {
    setOTP(event.target.value);
    console.log("OTP updated:", event.target.value);
  };

      // const newRandomNumber = Math.floor(Math.random() * 100) + 1;



      const handleOTPVerification = (e) => {
        e.preventDefault();
        console.log("OTP:", OTP);
        console.log("newRandomNumber:", newRandomNumber);
      
        const parsedOTP = parseInt(OTP);

        console.log("Type of newRandomNumber:", typeof newRandomNumber);
console.log("Type of parsedOTP:", typeof parsedOTP);
        if (!isNaN(parsedOTP) && parsedOTP === newRandomNumber) {
          console.log("OTP is correct");
          localStorage.setItem("userverifyemail", to);
          console.log("to email",localStorage.getItem("userverifyemail"));
          navigate('/userregister');
        } else {
          console.log("OTP is incorrect");
          window.alert("OTP is incorrect");
        }
      };
   
           
                
        



  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <form onSubmit={sendEmail}>
    {/* <input type="text" name="user_name" /> */}
    {/* <TextField
    required
    fullWidth
    name="topic"
    label="name"
    type="text"
    id="topic"
    // autoComplete="OTP"
    value={topic}
    // onChange={setOTP}
    onChange={handletempusernameChange}
  /> */}
    {/* <input type="email" name="user_email" /> */}
    {/* <input type="text" name="user_email" /> */}
    <TextField
    required
    fullWidth
    name="to"
    label="email"
    type="text"
    id="to"
    // autoComplete="OTP"
    value={to}
    // onChange={setOTP}
    onChange={handletempuseremailChange}
  />
 <textarea name="message" value={newRandomNumber} readOnly style={{ display: 'none' }} />


   <input type="submit" value="Send Email" />
   </form>
    {/* <textarea name="message" /> */}
    {/* <input type="text" name="message" /> */}
    {check ? (
      <div>
  <TextField
    required
    fullWidth
    name="message"
    label="OTP"
    type="text"
    id="message"
    // autoComplete="OTP"
    value={OTP}
    onChange={handleOTPChange}
    // onChange={handletemputextChange}
  />
     <Button
          type="submit"
          fullWidth
          variant="contained"
          onClick={handleOTPVerification}
          sx={{ mt: 3, mb: 2 }}
        >
          Verify OTP
        </Button>
      </div>
    ) : null}
  
  
  {/* <h1> Random Number: {newRandomNumber}</h1> */}
   
    
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
    
  );
}