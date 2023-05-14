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
import axios from "axios";
import { useState } from 'react';
import ServiceprovidersignupValidation from './ServiceprovidersignupValidation';

// const onInputChange = (e) => {
//   const { name, value } = e.target;
//   console.log("test", name, value);
//   setService({ ...service, [name]: value });
// };

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



export const ServiceProviderRegister = () => {

  const areas = [
    {
      id: 1,
      name: 'Southampton',
    },
    {
      id: 2,
      name: 'London',
    },
    {
      id: 3,
      name: 'Manchester',
    },
    {
      id: 4,
      name: 'Birmingham',
    },
    {
      id: 5,
      name: 'Edinburgh',
    },
    {
      id: 6,
      name: 'Leeds',
    },
  ];

  const [serviceprovider, setServiceProvider] = React.useState({
    providerId:"",
    providerPwd:"",
    providerAdd:"",
    description:""
  })
  const [errors, setError] = useState({})
  const valdn = errors.providerId;
  const valdp = errors.providerPwd;
  const valdd = errors.description;
  
  const{providerId, providerPwd, providerAdd, description}=serviceprovider

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   username: data.get('username'),
    //   password: data.get('password'),
    // });
    
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
      valdd === "Cant be empty" ||
      valdd === "Too Short Description." ){
        //no navigate
      }
      else if (errors.providerId === "\u2713" && errors.providerPwd === "\u2713" && errors.description === "\u2713")
      {
        await axios.post("http://localhost:8082/serviceprovider/register", serviceprovider)
        .then((response) => {
          console.log(response.data)
          // localStorage.setItem("token",response.data.token)
          localStorage.setItem("provider_id",response.data)
          console.log("provider_id",localStorage.getItem("provider_id"))
          if (response.data === "user does exsit!"){
            errors.providerId = "User Exisits";
          }
          else {
            navigate('/serviceproviderlogin') 
          }
          
        })
        
      }
    
    
    //navigate('/ServiceProviderHome')

  }
  const navigate = useNavigate();

  const onInputChange  = (e) => {
    setError(ServiceprovidersignupValidation(serviceprovider));
    setServiceProvider({...serviceprovider,[e.target.name]:e.target.value})
    const { name, value } = e.target;
    if (name === "providerId") {
      setServiceProvider({
        ...serviceprovider,
        providerId: value,
        // email: value, // set email to the same value as userId
      });
    } else {
      setServiceProvider({
        ...serviceprovider,
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
                  id="providerId"
                  label="Username"
                  name="providerId"
                  autoComplete="Username"
                  value={providerId}
                  onChange={(e) => onInputChange(e)}
                />
                {errors.providerId && <p style={{color: "red", fontSize: "13px" }}>{errors.providerId}</p>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="providerPwd"
                  label="Password"
                  type="password"
                  id="providerPwd"
                  autoComplete="new-password"
                  value={providerPwd}
                  onChange={(e) => onInputChange(e)}
                />
                {errors.providerPwd && <p style={{color: "red", fontSize: "13px" }}>{errors.providerPwd}</p>}
              </Grid>
              
              <Grid item xs={12}>
                {/* <TextField
                  required
                  fullWidth
                  name="description"
                  label="Description"
                  // type=""
                  id="description"
                  autoComplete="Description"
                /> */}
                <TextField
                required
                fullWidth
                name="description"
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={4}
                value={description}
                onChange={(e) => onInputChange(e)}
                // defaultValue="Description"
                />
                {errors.description && <p style={{color: "red", fontSize: "13px" }}>{errors.description}</p>}
              </Grid>
              <Grid item xs={12}>
                {/* <TextField
                  required
                  fullWidth
                  name="address"
                  label="Address"
                  // type=""
                  id="address"
                  autoComplete="Address"
                /> */}
                {/* <TextField
                required
                fullWidth
                name="address"
                id="outlined-multiline-static"
                label="Address"
                multiline
                rows={4}
                defaultValue="Address.. Maybe change to proper address type fields.. check notes on onedrive"
                /> */}
                <select name="providerAdd" value={providerAdd} onChange={onInputChange}>
  {areas.map((area) => (
    <option key={area.id} value={area.name}>
      {area.name}
    </option>
  ))}
</select>
              </Grid>
              <Grid item xs={12}>
                {/* <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                /> */}
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
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/ServiceProviderLogin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}