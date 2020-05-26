import React from 'react';
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

function Notifics(){

    return(
        <>
         {/* Page Header Start */}
    <div className="page-header">
      <div className="container">
        <div className="row">         
          <div className="col-lg-12">
            <div className="inner-header">
              <h3>Notifications</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Page Header End */}

    {/* Start Content */}
    <div id="content">
      <div className="container">        
        <div className="row">
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="right-sideabr">
              <h4>Manage Account</h4>
              <ul className="list-item">
              <li><a href="/profile">My Resume</a></li>
                  <li><a className="active" href="/notifications">Notifications </a></li>
                  <li><a href="/profileEdit">Manage Resume </a></li>
                  <li><a href="/changePass">Change Password</a></li>
                  <li><a href="/">Sing Out</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-8 col-sm-8 col-xs-12">
            <div className="job-alerts-item notification">
              <h3 className="alerts-title">Your Notifications</h3>
              <div className="notification-item">
                <div className="thums">
                  <img src="assets/img/jobs/img-1.jpg" alt=""/>
                </div>
                <div className="text-left">
                  <p>Your Bookmarked job "Web designer needed" from Banana Inc, has expired.</p>
                  <span className="time"><i className="lni-alarm-clock"></i>3 Hours ago</span>
                </div>
              </div>
              <div className="notification-item">
                <div className="thums">
                  <img src="../assets/img/jobs/img-2.jpg" alt=""/>
                </div>
                <div className="text-left">
                  <p>Your Bookmarked job "Web designer needed" from Banana Inc, has expired.</p>
                  <span className="time"><i className="lni-alarm-clock"></i>3 Hours ago</span>
                </div>
              </div>
              <div className="notification-item">
                <div className="thums">
                  <img src="assets/img/jobs/img-3.jpg" alt=""/>
                </div>
                <div className="text-left">
                  <p>Your Bookmarked job "Web designer needed" from Banana Inc, has expired.</p>
                  <span className="time"><i className="lni-alarm-clock"></i>3 Hours ago</span>
                </div>
              </div>
              <div className="notification-item">
                <div className="thums">
                  <img src="assets/img/jobs/img-4.jpg" alt=""/>
                </div>
                <div className="text-left">
                  <p>Your Bookmarked job "Web designer needed" from Banana Inc, has expired.</p>
                  <span className="time"><i className="lni-alarm-clock"></i>3 Hours ago</span>
                </div>
              </div>
              <div className="notification-item">
                <div className="thums">
                  <img src="assets/img/jobs/img-5.jpg" alt=""/>
                </div>
                <div className="text-left">
                  <p>Your Bookmarked job "Web designer needed" from Banana Inc, has expired.</p>
                  <span className="time"><i className="lni-alarm-clock"></i>3 Hours ago</span>
                </div>
              </div>
              <div className="notification-item">
                <div className="thums">
                  <img src="assets/img/jobs/img-6.jpg" alt=""/>
                </div>
                <div className="text-left">
                  <p>Your Bookmarked job "Web designer needed" from Banana Inc, has expired.</p>
                  <span className="time"><i className="lni-alarm-clock"></i>3 Hours ago</span>
                </div>
              </div>
              {/* Start Pagination */}
              <ul className="pagination">              
                <li className="active"><a href="#" className="btn btn-common" ><i className="ti-angle-left"></i> prev</a></li>
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li className="active"><a href="#" className="btn btn-common">Next <i className="ti-angle-right"></i></a></li>
              </ul>
              {/* End Pagination */}
            </div>
          </div>
        </div>
      </div>      
    </div>
    {/* End Content */}
        </>
    );
}

export default Notifics;