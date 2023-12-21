import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { logout } from '../../Redux/AuthSlice';


const Navbar = () => {
  const {Logouttoggle}=useSelector((state)=>state.auth);
  const token = localStorage.getItem("token");
  const name = localStorage.getItem("name");
  
  const dispatch=useDispatch();
  
  let history = useNavigate();
  const log = (e) => {
    e.preventDefault();
    dispatch(logout());
    history("/login");
   
    // localStorage.removeItem("name");
    // localStorage.removeItem("email");
    // localStorage.removeItem("id");
    // localStorage.removeItem("image");



  }

  console.log(Logouttoggle,"hhkj");
  return (
    <>
      <div className="container-xxl bg-white p-0">
        <div className="container-fluid bg-dark px-0">
          <div className="row gx-0">
            <div className="col-lg-3 bg-dark d-none d-lg-block">
              <a href="#" className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                <h1 className="m-0 text-primary text-uppercase">Olympus</h1>
              </a>
            </div>
            <div className="col-lg-9">
              <div className="row gx-0 bg-white d-none d-lg-flex">
                <div className="col-lg-7 px-5 text-start">
                  <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                    <i className="fa fa-envelope text-primary me-2" />
                    <p className="mb-0">info@example.com</p>
                  </div>
                  <div className="h-100 d-inline-flex align-items-center py-2">
                    <i className="fa fa-phone-alt text-primary me-2" />
                    <p className="mb-0">+012 345 6789</p>
                  </div>
                </div>
                <div className="col-lg-5 px-5 text-end">
                  <div className="d-inline-flex align-items-center py-2">
                    <a className="me-3" href><i className="fab fa-facebook-f" /></a>
                    <a className="me-3" href><i className="fab fa-twitter" /></a>
                    <a className="me-3" href><i className="fab fa-linkedin-in" /></a>
                    <a className="me-3" href><i className="fab fa-instagram" /></a>
                    <a className href><i className="fab fa-youtube" /></a>
                  </div>
                </div>
              </div>
              <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
                <a href="#" className="navbar-brand d-block d-lg-none">
                  <h1 className="m-0 text-primary text-uppercase">Olympus</h1>
                </a>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                  <div className="navbar-nav mr-auto py-0">
                    <Link to={`/`} className="nav-item nav-link active">Home</Link>
                    <Link to={`/about`} className="nav-item nav-link">About</Link>
                    <Link to={`/services`} className="nav-item nav-link">Services</Link>
                    <Link to={`/category`} className="nav-item nav-link">Room Category</Link>
                    <Link to="/blogs" className="nav-item nav-link">Blogs</Link>
                    <Link to="/contact" className="nav-item nav-link">Contact</Link>
                    {Logouttoggle?
                      
                          <div className="nav-item dropdown" style={{ marginLeft: "250px" }}>
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Hello User!</a>
                        <div className="dropdown-menu rounded-0 m-0">
                          <Link to="/userdetails" className="dropdown-item" >{name}</Link>
                          <Link onClick={(e) => log(e)} className="dropdown-item">LogOut</Link>
                        </div>
                      </div>
                        

                      
                      :
                      <Link to="/login" className="nav-item nav-link" style={{ marginLeft: "300px" }}>Login</Link>
                    
                    }
                  </div>


                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Navbar







