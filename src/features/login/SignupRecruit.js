import React from 'react';
import { useState, useEffect } from 'react';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/line-icons.css';
import '../../assets/css/main.css';
import '../../assets/css/responsive.css';

function SignupRecruit() {
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

return(
    
   <>
   {/* Page Header Start */} 
    <div className="page-header">
      <div className="container">
        <div className="row">         
          <div className="col-lg-12">
            <div className="inner-header">
              <h3>Find your talent !</h3>
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
                Create recruiters account
              </h3>
              <form className="login-form">
                <div className="form-group">
                  <div className="input-icon">
                    <i className="lni-user"></i>
                    <input type="text" className="form-control" name="name" placeholder="Username"/>
                  </div>
                </div> 
                <div className="form-group">
                  <div className="input-icon">
                    <i className="lni-envelope"></i>
                    <input type="text" className="form-control" name="email" placeholder="Email Address"/>
                  </div>
                </div> 
                <div className="form-group">
                  <div className="input-icon">
                    <i className="lni-lock"></i>
                    <input type="password" className="form-control" placeholder="Password"/>
                  </div>
                </div>  
                <div className="form-group">
                  <div className="input-icon">
                    <i className="lni-unlock"></i>
                    <input type="password" className="form-control" placeholder="Retype Password"/>
                  </div>
                </div>                 
                <button className="btn btn-common log-btn mt-3">Register</button>
                <p className="text-center">Already have a user account?<a href="/login"> Sign In</a></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Content section End */}  

    {/*Go To Top Link */}
    <a href="#" className="back-to-top">
      <i className="lni-arrow-up"></i>
    </a> 

   

    </>
  );
  }

  export default SignupRecruit;