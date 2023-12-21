import React, { useEffect, useState } from 'react'
import { FetchRoomDetails } from '../Redux/RoomDetailsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { booking } from '../Redux/BookingSlice';

const BookingFrom = () => {
    const { room_details } = useSelector((state) => state?.rooms);
    
    const dispatch = useDispatch();
  console.log(room_details?.data?.result);
  
    const id = useParams()
    
    useEffect(() => {
        dispatch(FetchRoomDetails(id));
        
    }, [id]);
    
   
    const[checkin,setCheckin]=useState();
    const[checkout,setCheckout]=useState();
    const[person,setPerson]=useState();
    const[price,setPrice]=useState("0");
    const room=room_details?.data?.result._id;
    const userid=localStorage.getItem("id");
    const name=localStorage.getItem("name");
    const email=localStorage.getItem("email");
    const[request,setRequest]=useState();

    useEffect(() => {
      
        if(room_details?.data?.result){
          switch (person) {
            case "1":
              setPrice("5000");
              break;
            case "2":
              setPrice("10000");
              break;
            case "3":
              setPrice("15000");
              break;
              case "4":
                setPrice("20000");
                break;
                default:
                  setPrice("0")
          }
        }
    }, [person,price]);
    let history=useNavigate();
    const handleSubmit=async(e)=>{
      e.preventDefault();
      dispatch(booking({name,email,checkin,checkout,room,userid,request,person,price}));
      history(`/userdetails`);
    }
  return (
    <>
<div className="container-xxl bg-white p-0">
<div className="container-fluid page-header mb-5 p-0" style={{backgroundImage: 'url(/img/carousel-1.jpg)'}}>
  <div className="container-fluid page-header-inner py-5">
    <div className="container text-center pb-5">
      <h1 className="display-3 text-white mb-3 animated slideInDown">Booking</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb justify-content-center text-uppercase">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item"><a href="#">Pages</a></li>
          <li className="breadcrumb-item text-white active" aria-current="page">Booking</li>
        </ol>
      </nav>
    </div>
  </div>
</div>

<div className="container-xxl py-5">
  <div className="container">
    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
      <h6 className="section-title text-center text-primary text-uppercase">Room Booking</h6>
      <h1 className="mb-5">Book <span className="text-primary text-uppercase">{room_details?.data?.result.name}</span></h1>
    </div>
    <div className="row g-5">
      <div className="col-lg-6">
        <div className="row g-3">
          <div className="col-6 text-end">
            <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.1s" src="/img/about-1.jpg" style={{marginTop: '25%'}} />
          </div>
          <div className="col-6 text-start">
            <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.3s" src="/img/about-2.jpg" />
          </div>
          <div className="col-6 text-end">
            <img className="img-fluid rounded w-50 wow zoomIn" data-wow-delay="0.5s" src="/img/about-3.jpg" />
          </div>
          <div className="col-6 text-start">
            <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.7s" src="/img/about-4.jpg" />
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="wow fadeInUp" data-wow-delay="0.2s">
          <form onSubmit={(e)=>handleSubmit(e)}>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="form-floating">
                  <input type="text" className="form-control"  value={name} readOnly/>
                  <label htmlFor="name">Your Name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input type="email" className="form-control"  value={email} readOnly/>
                  <label htmlFor="email">Your Email</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating date" id="date3" data-target-input="nearest">
                  <input  className="form-control datetimepicker-input" name="checkin" placeholder="Check In"  onChange={(e)=>setCheckin(e.target.value)} type="datetime-local"/>
                  <label htmlFor="checkin">Check In</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating date" id="date4" data-target-input="nearest">
                  <input type="datetime-local" className="form-control datetimepicker-input" name="checkout" placeholder="Check Out"  onChange={(e)=>setCheckout(e.target.value)}/>
                  <label htmlFor="checkout">Check Out</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating date" id="date4" data-target-input="nearest">
                <select className="form-control mb-2"
                            name="person"
                            value={person}
                            onChange={(e)=>setPerson(e.target.value)}>
                                <option value="" >Select Persons</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                            <p class="help-block text-danger"></p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating date" id="date4" data-target-input="nearest">
                <input type="text" value={price} className="form-control" name="price" readOnly placeholder="Price"/>
                <p class="help-block text-danger"></p>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea className="form-control" placeholder="Special Request" name="request" style={{height: 100}} defaultValue={""} onChange={(e)=>setRequest(e.target.value)}/>
                  <label htmlFor="message">Special Request</label>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-primary w-100 py-3" type="submit">Book Now</button>
              </div>
            </div>
          </form>
        </div>
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
                  <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
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

export default BookingFrom