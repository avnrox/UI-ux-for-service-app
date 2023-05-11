import React, { useState,  useEffect  } from "react";
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
import axios from "axios";





const theme = createTheme();

export const ServiceProviderAddService = () => {
    // const theme = createTheme();
    // const [startDate, setStartDate] = useState(new Date());
    // const [description, setDescription] = useState("");
    // const [prices, setPrices] = useState("");
    // const [availability, setAvailability] = useState("");
    // const [area, setArea] = useState("");

    const [service,setService] = useState({
      serviceDescription:"",
      price:"",
      availability:"",
      serviceArea:"",
      providerEmail:"",
      providerId: "",
      serviceCategory:""
    })
    const{serviceDescription, price, availability, serviceArea, providerEmail, providerId, serviceCategory}=service

    const handleSubmit = (event) => {
        event.preventDefault();
        // const data = new FormData(event.currentTarget);
        // console.log({
        // //   username: data.get('username'),
        // //   password: data.get('password'),
        //   // description: data.get('description'),
        //   // address: data.get('address'),
        // });
        navigate('/ServiceProviderHome')
      };
        // user_id="+user_id+"&user_pwd="+user_pwd
      const handleOnClick = async (e) => {
        e.preventDefault();
        console.log("data : ", service); 
        await axios.post("http://localhost:8082/service/save?", service)
        .then((response) => {
          console.log(response.data)
          // localStorage.setItem("token",response.data.token)
          // localStorage.setItem("user_id",response.data.user_id)
          console.log("provider_id",localStorage.getItem("provider_id"))
          // localStorage.setItem("user_name",response.data.user_name)
          // localStorage.setItem("user_email",response.data.user_email)
          // localStorage.setItem("user_mobile",response.data.user_mobile)
          // localStorage.setItem("user_role",response.data.user_role)
          // localStorage.setItem("user_status",response.data.user_status)
          // localStorage.setItem("user_created_at",response.data.user_created_at)
          // localStorage.setItem("user_updated_at",response.data.user_updated_at)
        
        })
        navigate('/serviceproviderhome');
        
        };

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
        
    const navigate = useNavigate();

    useEffect(() => {
      // Get the values from local storage
      
      const storedProviderEmail = localStorage.getItem("provider_id");
      const storedProviderId = localStorage.getItem('provider_id');
      
      // Set the values in the state
      setService((prevState) => ({
        ...prevState,
        providerEmail: storedProviderEmail,
        providerId: storedProviderId,
      }));
    }, []);

    const onInputChange = (e) => {
      const { name, value } = e.target;
      console.log("test", name, value);
      setService({ ...service, [name]: value });
    };

    // const getData = async (e) => {
    //   e.preventDefault();
    //   var id = localStorage.getItem('provider_id');
    //   console.log("data from localstorage : ", id); 
    //   };


    return (
      
        <div>
          {/* <Button variant="contained" color="success" onClick={getData}>
            </Button> */}
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
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
             
              <Grid item xs={12}>
                <TextField
                required
                fullWidth
                name="serviceDescription"
                id="outlined-multiline-static"
                label="Description"
                // value={"This is our chat like feature where user and service provider will add their comments. We need to fetch the older comments and provide this dialogue box for new comments addition. Fetch all data using IDs"}
                multiline
                rows={10}
                // defaultValue="Description"
                // value={description}
                // onChange={(e) => setDescription(e.target.value)}
                value={serviceDescription}
                  onChange={(e) => onInputChange(e)}
                />
              </Grid>
            
               
              <Grid item xs={12}>
                <h1>Photos</h1>
              </Grid>
              <Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="price"
                  label="prices"
                  // type=""
                  id="price"
                  autoComplete="prices"
                  value={price}
                  onChange={(e) => onInputChange(e)}
                />
                </Grid>
                </Grid>
                <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="availability"
                  label="availability"
                  // type=""
                  id="availability"
                  autoComplete="availability"
                  value={availability}
                  onChange={(e) => onInputChange(e)}
                />
                </Grid>
                <Grid item xs={12}>
                <select name="serviceArea" value={serviceArea} onChange={onInputChange}>
  {areas.map((area) => (
    <option key={area.id} value={area.name}>
      {area.name}
    </option>
  ))}
</select>

<select name="serviceCategory" value={serviceCategory} onChange={onInputChange}>
  {categories.map((category) => (
    <option key={category.id} value={category.name}>
      {category.name}
    </option>
  ))}
</select>
</Grid>
              <Grid item xs={12}>
            
              </Grid>
            </Grid>

              {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
              
              <Grid item xs={12}></Grid>
          
            <Stack direction="row" spacing={2}>
            <Button variant="contained" color="success"  onClick={handleOnClick}>
                Submit
            </Button>
            <Button variant="contained" color="success">Accept</Button>
            <Button color="secondary">Reject</Button>

        </Stack>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
        </div>
    )
}
  
