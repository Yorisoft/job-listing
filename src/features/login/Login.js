import React from 'react';
import { useState, useEffect } from 'react';
import Homepage from '../../features/home/Home';
import Navbar from '../../features/navbar/Navbar';
import Foot from '../../features/navbar/Footer';
import Signup from '../../features/login/Signup';
import SignupRecruit from '../../features/login/SignupRecruit';
import Auth from '../../features/auth/Auth';

//import images
import logo from '../../assets/img/logo.png';
import intrologo from '../../assets/img/intro.png';
import featuredImg1 from '../../assets/img/features/img1.png';
import featuredImg2 from '../../assets/img/features/img2.png';
import featuredImg3 from '../../assets/img/features/img3.png';
import featuredImg4 from '../../assets/img/features/img4.png';
import featuredImg5 from '../../assets/img/features/img5.png';
import logoFooter from '../../assets/img/logo-footer.png';
import { Counter } from '../../features/counter/Counter';
//import css
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/line-icons.css';
import '../../assets/css/slicknav.min.css';
import '../../assets/css/animate.css';
import '../../assets/css/main.css';
import '../../assets/css/responsive.css';


function Login(){

    return (
        <>
        {/* Page Header Start */}
    <div className="page-header">
      <div className="container">
        <div className="row">         
          <div className="col-lg-12">
            <div className="inner-header">
              <h3>Login</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Page Header End */} 

    {/* Content section Start */} 
    <section id="content" className="section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-6 col-xs-12">
            <div className="page-login-form box">
              <h3>
                Login
              </h3>
              <form className="login-form">
                <div className="form-group">
                  <div className="input-icon">
                    <i className="lni-user"></i>
                    <input type="text" id="sender-email" className="form-control" name="email" placeholder="Username"/>
                  </div>
                </div> 
                <div className="form-group">
                  <div className="input-icon">
                    <i className="lni-lock"></i>
                    <input type="password" className="form-control" placeholder="Password"/>
                  </div>
                </div> 
                <div className="form-group form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                  <label className="form-check-label" for="exampleCheck1">Keep Me Signed In</label>
                </div>
                <button className="btn btn-common log-btn">Submit</button>
              </form>
              <ul className="form-links">
                <li className="text-center"><a href="/signup">Don't have an account?</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Content section End */} 
        </>
    );
}

export default Login;