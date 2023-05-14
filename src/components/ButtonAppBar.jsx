import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

export default function ButtonAppBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/service">
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            View New Service Provider
          </Typography>
        </Button>
        <Button color="inherit" component={Link} to="/viewpage">
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            View Reviews
          </Typography>
        </Button>
        <Button color="inherit" component={Link} to="/serviceview">
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            View Service Provider Reviews
          </Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
}