import React from 'react';
//import css
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/line-icons.css';
import '../../assets/css/slicknav.min.css';
import '../../assets/css/animate.css';
import '../../assets/css/main.css';
import '../../assets/css/responsive.css';

function ChangePass() {

  return (
    <>
      {/* Page Header Start */}
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-header">
                <h3>Change Password</h3>
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
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="right-sideabr">
                <h4>Manage Account</h4>
                <ul className="list-item">
                  <li><a href="/profile">My Resume</a></li>
                  <li><a href="/notifications">Notifications </a></li>
                  <li><a href="/profileEdit">Manage Resume </a></li>
                  <li><a className="active" href="/changePass">Change Password</a></li>
                  <li><a href="/">Sing Out</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-8 col-sm-8 col-xs-12">
              <div className="job-alerts-item">
                <h3 className="alerts-title">Change Password</h3>
                <form className="form">
                  <div className="form-group is-empty">
                    <label className="control-label">Old Password*</label>
                    <input className="form-control" type="text" />
                    <span className="material-input"></span>
                  </div>
                  <div className="form-group is-empty">
                    <label className="control-label">New Password*</label>
                    <input className="form-control" type="text" />
                    <span className="material-input"></span>
                  </div>
                  <a href="/profile" id="submit" className="btn btn-common">Save Change</a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Content */}
    </>
  );
}

export default ChangePass;