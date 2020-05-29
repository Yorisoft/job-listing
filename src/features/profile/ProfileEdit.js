import React from "react";

//import css
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/line-icons.css';
import '../../assets/css/slicknav.min.css';
import '../../assets/css/animate.css';
import '../../assets/css/main.css';
import '../../assets/css/responsive.css';

function ManagePro(){

    return(
        <>
        {/* Page Header Start */}
    <div className="page-header">
      <div className="container">
        <div className="row">         
          <div className="col-lg-12">
            <div className="inner-header">
              <h3>Manage Projects</h3>
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
        <div className="col-lg-4 col-md-4 col-xs-12">
            <div className="right-sideabr">
              <h4>Manage Account</h4>
              <ul className="list-item">
                <li><a href="/profile">My Projects</a></li>
                <li><a href="/notifications">Notifications </a></li>
                <li><a className="active" href="/profileEdit">Manage Projects </a></li>
                <li><a href="/changePass">Change Password</a></li>
                <li><a href="/">Sing Out</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8 col-md-12 col-xs-12">
            <div className="job-alerts-item candidates">
              <h3 className="alerts-title">Manage Projects</h3>
              <div className="manager-resumes-item">
                <div className="manager-content">
                  <a href="resume.html"><img className="resume-thumb" src="../../assets/img/resume/img-1.png" alt="" /></a>
                  <div className="manager-info">
                    <div className="manager-name">
                      <h4><a href="#">Zane Joyner</a></h4>
                      <h5>Front-end developer</h5>
                    </div>
                    <div className="manager-meta">
                      <span className="location"><i className="lni-map-marker"></i> Cupertino, CA, USA</span>
                      <span className="rate"><i className="lni-alarm-clock"></i> $55 per hour</span>
                    </div>
                  </div>
                </div>
                <div className="update-date">
                  <p className="status">
                    <strong>Updated on:</strong> Fab 22, 2020
                  </p>
                  <div className="action-btn">
                    <a className="btn btn-xs btn-gray" href="#">Hide</a>
                    <a className="btn btn-xs btn-gray" href="#">Edit</a>
                    <a className="btn btn-xs btn-danger" href="#">Delete</a>
                  </div>
                </div>
              </div>     
              {/* <div className="manager-resumes-item">
                <div className="manager-content">
                  <a href="resume.html"><img className="resume-thumb" src="assets/img/jobs/avatar-1.jpg" alt=""/></a>
                  <div className="manager-info">
                    <div className="manager-name">
                      <h4><a href="#">Zane Joyner</a></h4>
                      <h5>Front-end developer</h5>
                    </div>
                    <div className="manager-meta">
                      <span className="location"><i className="lni-map-marker"></i> Cupertino, CA, USA</span>
                      <span className="rate"><i className="lni-alarm-clock"></i> $55 per hour</span>
                    </div>
                  </div>
                </div>
                <div className="update-date">
                  <p className="status">
                    <strong>Updated on:</strong> Fab 22, 2020
                  </p>
                  <div className="action-btn">
                    <a className="btn btn-xs btn-gray" href="#">Hide</a>
                    <a className="btn btn-xs btn-gray" href="#">Edit</a>
                    <a className="btn btn-xs btn-danger" href="#">Delete</a>
                  </div>
                </div>
              </div>  
              <div className="manager-resumes-item">
                <div className="manager-content">
                  <a href="resume.html"><img className="resume-thumb" src="assets/img/jobs/avatar-1.jpg" alt=""/></a>
                  <div className="manager-info">
                    <div className="manager-name">
                      <h4><a href="#">Zane Joyner</a></h4>
                      <h5>Front-end developer</h5>
                    </div>
                    <div className="manager-meta">
                      <span className="location"><i className="lni-map-marker"></i> Cupertino, CA, USA</span>
                      <span className="rate"><i className="lni-alarm-clock"></i> $55 per hour</span>
                    </div>
                  </div>
                </div>
                <div className="update-date">
                  <p className="status">
                    <strong>Updated on:</strong> Fab 22, 2020
                  </p>
                  <div className="action-btn">
                    <a className="btn btn-xs btn-gray" href="#">Hide</a>
                    <a className="btn btn-xs btn-gray" href="#">Edit</a>
                    <a className="btn btn-xs btn-danger" href="#">Delete</a>
                  </div>
                </div>
              </div>  
              <div className="manager-resumes-item">
                <div className="manager-content">
                  <a href="resume.html"><img className="resume-thumb" src="assets/img/jobs/avatar-1.jpg" alt=""/></a>
                  <div className="manager-info">
                    <div className="manager-name">
                      <h4><a href="#">Zane Joyner</a></h4>
                      <h5>Front-end developer</h5>
                    </div>
                    <div className="manager-meta">
                      <span className="location"><i className="lni-map-marker"></i> Cupertino, CA, USA</span>
                      <span className="rate"><i className="lni-alarm-clock"></i> $55 per hour</span>
                    </div>
                  </div>
                </div>
                <div className="update-date">
                  <p className="status">-
                    <strong>Updated on:</strong> Fab 22, 2020
                  </p>
                  <div className="action-btn">
                    <a className="btn btn-xs btn-gray" href="#">Hide</a>
                    <a className="btn btn-xs btn-gray" href="#">Edit</a>
                    <a className="btn btn-xs btn-danger" href="#">Delete</a>
                  </div>
                </div>
              </div>     */}
              <a className="btn btn-common btn-sm" href="/addResume">Add new Projects</a>
            </div>
          </div>
        </div>
      </div>      
    </div>
    {/* End Content */}
        </>
    );
}

export default ManagePro;