import React from 'react';
import { useState, useEffect } from 'react';
//import images
import intrologo from '../../assets/img/intro.png'
import featuredImg1 from '../../assets/img/features/img1.png';
import featuredImg2 from '../../assets/img/features/img2.png';
import featuredImg3 from '../../assets/img/features/img3.png';
import featuredImg4 from '../../assets/img/features/img4.png';
import featuredImg5 from '../../assets/img/features/img5.png';
import { Counter } from '../../features/counter/Counter';
//import css
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/line-icons.css';
import '../../assets/css/slicknav.min.css';
import '../../assets/css/animate.css';
import '../../assets/css/main.css';
import '../../assets/css/responsive.css';

function Homepage() {

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

  return ( 
    <>
    <div className="App">
      <header id="home" className="hero-area">
        <div className="container">
          <div className="row space-100">
            <div className="col-lg-7 col-md-12 col-xs-12">
              <div className="contents">
                <h2 className="head-title">Find the  <br /> job that fits your life</h2>
                <p>Aliquam vestibulum cursus felis. In iaculis iaculis sapien ac condimentum. Vestibulum congue posuere lacus, id tincidunt nisi porta sit amet. Suspendisse et sapien varius, pellentesque dui non.</p>
                <div className="job-search-form">
                  <form>
                    <div className="row">
                      <div className="col-lg-5 col-md-5 col-xs-12">
                        <div className="form-group">
                          <input className="form-control" type="text" placeholder="Job Title or Company Name" />
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 col-xs-12">
                        <div className="form-group">
                          <div className="search-category-container">
                            <label className="styled-select">
                              <select>
                                <option value="none">Locations</option>
                                <option value="none">New York</option>
                                <option value="none">California</option>
                                <option value="none">Washington</option>
                                <option value="none">Birmingham</option>
                                <option value="none">Chicago</option>
                                <option value="none">Phoenix</option>
                              </select>
                            </label>
                          </div>
                          <i className="lni-map-marker"></i>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-2 col-xs-12">
                        <button type="submit" className="button"><i className="lni-search"></i></button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-xs-12">
              <div className="intro-img">
                <img src={intrologo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Header Section End */}

      {/* Category Section Start */}
      <section className="category section bg-gray">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Browse Categories</h2>
            <p>Most popular categories of portal, sorted by popularity</p>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-xs-12 f-category">
              <a href="browse-jobs.html">
                <div className="icon bg-color-1">
                  <i className="lni-home"></i>
                </div>
                <h3>Finance</h3>
                <p>(4286 jobs)</p>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12 f-category">
              <a href="browse-jobs.html">
                <div className="icon bg-color-2">
                  <i className="lni-world"></i>
                </div>
                <h3>Sale/Markting</h3>
                <p>(2000 jobs)</p>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12 f-category">
              <a href="browse-jobs.html">
                <div className="icon bg-color-3">
                  <i className="lni-book"></i>
                </div>
                <h3>Education/Training</h3>
                <p>(1450 jobs)</p>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12 f-category">
              <a href="browse-jobs.html">
                <div className="icon bg-color-4">
                  <i className="lni-display"></i>
                </div>
                <h3>Technologies</h3>
                <p>(5100 jobs)</p>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12 f-category">
              <a href="browse-jobs.html">
                <div className="icon bg-color-5">
                  <i className="lni-brush"></i>
                </div>
                <h3>Art/Design</h3>
                <p>(5079 jobs)</p>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12 f-category">
              <a href="browse-jobs.html">
                <div className="icon bg-color-6">
                  <i className="lni-heart"></i>
                </div>
                <h3>Healthcare</h3>
                <p>(3235 jobs)</p>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12 f-category">
              <a href="browse-jobs.html">
                <div className="icon bg-color-7">
                  <i className="lni-funnel"></i>
                </div>
                <h3>Science</h3>
                <p>(1800 jobs)</p>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12 f-category">
              <a href="browse-jobs.html">
                <div className="icon bg-color-8">
                  <i className="lni-cup"></i>
                </div>
                <h3>Food Services</h3>
                <p>(4286 jobs)</p>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Category Section End */}

      {/* Featured Section Start */}
      <section id="featured" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Jobs</h2>
            <p>Hand-picked jobs featured depending on popularity and benifits</p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="job-featured">
                <div className="icon">
                  <img src={featuredImg1} alt="" />
                </div>
                <div className="content">
                  <h3><a href="job-details.html">Software Engineer</a></h3>
                  <p className="brand">MizTech</p>
                  <div className="tags">
                    <span><i className="lni-map-marker"></i> New York</span>
                    <span><i className="lni-user"></i>John Smith</span>
                  </div>
                  <span className="full-time">Full Time</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="job-featured">
                <div className="icon">
                  <img src={featuredImg2} alt="" />
                </div>
                <div className="content">
                  <h3><a href="job-details.html">Graphic Designer</a></h3>
                  <p className="brand">Hunter Inc.</p>
                  <div className="tags">
                    <span><i className="lni-map-marker"></i> New York</span>
                    <span><i className="lni-user"></i>John Smith</span>
                  </div>
                  <span className="part-time">Part Time</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="job-featured">
                <div className="icon">
                  <img src={featuredImg3} alt="" />
                </div>
                <div className="content">
                  <h3><a href="job-details.html">Managing Director</a></h3>
                  <p className="brand">MagNews</p>
                  <div className="tags">
                    <span><i className="lni-map-marker"></i> New York</span>
                    <span><i className="lni-user"></i>John Smith</span>
                  </div>
                  <span className="full-time">Full Time</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="job-featured">
                <div className="icon">
                  <img src={featuredImg4} alt="" />
                </div>
                <div className="content">
                  <h3><a href="job-details.html">Software Engineer</a></h3>
                  <p className="brand">AmazeSoft</p>
                  <div className="tags">
                    <span><i className="lni-map-marker"></i> New York</span>
                    <span><i className="lni-user"></i>John Smith</span>
                  </div>
                  <span className="full-time">Full Time</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="job-featured">
                <div className="icon">
                  <img src={featuredImg5} alt="" />
                </div>
                <div className="content">
                  <h3><a href="job-details.html">Graphic Designer</a></h3>
                  <p className="brand">Bingo</p>
                  <div className="tags">
                    <span><i className="lni-map-marker"></i> New York</span>
                    <span><i className="lni-user"></i>John Smith</span>
                  </div>
                  <span className="part-time">Part Time</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="job-featured">
                <div className="icon">
                  <img src="assets/img/features/img6.png" alt="" />
                </div>
                <div className="content">
                  <h3><a href="job-details.html">Managing Director</a></h3>
                  <p className="brand">MagNews</p>
                  <div className="tags">
                    <span><i className="lni-map-marker"></i> New York</span>
                    <span><i className="lni-user"></i>John Smith</span>
                  </div>
                  <span className="full-time">Full Time</span>
                </div>
              </div>
            </div>
            <div className="col-12 text-center mt-4">
              <a href="job-page.html" className="btn btn-common">Browse All Jobs</a>
            </div>
          </div>
        </div>
      </section>
      {/** Featured Section End */}
    </div> 
    </>

  ); 
}

export default Homepage;