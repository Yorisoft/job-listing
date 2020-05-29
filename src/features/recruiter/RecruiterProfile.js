import React from 'react';
import { useState, useEffect } from 'react';

//import css
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/line-icons.css';
import '../../assets/css/slicknav.min.css';
import '../../assets/css/animate.css';
import '../../assets/css/main.css';
import '../../assets/css/responsive.css';

function RecruiterProfile(){

    return(
        <>
 {/* Page Header Start */}
    <div class="page-header">
      <div class="container">
        <div class="row">         
          <div class="col-lg-12">
            <div class="inner-header">
              <h3>About Company</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Page Header End */} 

    {/* Main container Start */}  

    <div class="about section">
      <div class="container">
        <div class="row">  
        <div className="col-lg-4 col-md-4 col-xs-12">
            <div className="right-sideabr">
              <h4>*Company Name*</h4>
              <ul className="list-item">
                <li><a href="/recruitEdit">Edit Account</a></li>
                <li><a href="/recruitNotifics">Notifications </a></li>
                <li><a href="/recruiterApp">Manage Applications </a></li>
                <li><a href="/changePass">Change Password</a></li>
                <li><a href="/">Sing Out</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-xs-12">
            <div class="about-content">
              <h3>About *Company Name*</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est modi, saepe hic esse maxime quasi, sapiente ex debitis quis dolorum unde, neque quibusdam eveniet nobis enim porro repudiandae nesciunt quidem.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni delectus soluta adipisci beatae ullam quisquam, quia recusandae rem assumenda, praesentium porro sequi eaque doloremque tenetur incidunt officiis explicabo optio perferendis.</p>
              <a href="#" class="btn btn-common">Learn More</a>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-xs-12">
            <img class="img-fluid float-right" src="assets/img/about/img1.jpg" alt=""/>          
          </div>
        </div>
      </div>
    </div>
    {/* Main container End */} 

    {/* Counter Section Start */}
    <section id="counter" class="section bg-gray">
      <div class="container">
        <div class="row">
          {/* Start counter */}
          <div class="col-lg-3 col-md-6 col-xs-12">
            <div class="counter-box">
              <div class="icon"><i class="lni-home"></i></div>
              <div class="fact-count">
                <h3><span class="counter">800</span></h3>
                <p>Jobs Posted</p>
              </div>
            </div>
          </div>
          {/* End counter */}
          {/* Start counter */}
          <div class="col-lg-3 col-md-6 col-xs-12">
            <div class="counter-box">
              <div class="icon"><i class="lni-briefcase"></i></div>
              <div class="fact-count">
                <h3><span class="counter">80</span></h3>
                <p>All Companies</p>
              </div>
            </div>
          </div>
          {/* End counter */}
          {/* Start counter */}
          <div class="col-lg-3 col-md-6 col-xs-12">
            <div class="counter-box">
              <div class="icon"><i class="lni-pencil-alt"></i></div>
              <div class="fact-count">
                <h3><span class="counter">900</span></h3>
                <p>Resumes</p>
              </div>
            </div>
          </div>
          {/* End counter */}
          {/* Start counter */}
          <div class="col-lg-3 col-md-6 col-xs-12">
            <div class="counter-box">
              <div class="icon"><i class="lni-save"></i></div>
              <div class="fact-count">
                <h3><span class="counter">1200</span></h3>
                <p>Applications</p>
              </div>
            </div>
          </div>
          {/* End counter */}
        </div>
      </div>
    </section>
    {/* Counter Section End */}
        </>
    );
}

export default RecruiterProfile;
