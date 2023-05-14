import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Button, CardActions, Container, Box } from '@mui/material';

function AdminReviewsPage() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8082/review/load_reviews_list')
      .then(response => {
        setReviews(response.data);
      });
  }, []);

  const deleteReview = (reviewId) => {
    axios.post(" http://localhost:8082/review/admin_delete_review?review_id="+reviewId)
      .then(response => {
        setReviews(reviews.filter(review => review.reviewId !== reviewId));
      });
  };

  // return (
  //   <Container>
  //     {reviews.map(review => (
  //       <Card key={review.reviewId} style={{ marginBottom: '15px' }}>
  //         <CardContent>
  //           <Typography variant="h5" component="h2">
  //             Content: {review.content}
  //           </Typography>
  //           <Typography variant="body2" color="textSecondary" component="p">
  //             Review ID: {review.reviewId} | Order ID: {review.orderId} | Service ID: {review.serviceId}
  //           </Typography>
  //           <Typography variant="body2" color="textSecondary" component="p">
  //             User: {review.userId} | Score: {review.score}
  //           </Typography>
  //         </CardContent>
  //         <CardActions>
  //           <Button size="small" color="secondary" onClick={() => deleteReview(review.reviewId)}>Delete</Button>
  //         </CardActions>
  //       </Card>
  //     ))}
  //   </Container>
  // );

  return (
    <Container>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h4">Reviews List</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {reviews.map((review) => (
          <Card key={review.reviewId} sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="h5" component="h2">
                Content: {review.content}
              </Typography>
              <Typography variant="body2" color="text.secondary" component="p">
                Review ID: {review.reviewId} | Order ID: {review.orderId} | Service ID: {review.serviceId}
              </Typography>
              <Typography variant="body2" color="text.secondary" component="p">
                User: {review.userId} | Score: {review.score}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="error" onClick={() => deleteReview(review.reviewId)}>
                Delete
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Container>
  );
}

export default AdminReviewsPage;