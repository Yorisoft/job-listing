import React from 'react';
import { useState, useEffect } from 'react';
//import css
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/line-icons.css';
import '../../assets/css/slicknav.min.css';
import '../../assets/css/animate.css';
import '../../assets/css/main.css';
import '../../assets/css/responsive.css';
import { Link } from 'react-router-dom';


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
    <section  className="section-padding">
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
                    <input type="text" className="form-control" name="email" placeholder="Username"/>
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
                <Link to="/profile"><button className="btn btn-common log-btn">Submit</button></Link>
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