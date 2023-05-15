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
import axios from 'axios';
import './servicerequestuserside.css';
import Servicedetails from '../components/servicedetails/Servicedetails';
import Article from '../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from '../containers/blog/imports.js';




const theme = createTheme();

export const ServiceRequestUserSide = () => {
    // const theme = createTheme();
    const [startDate, setStartDate] = useState(new Date());
    const [description, setDescription] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedArea, setSelectedArea] = useState('');


    const searchserviceres = JSON.parse(localStorage.getItem('usersearchserviceres'));

    const handleSubmit = async (e) => {
        e.preventDefault();
          const user_id = localStorage.getItem('user_id');
          const service_id = searchserviceres.service_id;
          const detail_time = startDate;
          const order_detail = description;
          console.log("data inside submit from localstorage",user_id,service_id,detail_time,order_detail, selectedArea);

          
          await axios.post('http://localhost:8082/order/user_request?user_id='+user_id+'&service_id='+service_id+'&detail_time='+detail_time+'&order_detail1='+order_detail+'&detail_add='+selectedArea)
          .then((response) => {
            console.log(response.data);
            // setRes(response.data);
          })
          .catch((error) => {
            console.log(error);
          });

        navigate('/userhomesearch')
      };

    const navigate = useNavigate();
    return (
      <div className="seva__blog section__padding" id="blog">
    <div className="seva__blog-heading">
      <h1 className="gradient__text"> Service <br />Details</h1>
    </div>
    <div className="seva__blog-container">
      <div className="seva__blog-container_groupA">
        <Article imgUrl={blog01} text={searchserviceres.provider_email} text1 = {`Service:${searchserviceres.service_category}`}/>
      </div>
      <div className="seva__blog-container_groupB">
        <Servicedetails text={`Availability:`} text1={`${searchserviceres.availability}`}/>
        <Servicedetails text = 'Description:' text1 = {searchserviceres.service_description}/>
        <Servicedetails text={`Price:`} text1 = {`£${searchserviceres.price}`}/>
        <Servicedetails text={`Area:`} text1={`${searchserviceres.service_area}`} />
      </div>
    </div>
    <div>
      {/* The bellow commented section is for chat use in other pages */}
      {/* <div className="">
      <div className="seva_chat">

            <p>{searchserviceres.providerId}: {searchserviceres.availability}</p>
            <p>User ID: {searchserviceres.price}</p>
            <p>Provider Email: {searchserviceres.providerEmail}</p>
            <p>Service Area: {searchserviceres.providerId}</p>
            <p>Availability: {searchserviceres.serviceArea}</p>
            <p>Detail Time: {searchserviceres.serviceCategory}</p>
            <p>Detail Address: {searchserviceres.serviceDescription}</p>
            <p>Service Category: {searchserviceres.serviceId}</p>
            <p>Service Description: {searchserviceres.servicePhoto}</p>
            </div>
            </div> */}


    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div >
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
                  renderInput={(params) => <TextField {...params} label="Service"
                   />}
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
                InputProps={{
                  className: 'seva__header-content__input-textfield'
                }
                }
                required
                fullWidth
                name="description"
                id="outlined-multiline-static"
                label="Message provider"
                multiline
                rows={4}
                // defaultValue="Messeage provide"
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
                {/* <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">Select a category</option>
        {categories.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select> */}
      {/* <select value={selectedArea} onChange={(e) => setSelectedArea(e.target.value)}>
        <option value="">Select an area</option>
        {areas.map((area) => (
          <option key={area.id} value={area.name}>
            {area.name}
          </option>
        ))}
      </select> */}
      <TextField
                InputProps={{
                  className: 'seva__header-content__input-textfield'
                }
                }
                required
                fullWidth
                name="address"
                id="outlined-multiline-static"
                label="Destination Address"
                multiline
                rows={4}
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                {/* <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                /> */}
              </Grid>
            </Grid>

              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
              
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

            {/* <Button variant="outlined" color="error">
             Error
            </Button> */}
        </Stack>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
        </div>
      </Container>
    </ThemeProvider>
        </div>
        </div>
    )
}

 const categories = [
    {
      id: 1,
      name: 'Cleaning',
    },
    {
      id: 2,
      name: 'Baby Sitting',
    },
    {
      id: 3,
      name: 'Pest Control',
    },
    {
      id: 4,
      name: 'Electrical Repair',
    },
    {
      id: 5,
      name: 'Plumbing',
    },
    {
      id: 6,
      name: 'Beauty',
    },
  ];
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
  
