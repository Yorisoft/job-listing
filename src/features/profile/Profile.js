import React from 'react';
import { useState, useEffect } from 'react';

//import css
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/line-icons.css';
import '../../assets/css/slicknav.min.css';
import '../../assets/css/animate.css';
import '../../assets/css/main.css';
import '../../assets/css/responsive.css';

function Profile(){

    return(
        <>
        {/* Page Header Start */}
    <div className="page-header">
      <div className="container">
        <div className="row">         
          <div className="col-lg-12">
            <div className="inner-header">
              <h3>Project</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Page Header End */} 

    {/* Start Content */}
    <div className="section">
      <div className="container">        
        <div className="row">
          <div className="col-lg-4 col-md-4 col-xs-12">
            <div className="right-sideabr">
              <h4>Manage Account</h4>
              <ul className="list-item">
                <li><a className="active" href="/profile">My Projects</a></li>
                <li><a href="/notifications">Notifications </a></li>
                <li><a href="/profileEdit">Manage Projects </a></li>
                <li><a href="/changePass">Change Password</a></li>
                <li><a href="/">Sing Out</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 col-xs-12">
            <div className="inner-box my-resume">
              <div className="author-resume">
                <div className="thumb">
                  <img src="assets/img/resume/img-1.png" alt=""/>
                </div>
                <div className="author-info">
                  <h3>Mark Anderson</h3>
                  <p className="sub-title">UI/UX Designer</p>
                  <p><span className="address"><i className="lni-map-marker"></i>Mahattan, NYC, USA</span> <span><i className="ti-phone"></i>(+01) 211-123-5678</span></p>
                  <div className="social-link">  
                    <a href="#" className="Twitter"><i className="lni-twitter-filled"></i></a>
                    <a href="#" className="facebook"><i className="lni-facebook-filled"></i></a>
                    <a href="#" className="google"><i className="lni-google-plus"></i></a>
                    <a href="#" className="linkedin"><i className="lni-linkedin-fill"></i></a>
                  </div>
                </div>                  
              </div>
              <div className="about-me item">
                <h3>About Me</h3>
                <p>Nullam semper erat arcu, ac tincidunt sem venenatis vel. Curabitur a dolor ac ligula fermentum eusmod ac ullamcorper nulla. Integer blandit uitricies aliquam. Pellentesque quis dui varius, dapibus vilit id, ipsum. Morbi ac eros feugiat, lacinia elit ut, elementum turpis. Curabitur justo sapien, tempus sit amet ruturm eu, commodo eu lacus. Morbi in ligula nibh. Maecenas ut mi at odio hendririt eleif end tempor vitae augue. Fusce eget arcu et nibh dapibus maximus consectetur in est. Sed iaculis Luctus nibh sed veneatis. </p>
              </div>
              <div className="work-experence item">
                <h3>Work Experience</h3>
                <h4>UI/UX Designer</h4>
                <h5>Bannana INC.</h5>
                <span className="date">Fab 2017-Present(5year)</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero vero, dolores, officia quibusdam architecto sapiente eos voluptas odit ab veniam porro quae possimus itaque, quas! Tempora sequi nobis, atque incidunt!</p>
                <p><a href="#">4 Projects</a></p>
                <br/>
                <h4>UI Designer</h4>
                <h5>Whale Creative</h5>
                <span className="date">Fab 2017-Present(2year)</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero vero, dolores, officia quibusdam architecto sapiente eos voluptas odit ab veniam porro quae possimus itaque, quas! Tempora sequi nobis, atque incidunt!</p>
                <p><a href="#">4 Projects</a></p>
              </div>
              <div className="education item">
                <h3>Education</h3>
                <h4>Massachusetts Institute Of Technology</h4>
                <p>Bachelor of Computer Science</p>
                <span className="date">2010-2014</span>
                <br/>
                <h4>Massachusetts Institute Of Technology</h4>
                <p>Bachelor of Computer Science</p>
                <span className="date">2010-2014</span>
              </div>
            </div>
          </div>
        </div>
      </div>      
    </div>
    {/* End Content */}
        </>
    );
}

export default Profile;
