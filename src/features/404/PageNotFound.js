import React from 'react';
//import css
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/line-icons.css';
import '../../assets/css/slicknav.min.css';
import '../../assets/css/animate.css';
import '../../assets/css/main.css';
import '../../assets/css/responsive.css';

function NotFound() {

  return (
    <>
      {/* Page Header Start */}
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-header">
                <h1>404</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* Start Content */}
      <div id="content">
        <div className="container" style={{height:'8rem'}}>
          <div >
              <h3 style={{textAlign:'center'}}> PAGE NOT FOUND ...</h3>
          </div>
        </div>
      </div>
      {/* End Content */}
    </>
  );
}

export default NotFound;