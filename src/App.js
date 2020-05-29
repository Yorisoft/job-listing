import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from './features/navbar/Navbar';
import Foot from './features/navbar/Footer';
import Login from './features/login/Login';
import Signup from './features/login/Signup';
import SignupRecruit from './features/login/SignupRecruit';
import Homepage from './features/home/Home';
import Contact from './features/contact/ContactUs';
import Profile from "./features/profile/Profile";
import ProfileEdit from "./features/profile/ProfileEdit";
import AddResume from "./features/profile/AddResume";
import ChangePass from "./features/profile/ChangePass";
import Notifics from "./features/profile/Notificatons";
import RecruiterProf from "./features/recruiter/RecruiterProfile";
import RecruitEdit from "./features/recruiter/RecruitEdit";
import ManageApplication from "./features/recruiter/RecruiterApp";
import RecruiterNotifics from "./features/recruiter/RecruitNotification";
import NotFound from "./features/404/PageNotFound";
import Auth from './features/auth/Auth';

//import images
import logo from './assets/img/logo.png';
import intrologo from './assets/img/intro.png';
import featuredImg1 from './assets/img/features/img1.png';
import featuredImg2 from './assets/img/features/img2.png';
import featuredImg3 from './assets/img/features/img3.png';
import featuredImg4 from './assets/img/features/img4.png';
import featuredImg5 from './assets/img/features/img5.png';
import logoFooter from './assets/img/logo-footer.png';
import { Counter } from './features/counter/Counter';
//import css
import './assets/css/bootstrap.min.css';
import './assets/css/line-icons.css';
import './assets/css/slicknav.min.css';
import './assets/css/animate.css';
import './assets/css/main.css';
import './assets/css/responsive.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {

  useEffect(() => {

    function handleScrollChange(event) {

      let scrollTop = event.srcElement.documentElement.scrollTop;
      if (scrollTop >= 100) {
        event.srcElement.body.querySelector(".scrolling-navbar").classList.add("top-nav-collapse");
      } else {
        event.srcElement.body.querySelector(".scrolling-navbar").classList.remove("top-nav-collapse");
      }
    }
    window.addEventListener('scroll', handleScrollChange, true);
    // Specify how to clean up after this effect:
    return function cleanup() {
      window.removeEventListener('scroll', handleScrollChange);
    };
  });

  return (
    <>
     <Navbar />

      <Switch>    
        <Route path="/" exact component={Homepage} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/signupRecruit" component={SignupRecruit} /> 
        <Route path="/profile" component={Profile} />
        <Route path="/profileEdit" component={ProfileEdit} />
        <Route path="/notifications" component={Notifics} />
        <Route path="/addResume" component={AddResume} />
        <Route path="/changePass" component={ChangePass} />

        
        <Route path="/recruiter" component={RecruiterProf} />
        <Route path="/recruitEdit" component={RecruitEdit} />
        <Route path="/recruitNotifics" component={RecruiterNotifics} />
        <Route path="/recruiterApp" component={ManageApplication} />

        <Route path="/" component={NotFound} />
      </Switch>

      <Foot />
    </>
  );
}

export default App;
