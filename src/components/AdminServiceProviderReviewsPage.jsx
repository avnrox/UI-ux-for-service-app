import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Card, CardContent, Typography, Button, CardActions, Container, Box } from '@mui/material';

function AdminServiceProviderReviewsPage() {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8082/serviceprovider/get_verified_provider_list')
      .then(response => {
        setProviders(response.data);
        // console.log(providers);
      });
  }, []);

  const verifyProvider = (providerId) => {
    axios.post(`http://localhost:8082/serviceprovider/admin_delete_provider?provider_id=${providerId}`)
      .then(response => {
        console.log(response.data)
        if (response.data === 1) {
          setProviders(providers.map(provider => provider.providerId === providerId ? { ...provider, verified: 1 } : provider));
          
        }
      });
  };

  console.log(providers);

  return (
    <Container>
      {providers.map(provider => (
        <Card key={provider.providerId} sx={{ my: 2 }}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Provider ID: {provider.providerId}
            </Typography>
            <Typography variant="body2" color="text.secondary" component="p" sx={{ mt: 1 }}>
              Address: {provider.providerAdd} | Description: {provider.description}
            </Typography>
            <Box sx={{ mt: 1 }}>
              <Typography variant="body2" color="text.secondary" component="p">
                Verified: {provider.verified ? 'Yes' : 'No'}
              </Typography>
            </Box>
            <Box sx={{ mt: 1 }}>
              <Typography variant="body2" color="text.secondary" component="p">
                Average Score: {provider.avgScore}
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" onClick={() => verifyProvider(provider.providerId)}>Delete</Button>
            {/* <Button size="small" color="error" onClick={() => rejectProvider(provider.providerId)}>Reject</Button> */}
            {/* <Button size="small" onClick={() => requestUpdate(provider.providerId)}>Request Update</Button> */}
          </CardActions>
        </Card>
      ))}
    </Container>
  );
}

export default AdminServiceProviderReviewsPage;