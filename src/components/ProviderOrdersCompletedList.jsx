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
import './servicerequestuserside.css';
import Servicedetails from '../components/servicedetails/Servicedetails';
import Article from '../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from '../containers/blog/imports.js';





const theme = createTheme();

export const ProviderOrdersCompletedList = (props) => {
    // const theme = createTheme();
    const [startDate, setStartDate] = useState(new Date());
    const [description, setDescription] = useState('');


    // const location = useLocation();
    // console.log("data passed?",location.state);
    // const {item} = location.state;
  // const usersearchserviceres = location.state.usersearchserviceres;
  // console.log("data passed?",item);
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
  const providercompletedlist = JSON.parse(localStorage.getItem('providercompletedlist'));
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
          // const order_id = parseInt(searchserviceres.order_id);
          // const order_detail = description;
          
          // console.log("data inside submit from localstorage",order_id,order_detail);


          // await axios.post('http://localhost:8082/order/user_completed_list?order_id='+order_id)
          // .then((response) => {
          //   console.log(response.data);
          //   // setRes(response.data);
          // })
          // .catch((error) => {
          //   console.log(error);
          // });

        // navigate('/userorders', {state:{serviceList}});
        localStorage.removeItem('providercompletedlist');
       
        navigate('/serviceproviderorders')
      };


      let order_det1 = providercompletedlist.order_detail1 || '';
      let order_det2 = providercompletedlist.order_detail2 || '';
      let order_det3 = providercompletedlist.order_detail3 || '';
      let order_det4 = providercompletedlist.order_detail4 || '';

      
      // console.log("description" , description);
    const navigate = useNavigate();
    return (
        <div>
          <div className="seva__blog section__padding" id="blog">
    <div className="seva__blog-heading">
      <h1 className="gradient__text"> Service <br />Details</h1>
    </div>
    <div className="seva__blog-container">
      <div className="seva__blog-container_groupA">
        <Article imgUrl={blog01} text={providercompletedlist.user_id} text1 = {`Service:${providercompletedlist.service_category}`}/>
      </div>
      <div className="seva__blog-container_groupB">
        <Servicedetails text={`Order Status:${providercompletedlist.order_status}`} text1={`Price: £${providercompletedlist.price}`} score={`Adress:${providercompletedlist.detail_add}`} />
        <Servicedetails text = 'Description:' text1 = {providercompletedlist.service_description} />
        <Servicedetails text={`Your Comments:`} text1 = {order_det1} score={order_det3}/>
        <Servicedetails text={`Service Provider Comments:`} text1={order_det2} score={order_det4}/>
      </div>
    </div>
    </div>
   
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
              <Grid item xs={12} sm={6}>
              {/* <p>Order ID: {providercompletedlist.availability}</p>
      <p>User ID: {providercompletedlist.price}</p>
      <p>Provider Email: {providercompletedlist.provider_email}</p>
      <p>Service Area: {providercompletedlist.provider_id}</p>
      <p>Availability: {providercompletedlist.service_area}</p>
      <p>Detail Time: {providercompletedlist.service_category}</p>
      <p>Detail Address: {providercompletedlist.service_description}</p>
      <p>Service Category: {providercompletedlist.service_id}</p> */}
      {/* <p>Service Description: {usercompletedlist.servicePhoto}</p> */}
              </Grid>
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
            {/* <Button variant="contained" color="success" onClick={handleSubmit}>
                Submit
            </Button>
            <Button color="secondary">Withdraw</Button> */}

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
  
