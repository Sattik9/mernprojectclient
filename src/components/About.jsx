import React from 'react'

const About = () => {
  return (
    <>
      
      <div className="container-xxl bg-white p-0">
        <div>
  <div className="container-fluid page-header mb-5 p-0" style={{backgroundImage: 'url(img/carousel-1.jpg)'}}>
    <div className="container-fluid page-header-inner py-5">
      <div className="container text-center pb-5">
        <h1 className="display-3 text-white mb-3 animated slideInDown">About Us</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb justify-content-center text-uppercase">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Pages</a></li>
            <li className="breadcrumb-item text-white active" aria-current="page">About</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
 
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6">
          <h6 className="section-title text-start text-primary text-uppercase">About Us</h6>
          <h1 className="mb-4">Welcome to <span className="text-primary text-uppercase">Olympus</span></h1>
          <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
          <div className="row g-3 pb-4">
            <div className="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
              <div className="border rounded p-1">
                <div className="border rounded text-center p-4">
                  <i className="fa fa-hotel fa-2x text-primary mb-2" />
                  <h2 className="mb-1" data-toggle="counter-up">1234</h2>
                  <p className="mb-0">Rooms</p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 wow fadeIn" data-wow-delay="0.3s">
              <div className="border rounded p-1">
                <div className="border rounded text-center p-4">
                  <i className="fa fa-users-cog fa-2x text-primary mb-2" />
                  <h2 className="mb-1" data-toggle="counter-up">1234</h2>
                  <p className="mb-0">Staffs</p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 wow fadeIn" data-wow-delay="0.5s">
              <div className="border rounded p-1">
                <div className="border rounded text-center p-4">
                  <i className="fa fa-users fa-2x text-primary mb-2" />
                  <h2 className="mb-1" data-toggle="counter-up">1234</h2>
                  <p className="mb-0">Clients</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div className="col-lg-6">
          <div className="row g-3">
            <div className="col-6 text-end">
              <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.1s" src="img/about-1.jpg" style={{marginTop: '25%'}} />
            </div>
            <div className="col-6 text-start">
              <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.3s" src="img/about-2.jpg" />
            </div>
            <div className="col-6 text-end">
              <img className="img-fluid rounded w-50 wow zoomIn" data-wow-delay="0.5s" src="img/about-3.jpg" />
            </div>
            <div className="col-6 text-start">
              <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.7s" src="img/about-4.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title text-center text-primary text-uppercase">Our Team</h6>
        <h1 className="mb-5">Explore Our <span className="text-primary text-uppercase">Staffs</span></h1>
      </div>
      <div className="row g-4">
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="rounded shadow overflow-hidden">
            <div className="position-relative">
              <img className="img-fluid" src="img/team-1.jpg" alt />
              <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
              </div>
            </div>
            <div className="text-center p-4 mt-3">
              <h5 className="fw-bold mb-0">Full Name</h5>
              <small>Designation</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="rounded shadow overflow-hidden">
            <div className="position-relative">
              <img className="img-fluid" src="img/team-2.jpg" alt />
              <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
              </div>
            </div>
            <div className="text-center p-4 mt-3">
              <h5 className="fw-bold mb-0">Full Name</h5>
              <small>Designation</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="rounded shadow overflow-hidden">
            <div className="position-relative">
              <img className="img-fluid" src="img/team-3.jpg" alt />
              <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
              </div>
            </div>
            <div className="text-center p-4 mt-3">
              <h5 className="fw-bold mb-0">Full Name</h5>
              <small>Designation</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
          <div className="rounded shadow overflow-hidden">
            <div className="position-relative">
              <img className="img-fluid" src="img/team-4.jpg" alt />
              <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
              </div>
            </div>
            <div className="text-center p-4 mt-3">
              <h5 className="fw-bold mb-0">Full Name</h5>
              <small>Designation</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}
  <div className="container newsletter mt-5 wow fadeIn" data-wow-delay="0.1s">
    <div className="row justify-content-center">
      <div className="col-lg-10 border rounded p-1">
        <div className="border rounded text-center p-1">
          <div className="bg-white rounded text-center p-5">
            <h4 className="mb-4">Subscribe Our <span className="text-primary text-uppercase">Newsletter</span></h4>
            <div className="position-relative mx-auto" style={{maxWidth: 400}}>
              <input className="form-control w-100 py-3 ps-4 pe-5" type="text" placeholder="Enter your email" />
              <button type="button" className="btn btn-primary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid bg-dark text-light footer wow fadeIn" data-wow-delay="0.1s">
    <div className="container pb-5">
      <div className="row g-5">
        <div className="col-md-6 col-lg-4">
        <div className="bg-primary rounded p-4">
                  <a href="#"><h1 className="text-white text-uppercase mb-3">Olympus</h1></a>
                  
                </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <h6 className="section-title text-start text-primary text-uppercase mb-4">Contact</h6>
          <p className="mb-2"><i className="fa fa-map-marker-alt me-3" />123 Street, New York, USA</p>
          <p className="mb-2"><i className="fa fa-phone-alt me-3" />+012 345 67890</p>
          <p className="mb-2"><i className="fa fa-envelope me-3" />info@example.com</p>
          <div className="d-flex pt-2">
            <a className="btn btn-outline-light btn-social" href><i className="fab fa-twitter" /></a>
            <a className="btn btn-outline-light btn-social" href><i className="fab fa-facebook-f" /></a>
            <a className="btn btn-outline-light btn-social" href><i className="fab fa-youtube" /></a>
            <a className="btn btn-outline-light btn-social" href><i className="fab fa-linkedin-in" /></a>
          </div>
        </div>
        <div className="col-lg-5 col-md-12">
          <div className="row gy-5 g-4">
            <div className="col-md-6">
              <h6 className="section-title text-start text-primary text-uppercase mb-4">Company</h6>
              <a className="btn btn-link" href>About Us</a>
              <a className="btn btn-link" href>Contact Us</a>
              <a className="btn btn-link" href>Privacy Policy</a>
              <a className="btn btn-link" href>Terms &amp; Condition</a>
              <a className="btn btn-link" href>Support</a>
            </div>
            <div className="col-md-6">
              <h6 className="section-title text-start text-primary text-uppercase mb-4">Services</h6>
              <a className="btn btn-link" href>Food &amp; Restaurant</a>
              <a className="btn btn-link" href>Spa &amp; Fitness</a>
              <a className="btn btn-link" href>Sports &amp; Gaming</a>
              <a className="btn btn-link" href>Event &amp; Party</a>
              <a className="btn btn-link" href>GYM &amp; Yoga</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="copyright">
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            © <a className="border-bottom" href="#">Your Site Name</a>, All Right Reserved. 
            <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="footer-menu">
              <a href>Home</a>
              <a href>Cookies</a>
              <a href>Help</a>
              <a href>FQAs</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
</div>
</div>
    
    </>
  )
}

export default About