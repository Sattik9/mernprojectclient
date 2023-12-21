import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { Link, useParams } from 'react-router-dom'
import { FetchAllRooms } from '../Redux/RoomByCategorySlice';
import { imageurl } from '../Api/imageurl';


const Rooms = () => {
    const { all_rooms } = useSelector((state) => state?.roombycategory)
    const dispatch = useDispatch();
  console.log("allrooms==>",all_rooms?.data?.result);
    const id = useParams()
    
    useEffect(() => {
        dispatch(FetchAllRooms(id))
    }, [id])
  return (
    <>
    <div className="container-xxl bg-white p-0">
  <div className="container-fluid page-header mb-5 p-0" style={{backgroundImage: 'url(/img/carousel-1.jpg)'}}>
    <div className="container-fluid page-header-inner py-5">
      <div className="container text-center pb-5">
        <h1 className="display-3 text-white mb-3 animated slideInDown">Rooms</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb justify-content-center text-uppercase">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Pages</a></li>
            <li className="breadcrumb-item text-white active" aria-current="page">Rooms</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
 
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title text-center text-primary text-uppercase">Our Rooms</h6>
        <h1 className="mb-5">Explore Our <span className="text-primary text-uppercase">Rooms</span></h1>
      </div>
      <div className="row g-4">
        
        {
        all_rooms?.data?.result.map((item,index)=>{
            return(
                <>
                {item.isActivate?<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="room-item shadow rounded overflow-hidden">
            <div className="position-relative">
              <img className="img-fluid" src={`${imageurl}${item?.image}`} alt />
              
            </div>
            <div className="p-4 mt-2">
              <div className="d-flex justify-content-between mb-3">
                <h5 className="mb-0">{item?.name}</h5>
                        <div className='ps-2'>
                        <small className="fa fa-star text-primary"></small>{item?.rating} <p>({item?.numReviews})</p>

                        </div>

                      </div>
              <div className="d-flex mb-3">
                <small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2" />{item?.bed} Bed</small>
                <small className="border-end me-3 pe-3"><i className="fa fa-bath text-primary me-2" />{item?.bath} Bath</small>
                <small><i className="fa fa-wifi text-primary me-2" />{item?.wifi}</small>
              </div>
              <p className="text-body mb-3">{item?.description}</p>
              <div className="d-flex justify-content-between">
               
                <Link className="btn btn-sm btn-primary rounded py-2 px-4" to={`/roomdetails/${item._id}`}>View Details</Link>
                <Link class="btn btn-sm btn-dark rounded py-2 px-4" to={`/booking/${item._id}`}>Book Now</Link>
              </div>
            </div>
          </div>
        </div>:""}
                </>
            )
        })
    }
    
        
        
        
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
    </>
  )
}

export default Rooms