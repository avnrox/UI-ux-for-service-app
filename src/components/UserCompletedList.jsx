import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Autocomplete from '@mui/material/Autocomplete';
import { TextField, FormControl, Button } from "@mui/material";
import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Stack from '@mui/material/Stack';
import { StepDescription } from "semantic-ui-react";
import axios from "axios";
import { useLocation } from 'react-router-dom';






const theme = createTheme();

export const UserCompletedList = (props) => {
    // const theme = createTheme();
    const [startDate, setStartDate] = useState(new Date());
    const [description, setDescription] = useState('');


    const location = useLocation();
  const usersearchserviceres = location.state.usersearchserviceres;
  console.log("data passed?",usersearchserviceres);
    // const [availability, setAvailability] = useState(localStorage.getItem('availability'));
    //   let order = {
    //   availability: '',
    //   detail_time: '',
    //   order_id: -1,
    //   order_status: -100,
    //   order_time: '',
    //   price: -100,
    //   provider_email: '',
    //   provider_id: '',
    //   service_area: '',
    //   service_category: '',
    //   service_description: '',
    //   service_id: -100,
    //   user_id: '',
    //   verified: true,
    // };
    
    // order = {
    //   ...order,
    //   availability: localStorage.getItem('availability'),
    //   detail_time: localStorage.getItem('detail_time'),
    //   order_id: localStorage.getItem('order_id'),
    //   service_area: localStorage.getItem('service_area'), 
    //   provider_email: localStorage.getItem('provider_email'),
    // };

    // const order = JSON.parse(localStorage.getItem('order'));
    // const [orderState, setOrderState] = useState(order);
  const searchserviceres = JSON.parse(localStorage.getItem('usersearchserviceres'));
    // console.log("what?:",searchserviceres.order_id);

    // const updateOrder = () => {
    //   const newOrder = {
    //     ...orderState,
    //     availability: 'weekends',
    //     price: 120,
    //     order_status: 0,
    //   };
    //   setOrderState(newOrder);
    // };






    const handleSubmit =  async (e) => {
        
          e.preventDefault();
          const order_id = parseInt(searchserviceres.order_id);
          const order_detail = description;
          
          console.log("data inside submit from localstorage",order_id,order_detail);


          await axios.post('http://localhost:8082/order/user_completed_list?order_id='+order_id)
          .then((response) => {
            console.log(response.data);
            // setRes(response.data);
          })
          .catch((error) => {
            console.log(error);
          });

        // navigate('/userorders', {state:{serviceList}});
        navigate('/userorders')
      };




      
      // console.log("description" , description);
    const navigate = useNavigate();
    return (
        <div>
           {/* <p>Order ID: {usersearchserviceres.order_id}</p> */}
      {/* <p>User ID: {usersearchserviceres.user_id}</p>
      <p>Provider Email: {usersearchserviceres.provider_email}</p>
      <p>Service Area: {usersearchserviceres.service_area}</p>
      <p>Availability: {usersearchserviceres.availability}</p>
      <p>Detail Time: {usersearchserviceres.detail_time}</p>
      <p>Detail Address: {usersearchserviceres.detail_add}</p>
      <p>Service Category: {usersearchserviceres.service_category}</p>
      <p>Service Description: {usersearchserviceres.service_description}</p>
      <p>Price: {usersearchserviceres.price}</p>
      <p>Order Time: {usersearchserviceres.order_time}</p>
      <p>Order Status: {usersearchserviceres.order_status}</p>
      <p>Order detail coming from sp: {usersearchserviceres.order_detail2}</p>
      <p>Order detail coming from sp: {usersearchserviceres.order_detail4}</p> */}
      {/* <p>Verified: {orderState.verified ? 'Yes' : 'No'}</p> */}
   
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
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography> */}
          <Box component="form" noValidate sx={{ mt: 3 }}>
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
                {/* <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="Username"
                /> */}
                 {/* <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={Service}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Service" />}
    /> */}
                {/* <TextField
                  required
                  fullWidth
                  name="description"
                  label="Description"
                  // type=""
                  id="description"
                  autoComplete="Description"
                /> */}
                {/* <TextField
                required
                fullWidth
                name="description"
                id="outlined-multiline-static"
                label="Description"
                // value={"This is our chat like feature where user and service provider will add their comments. We need to fetch the older comments and provide this dialogue box for new comments addition. Fetch all data using IDs"}
                multiline
                rows={10}
                // defaultValue="Description"
                onChange={(event) => setDescription(event.target.value)}
                /> */}
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
                {/* <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={Area}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Area" />}
    /> */}
              </Grid>
              <Grid item xs={12}>
                {/* <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                /> */}
              </Grid>
            </Grid>

              {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
              
              <Grid item xs={12}></Grid>
            {/* <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button> */}
            {/* <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/ServiceProviderLogin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid> */}
            <Stack direction="row" spacing={2}>
            <Button variant="contained" color="success" onClick={handleSubmit}>
                Submit
            </Button>
            <Button color="secondary">Withdraw</Button>

            {/* <Button variant="outlined" color="error">
             Error
            </Button> */}
        </Stack>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
        </div>
    )
}

const Service = [
    { label: 'Cleaning', id: 1 },
    { label: 'Babysitting', id: 2 },
    { label: 'Pest Control', id: 3 },
    { label: 'Plumbing', id: 4 },
    { label: 'Electrical Repairs', id: 5 },
    { label: 'Beauty', id: 6 },
  ];
  const Area = [
    { label: 'Southampton', id: 1 },
    { label: 'London', id: 2 },
    { label: 'Manchester', id: 3 },
    { label: 'Edinburgh', id: 4 },
  ];
  
