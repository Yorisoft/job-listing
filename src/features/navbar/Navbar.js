import React from 'react';
import { useState, useEffect } from 'react';
import logo from '../../assets/img/logo.png';
import intrologo from '../../assets/img/intro.png'
import featuredImg1 from '../../assets/img/features/img1.png';
import featuredImg2 from '../../assets/img/features/img2.png';
import featuredImg3 from '../../assets/img/features/img3.png';
import featuredImg4 from '../../assets/img/features/img4.png';
import featuredImg5 from '../../assets/img/features/img5.png';
import { Counter } from '../../features/counter/Counter';
import Auth from '../../features/auth/Auth';
//import '../../App.css';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/line-icons.css';
import '../../assets/css/slicknav.min.css';
import '../../assets/css/animate.css';
import '../../assets/css//main.css';
import '../../assets/css/responsive.css';

function Navbar(){

return(
<>
<nav className="navbar navbar-expand-lg fixed-top scrolling-navbar">
        <div className="container">
          <div className="theme-header clearfix">
            {/* Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                <span className="lni-menu"></span>
                <span className="lni-menu"></span>
                <span className="lni-menu"></span>
              </button>
              <a href="index.html" className="navbar-brand"><img src={logo} alt=""/></a>
            </div>
            <div className="collapse navbar-collapse" id="main-navbar">
              <ul className="navbar-nav mr-auto w-100 justify-content-end">
              <li className="nav-item">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
               {/* <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Pages
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="about.html">About</a></li>
                    <li><a className="dropdown-item" href="job-page.html">Job Page</a></li>
                    <li><a className="dropdown-item" href="job-details.html">Job Details</a></li>
                    <li><a className="dropdown-item" href="resume.html">Resume Page</a></li>
                    <li><a className="dropdown-item" href="privacy-policy.html">Privacy Policy</a></li>
                    <li><a className="dropdown-item" href="faq.html">FAQ</a></li>
                    <li><a className="dropdown-item" href="pricing.html">Pricing Tables</a></li>
                    <li><a className="dropdown-item" href="contact.html">Contact</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Candidates
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="browse-jobs.html">Browse Jobs</a></li>
                    <li><a className="dropdown-item" href="browse-categories.html">Browse Categories</a></li>
                    <li><a className="dropdown-item" href="add-resume.html">Add Resume</a></li>
                    <li><a className="dropdown-item" href="manage-resumes.html">Manage Resumes</a></li>
                    <li><a className="dropdown-item" href="job-alerts.html">Job Alerts</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Employers
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="post-job.html">Add Job</a></li>
                    <li><a className="dropdown-item" href="manage-jobs.html">Manage Jobs</a></li>
                    <li><a className="dropdown-item" href="manage-applications.html">Manage Applications</a></li>
                    <li><a className="dropdown-item" href="browse-resumes.html">Browse Resumes</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Blog
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="blog.html">Blog - Right Sidebar</a></li>
                    <li><a className="dropdown-item" href="blog-left-sidebar.html">Blog - Left Sidebar</a></li>
                    <li><a className="dropdown-item" href="blog-full-width.html"> Blog full width</a></li>
                    <li><a className="dropdown-item" href="single-post.html">Blog Single Post</a></li>
                  </ul>
                </li>*/}
                <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    Contact
                  </a>
                </li>
                <li className="nav-item dropdown active">
                  <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sign Up
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item active" href="/signup">User</a></li>
                    <li><a className="dropdown-item" href="/signupRecruit">Recruiter</a></li>
                  </ul>
                </li>
                <li className="button-group">
                  <a class="button btn btn-common" href="/postJob" >Post a Job</a>
                </li>
              </ul>
            </div>
          </div>
          </div>
          <div className="mobile-menu" data-logo="assets/img/logo-mobile.png"></div>
        </nav>
        {/* Navbar End */}
        </>
);
}

export default Navbar;