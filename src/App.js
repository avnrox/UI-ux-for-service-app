import './App.css';
import { Login } from "./components/Login";
import { Register} from "./components/Register";
import { Home } from "./components/Home";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { UserRegister } from './components/UserRegister';
import { ServiceProviderRegister } from './components/ServiceProviderRegister';
import { UserHomeSearch } from './components/UserHomeSearch';
import { ServiceProviderHome } from './components/ServiceProviderHome';
import { UserLogin } from "./components/UserLogin";
import { ServiceProviderLogin } from "./components/ServiceProviderLogin";
import { ServiceRequestUserSide } from "./components/ServiceRequestUserSide";
import { UserProfile } from './components/UserProfile';
import { ServiceDetailAndChatUserSide } from './components/ServiceDetailAndChatUserSide';
// import {ServiceRequest} from "./components/ServiceRequest";
import { Sidebar, Menu, MenuItem, SubMenu, ProSidebarProvider } from 'react-pro-sidebar';
import { ServiceDetailAndChatServiceProviderSide } from './components/ServiceDetailAndChatServiceProviderSide';
import { Serviceslogo, Navbar, Servicenavbar} from './components';
import { Footer, Blog, Features, Services, Header, Firstheader, Serviceheader } from './containers';
import { Axios } from 'axios';
import { ServiceProviderAddService } from './ServiceProviderAddService';
import {UserOrders } from './components/UserOrders';
import { UserCompletedList } from './components/UserCompletedList';
import { UserAcceptedList } from './components/UserAcceptedList';
import { ServiceProviderOrders } from './components/ServiceProviderOrders';
import { ProviderOrdersCompletedList } from './components/ProviderOrdersCompletedList';
import { ProviderOrdersAcceptedList } from './components/ProviderOrdersAcceptedList';
import AdminNavBar from './components/AdminNavBar'
import ReviewsPage from './components/AdminReviewsPage';
import ServiceProviderPage from './components/AdminNewServiceProviderPage';
import ServiceProviderReviewsPage from './components/AdminServiceProviderReviewsPage';
import { AdminLogin } from './components/AdminLogin';
import { ServiceProviderVerification } from './components/ServiceProviderVerification';

function App() {
  return (
    // <Router>
    <div className="App">
      
        <ProSidebarProvider>
     <Routes>
          <Route path="/" element={
            <>
            <div className="gradient__bg">
            <Firstheader/>
            </div>
            <Register/>
            <Serviceslogo />
            </>
          } />
          <Route path="/login" Component={Login}/>
          <Route path="/adminnav/*" Component={AdminNavBar}/>
          <Route path="/viewpage" Component={ReviewsPage}/>
          <Route path="/service" Component={ServiceProviderPage}/>
          <Route path="/serviceview" Component={ServiceProviderReviewsPage}/>
          <Route path="/register" element={
            <>
            <div className="gradient__bg">
            <Firstheader/>
            </div>
            <Register/>
            <Serviceslogo />
            </>
          } />
          <Route path="/home" Component={Home} /> 
          <Route path="/userregister" Component={UserRegister} />
          <Route path="/serviceproviderregister" Component={ServiceProviderRegister}/>

          <Route path="/userhomesearch" element={
            <>
            <div className="gradient__bg">
            <Navbar />
            <Serviceheader/>
            
            </div>
            <UserHomeSearch/>
            
            </>
          } />


          {/* NEED TO MAKE A PAGE THAT SHOWS THE RESULT OF SELECTED OPTIONS IN USER HOME 
          =====> USERHOMESEARCH IS THAT PAGE. ONCLICK OF SEARCH, WE NAVIGATE TO THAT PAGE*/}
          <Route path="/userhome" element={
            <>
            <div className="gradient__bg">
              <Navbar />
              <Header/>
              
            </div>
            <Serviceslogo />
            <Services />
            <Features />
            <Blog />
            <Footer />
            </>
          } />
          <Route path="/userlogin" Component={UserLogin}/>

          <Route path="/adminlogin" Component={AdminLogin}/>
          <Route path="/serviceproviderlogin" Component={ServiceProviderLogin}/>

          {/* <Route path="serviceproviderhome" Component={ServiceProviderHome}/> */}
          <Route path="/serviceproviderhome" element={
            <>
            <div className="gradient__bg">
              <Servicenavbar />
              {/* <Header/> */}
            </div>
            <Serviceslogo />
            <Features />
            <Services />
            <ServiceProviderHome />
            <Blog />
            <Footer />
            </>
          } />

          <Route path="/servicerequestuserside" element={
            <>
            <div className="gradient__bg">
            <Navbar />
            <ServiceRequestUserSide/>
            </div>
            
            </>
          } />


          <Route path="/userprofile" Component={UserProfile}/>

          <Route path="/servicedetailsandchatuserside" element={
            <>
            <div className="gradient__bg">
            <Navbar />
            <ServiceDetailAndChatUserSide/>
            </div>
            
            </>
          } />


          <Route path="/servicedetailsandchatserviceproviderside" Component={ServiceDetailAndChatServiceProviderSide}/>
          <Route path="/serviceprovideraddservice" Component={ServiceProviderAddService}/>


          <Route path="/userorders" element={
            <>
            <div className="gradient__bg">
            <Navbar />
            <Firstheader/>
            <UserOrders/>
            </div>
            
            </>
          } />

          <Route path="/usercompletedlist" element={
            <>
            <div className="gradient__bg">
            <Navbar />
            <Firstheader/>
            <UserCompletedList/>
            </div>
            
            </>
          } />

          <Route path="/useracceptedlist" element={
            <>
            <div className="gradient__bg">
            <Navbar />
            <Firstheader/>
            <UserAcceptedList/>
            </div>
            
            </>
          } />


          <Route path="/serviceproviderorders" Component={ServiceProviderOrders}/>
          <Route path="/providercompletedlist" Component={ProviderOrdersCompletedList}/>
          <Route path="/provideracceptedlist" Component={ProviderOrdersAcceptedList}/>
          <Route path="/serviceproviderverification" Component={ServiceProviderVerification}/>
          serviceproviderverification
          {/* <Route path="/servicerequest" Component={ServiceRequest}/>  */}
        </Routes>
        </ProSidebarProvider>
    </div>
    // </Router>

  );
}

export default App;