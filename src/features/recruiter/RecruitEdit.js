import React from 'react';

//CSS imports
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/line-icons.css';
import '../../assets/css/slicknav.min.css';
import '../../assets/css/animate.css';
import '../../assets/css/main.css';
import '../../assets/css/responsive.css';

function RecruitEdit(){

    return(
        <>
        {/* Page Header Start */}
    <div className="page-header">
      <div className="container">
        <div className="row">         
          <div className="col-lg-12">
            <div className="inner-header">
              <h3>Edit Company Profile</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Page Header End */}     

    {/* Content section Start */} 
    <section id="content">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-md-12 col-xs-12">
            <div className="add-resume box">
              <form className="form-ad">
                <h3>Basic information</h3>
                <div className="form-group">
                  <label className="control-label">Company Name</label>
                  <input type="text" className="form-control" placeholder="Name"/>
                </div>
                <div className="form-group">
                  <label className="control-label"></label>
                  <label className="control-label">Email</label>
                  <input type="text" className="form-control" placeholder="Your@domain.com" />
                </div>
                <div className="form-group">
                  <label className="control-label">Industry</label>
                  <input type="text" className="form-control"  placeholder="Headline (e.g. Front-end developer)"/>
                </div> 
                <div className="form-group">
                  <label className="control-label">Location</label>
                  <input type="text" className="form-control"  placeholder="Location, e.g"/>
                </div>  
                <div className="form-group">
                  <label className="control-label">Web</label>
                  <input type="text" className="form-control"  placeholder="Website address"/>
                </div> 
                <div className="form-group">
                  <div className="button-group">
                    <div className="action-buttons">
                      <div className="upload-button">
                        <button className="btn btn-common">Choose a cover image</button>
                        <input id="cover_img_file_2" type="file"/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label">Description</label>  
                  <textarea className="form-control" rows="7"></textarea>                
                </div>                                 
              </form>
              <a href="/recruiter" className="btn btn-common">Save</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Content section End */}
        </>
    );
}

export default RecruitEdit;