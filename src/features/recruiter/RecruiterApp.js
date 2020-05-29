import React from 'react';
import { useState, useEffect } from 'react';

//import css
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/line-icons.css';
import '../../assets/css/slicknav.min.css';
import '../../assets/css/animate.css';
import '../../assets/css/main.css';
import '../../assets/css/responsive.css';

function Recruiter(){

    return(
        <>
        {/* Page Header Start */}
    <div className="page-header">
      <div className="container">
        <div className="row">         
          <div className="col-lg-12">
            <div className="inner-header">
              <h3>Company Name</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Page Header End */}   

    <div className="section">
      <div className="container">        
        <div className="row">
          <div className="col-lg-4 col-md-4 col-xs-12">
            <div className="right-sideabr">
              <h4>Company Name</h4>
              <ul className="list-item">
                <li><a href="/recruitEdit">Edit Account</a></li>
                <li><a href="/recruitNotifics">Notifications </a></li>
                <li><a className="active" href="/recruiterApp">Manage Applications </a></li>
                <li><a href="/changePass">Change Password</a></li>
                <li><a href="/">Sing Out</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8 col-md-12 col-xs-12">
            <div className="job-alerts-item">
              <h3 className="alerts-title">Manage applications</h3>
              <div className="applications-content">
                <div className="row">
                  <div className="col-md-4">
                    <div className="thums">
                      <img src="assets/img/jobs/img-1.jpg" alt=""/>
                    </div>
                    <h3>Web Designer Meeded</h3>
                    <span>Quick Studio</span>
                  </div>
                   <div className="col-md-3">
                    <p><span className="full-time">Full-Time</span></p>
                  </div>
                  <div className="col-md-3">
                    <p>Nov 14th, 2017</p>
                  </div>                   
                  <div className="col-md-2">
                    <p>13</p>
                  </div>
                </div>
              </div>
              <div className="applications-content">
                <div className="row">
                  <div className="col-md-4">
                    <div className="thums">
                      <img src="assets/img/jobs/img-1.jpg" alt=""/>
                    </div>
                    <h3>Front-end developer needed</h3>
                    <span>Quick Studio</span>
                  </div>
                   <div className="col-md-3">
                    <p><span className="full-time">Full-Time</span></p>
                  </div>
                  <div className="col-md-3">
                    <p>Nov 14th, 2017</p>
                  </div>                   
                  <div className="col-md-2">
                    <p>4</p>
                  </div>
                </div>
              </div>
              <div className="applications-content">
                <div className="row">
                  <div className="col-md-4">
                    <div className="thums">
                      <img src="assets/img/jobs/img-1.jpg" alt=""/>
                    </div>
                    <h3>We're looking for an Art Director</h3>
                    <span>Quick Studio</span>
                  </div>
                   <div className="col-md-3">
                    <p><span className="part-time">Part-Time</span></p>
                  </div>
                  <div className="col-md-3">
                    <p>Nov 14th, 2017</p>
                  </div>                   
                  <div className="col-md-2">
                    <p>18</p>
                  </div>
                </div>
              </div>
              <div className="applications-content">
                <div className="row">
                  <div className="col-md-4">
                    <div className="thums">
                      <img src="assets/img/jobs/img-1.jpg" alt=""/>
                    </div>
                    <h3>Web designer needed</h3>
                    <span>Quick Studio</span>
                  </div>
                   <div className="col-md-3">
                    <p><span className="full-time">Full-Time</span></p>
                  </div>
                  <div className="col-md-3">
                    <p>Nov 14th, 2017</p>
                  </div>                   
                  <div className="col-md-2">
                    <p>4</p>
                  </div>
                </div>
              </div>
              <div className="applications-content">
                <div className="row">
                  <div className="col-md-4">
                    <div className="thums">
                      <img src="assets/img/jobs/img-1.jpg" alt=""/>
                    </div>
                    <h3>Looking for a Project Leader</h3>
                    <span>Quick Studio</span>
                  </div>
                   <div className="col-md-3">
                    <p><span className="full-time">Full-Time</span></p>
                  </div>
                  <div className="col-md-3">
                    <p>Nov 14th, 2017</p>
                  </div>                   
                  <div className="col-md-2">
                    <p>24</p>
                  </div>
                </div>
              </div>
              <div className="applications-content">
                <div className="row">
                  <div className="col-md-4">
                    <div className="thums">
                      <img src="assets/img/jobs/img-1.jpg" alt=""/>
                    </div>
                    <h3>We're hiring an fullstack designer</h3>
                    <span>Quick Studio</span>
                  </div>
                   <div className="col-md-3">
                    <p><span className="part-time">Part-Time</span></p>
                  </div>
                  <div className="col-md-3">
                    <p>Nov 14th, 2017</p>
                  </div>                   
                  <div className="col-md-2">
                    <p>7</p>
                  </div>
                </div>
              </div>
              {/* Start Pagination */}
              <ul className="pagination">              
                <li className="active"><a href="#" className="btn-prev" ><i className="lni-angle-left"></i> prev</a></li>
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li className="active"><a href="#" className="btn-next">Next <i className="lni-angle-right"></i></a></li>
              </ul>
              {/* End Pagination */}
            </div>
          </div>
      </div> 
     </div>      
    </div>
    

        </>


    );
}

export default Recruiter;
