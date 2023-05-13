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
import { set } from "date-fns";
import axios from "axios";





const theme = createTheme();

export const ServiceDetailAndChatServiceProviderSide = () => {
    // const theme = createTheme();
    const [startDate, setStartDate] = useState(new Date());

    const spchat = JSON.parse(localStorage.getItem('spchat'));

    const [description, setDescription] = useState('');

    const order_id = spchat.order_id;

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8082/order/provider_reply?order_id='+order_id+'&order_detail='+description)
        .then((response) => {
          console.log(response.data);
          // setRes(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
        navigate('/ServiceProviderHome')
      };

    const navigate = useNavigate();
    return (
        <div>
            <p>Order ID: {spchat.availability}</p>
      <p>User ID: {spchat.detail_time}</p>
      <p>Provider Email: {spchat.order_id}</p>
      <p>Service Area: {spchat.order_status}</p>
      <p>Availability: {spchat.order_time}</p>
      <p>Detail Time: {spchat.price}</p>
      <p>Detail Address: {spchat.provider_email}</p>
      <p>Service Category: {spchat.provider_id}</p>
      <p>Service Description: {spchat.service_area}</p>
      <p>Price: {spchat.service_category}</p>
      <p>Order Time: {spchat.service_description}</p>
      <p>Order Status: {spchat.service_id}</p>
      <p>Order Status: {spchat.user_id}</p>
      <p>Det 1 : {spchat.order_detail1}</p>
      <p>Det 2 : {spchat.order_detail2}</p>
      <p>Det 3 : {spchat.order_detail3}</p>
      <p>Det 4 : {spchat.order_detail4}</p>
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
                <TextField
                required
                fullWidth
                name="description"
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={10}
                defaultValue="Description"
                onChange={(event) => setDescription(event.target.value)}
                />
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
            <Button variant="contained" color="success">Accept</Button>
            <Button color="secondary">Reject</Button>

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
  
