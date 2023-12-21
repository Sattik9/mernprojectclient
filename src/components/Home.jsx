import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
 
  return (
    <>
    <div className="container-xxl bg-white p-0">
        <div>
  <div className="container-fluid p-0 mb-5">
    <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3" style={{maxWidth: 700}}>
              <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">Luxury Living</h6>
              <h1 className="display-3 text-white mb-4 animated slideInDown">Discover A Brand Luxurious Hotel</h1>
              
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3" style={{maxWidth: 700}}>
              <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">Luxury Living</h6>
              <h1 className="display-3 text-white mb-4 animated slideInDown">Discover A Brand Luxurious Hotel</h1>
              
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
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
  
  <div className="container-xxl py-5 px-0 wow zoomIn" data-wow-delay="0.1s">
    <div className="row g-0">
      <div className="col-md-6 bg-dark d-flex align-items-center">
        <div className="p-5">
          <h6 className="section-title text-start text-white text-uppercase mb-3">Luxury Living</h6>
          <h1 className="text-white mb-4">Discover A Brand Luxurious Hotel</h1>
          <p className="text-white mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
          <Link to="/category" className="btn btn-primary py-md-3 px-md-5 me-3">Our Rooms</Link>
          
        </div>
      </div>
      <div className="col-md-6">
        <div className="video">
          <button type="button" className="btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
            <span />
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className="modal fade" id="videoModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content rounded-0">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Youtube Video</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          {/* 16:9 aspect ratio */}
          <div className="ratio ratio-16x9">
            <iframe className="embed-responsive-item" src id="video" allowFullScreen allowscriptaccess="always" allow="autoplay" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title text-center text-primary text-uppercase">Our Services</h6>
        <h1 className="mb-5">Explore Our <span className="text-primary text-uppercase">Services</span></h1>
      </div>
      <div className="row g-4">
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <a className="service-item rounded" href>
            <div className="service-icon bg-transparent border rounded p-1">
              <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                <i className="fa fa-hotel fa-2x text-primary" />
              </div>
            </div>
            <h5 className="mb-3">Rooms &amp; Appartment</h5>
            <p className="text-body mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
          </a>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
          <a className="service-item rounded" href>
            <div className="service-icon bg-transparent border rounded p-1">
              <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                <i className="fa fa-utensils fa-2x text-primary" />
              </div>
            </div>
            <h5 className="mb-3">Food &amp; Restaurant</h5>
            <p className="text-body mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
          </a>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <a className="service-item rounded" href>
            <div className="service-icon bg-transparent border rounded p-1">
              <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                <i className="fa fa-spa fa-2x text-primary" />
              </div>
            </div>
            <h5 className="mb-3">Spa &amp; Fitness</h5>
            <p className="text-body mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
          </a>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
          <a className="service-item rounded" href>
            <div className="service-icon bg-transparent border rounded p-1">
              <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                <i className="fa fa-swimmer fa-2x text-primary" />
              </div>
            </div>
            <h5 className="mb-3">Sports &amp; Gaming</h5>
            <p className="text-body mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
          </a>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <a className="service-item rounded" href>
            <div className="service-icon bg-transparent border rounded p-1">
              <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                <i className="fa fa-glass-cheers fa-2x text-primary" />
              </div>
            </div>
            <h5 className="mb-3">Event &amp; Party</h5>
            <p className="text-body mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
          </a>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
          <a className="service-item rounded" href>
            <div className="service-icon bg-transparent border rounded p-1">
              <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                <i className="fa fa-dumbbell fa-2x text-primary" />
              </div>
            </div>
            <h5 className="mb-3">GYM &amp; Yoga</h5>
            <p className="text-body mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
          </a>
        </div>
      </div>
    </div>
  </div>
  
  
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

export default Home