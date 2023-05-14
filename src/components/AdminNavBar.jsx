import React from 'react';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import ButtonAppBar from './ButtonAppBar';
import ServiceProviderPage from './AdminNewServiceProviderPage';
import ReviewsPage from './AdminReviewsPage';
import ServiceProviderReviewsPage from './AdminServiceProviderReviewsPage';

function AdminNavBar() {
  return (
    <>
      <ButtonAppBar />
     <Routes>
      <Route path="/service-provider" component={ServiceProviderPage} />
      <Route path="/reviews" component={ReviewsPage} />
      <Route path="/service-provider-reviews" component={ServiceProviderReviewsPage} />

     </Routes>
      </>
  );
}

export default AdminNavBar;
