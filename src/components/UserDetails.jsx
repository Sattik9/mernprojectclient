import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FetchBookingDetails } from '../Redux/BookingDetailsSlice';
import { useEffect } from 'react';
import { imageurl } from '../Api/imageurl';

const UserDetails = () => {
  const {  booking_details} = useSelector((state) => state?.bookingdets);
    const image=localStorage.getItem("image");
    const name=localStorage.getItem("name");
    const email=localStorage.getItem("email");
    const phone=localStorage.getItem("phone");
    const id=localStorage.getItem("id");
    console.log("Bookings",booking_details?.data?.result);
    const dispatch=useDispatch();
    useEffect(() => {
      dispatch(FetchBookingDetails(id));
     
    }, [id]);

  return (
    <>
    <div className="container-xxl bg-white p-0">
     <div className="container-fluid page-header mb-5 p-0" style={{backgroundImage: 'url(img/carousel-1.jpg)'}}>
    <div className="container-fluid page-header-inner py-5">
      <div className="container text-center pb-5">
        <h1 className="display-3 text-white mb-3 animated slideInDown">User Details</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb justify-content-center text-uppercase">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Pages</a></li>
            <li className="breadcrumb-item text-white active" aria-current="page">User Details</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
  {/* <div className="container-xxl py-5 px-0 wow zoomIn" data-wow-delay="0.1s">
    <div className="row g-0">
      <div className="col-md-6 bg-white shadow  d-flex align-items-center">
        <div className="p-5">
          <img src={`http://localhost:6300/${image}`} height={"200px"}/>
          <h5 className="mb-3">Name:{name}</h5>
          <h5 className="mb-3">Email:{email}</h5>
          <h5 className="mb-3">Phone:{phone}</h5>
          
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
  </div> */}


   {/* <section>
  <div className="container-fluid py-5 h-100" style={{width:1500}}>
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-lg-6 mb-4 mb-lg-0">
        <div className="card mb-3" style={{borderRadius: '1rem'}}>
          <div className="row g-0">
            <div className="col-md-4 text-center text-white" style={{borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem'}}>
               
              <img src={`http://localhost:6300/${image}`} alt="Avatar" className="img-fluid my-4" style={{width: 100}} />
              <h4 className='text-white'>{name}</h4>
              <p>Web Designer</p>
              <i className="far fa-edit mb-5" />
              <i className="flaticon-barbell" style={{fontSize:40}}/> 
            </div>
            <div className="col-md-8" >
              <div className="card-body p-4">
                <h6 >Information</h6>
                <hr className="mt-0 mb-4" />
                <div className="row pt-1">
                <div className="col-4 mb-3">
                    <h6 >Name</h6>
                    <p >{name}</p>
                  </div>
                  <div className="col-4 mb-3">
                    <h6 >Email</h6>
                    <p >{email}</p>
                  </div>
                  <div className="col-4 mb-3">
                    <h6>Phone</h6>
                    <p >{phone}</p>
                  </div>
                </div>
                <h6 >Bookings</h6>
                <hr className="mt-0 mb-4" />
                <div className="row pt-1">
                  
                  
                </div>
                <div className="d-flex justify-content-start">
                  <a href="#!"><i className="fab fa-facebook-f fa-lg me-3" /></a>
                  <a href="#!"><i className="fab fa-twitter fa-lg me-3" /></a>
                  <a href="#!"><i className="fab fa-instagram fa-lg" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>  */}
  
  <section>
  <div className="container-fluid py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-lg-6 mb-4 mb-lg-0">
        <div className="card mb-3" style={{borderRadius: '1rem'}}>
          <div className="row g-0">
            <div className="col-md-5 text-center text-white" style={{borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem',backgroundColor:"#FFA500"}}>
              
              <img src={`${imageurl}${image}`} alt="Avatar" className="img-fluid my-4" style={{width: 120, height:120,borderRadius:"100%"}} />
              <h4 className='text-white'>{name}</h4>
              <p>Email : {email}</p>
              <p>Contact No : {phone}</p>
              <i className="far fa-edit mb-5" />
              <i className="flaticon-barbell" style={{fontSize:40}}/>
            </div>
            <div className="col-md-7 bg-dark px-0">
              <div className="card-body p-4">
                
                <hr className="mt-0 mb-4" />
                
                <h6 className='text-white'>Bookings</h6>
                <hr className="mt-0 mb-4" />
                {booking_details?.data?.result?.map((item,index)=>{
                    return(
                      <div className="col-6 mb-3">
                      <h6 className='text-white'>{item?.room?.name}</h6>
                      {item.isPending?<p style={{color:'grey'}}>Pending<span>&#10060;</span> </p>:<p>Approved <span>&#9989;</span></p>}
                      
                    </div>
                    )
                  })}
                {/* <div className="row pt-1">
                  <div className="col-6 mb-3">
                    <h6 className='text-white'>Recent</h6>
                    <p className="text-white">Lorem ipsum</p>
                  </div>
                  <div className="col-6 mb-3">
                    <h6 className='text-white'>Most Viewed</h6>
                    <p className="text-white">Dolor sit amet</p>
                  </div>
                </div> */}
                <div className="d-flex justify-content-start">
                  <a href="#!"><i className="fab fa-facebook-f fa-lg me-3" /></a>
                  <a href="#!"><i className="fab fa-twitter fa-lg me-3" /></a>
                  <a href="#!"><i className="fab fa-instagram fa-lg" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




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
    
    </>
  )
}

export default UserDetails