import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';


import { FetchBlogDetails} from '../Redux/BlogDetailsSlice';
import { useNavigate, useParams } from 'react-router-dom';

import { FetchBlogComments } from '../Redux/CommentSlice';
import { commentCreate } from '../Redux/CommentCreateSlice';
import { imageurl } from '../Api/imageurl';


const BlogDetails = () => {
  const { blog_details } = useSelector((state) => state?.blogdetails);
  const {blog_comments}=useSelector((state) => state?.comments);
  const dispatch = useDispatch();
  console.log("==>name",blog_details?.data?.result?.title);
  console.log(blog_comments?.data?.result);
  const id = useParams()

  useEffect(() => {
    dispatch(FetchBlogDetails(id));
    dispatch(FetchBlogComments(id));
  }, [id])

  // const [user, setUser] = useState();
  // const[blog,setBlog]=useState();
  const [review, setReview] = useState();
  const blog = blog_details?.data?.result._id;
  const user=localStorage.getItem("id");
  let history = useNavigate();

  // const commentCreate = async (e) => {
  //   e.preventDefault();
  //   console.log(blog);
  //   try {
  //     const response = await axiosInstance.post('comment', { user, blog, review });
  //     toast(response?.data.message);
  //     history(`/blogdetails/${blog_details?.data?.result._id}`)
  //   } catch (error) {
  //     toast(error?.response?.data?.message)
  //     history(`/blogdetails/${blog_details?.data?.result._id}`);
  //   }
  // }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    dispatch(commentCreate({user,blog,review}));
    history(`/blogs`);
  }


  return (
    <>
    <div className="container-xxl bg-white p-0">
    <div className="container-xxl  p-0">
      <div className="container-fluid py-5">

        <div className="container py-5">
          <div className="row">
            <div className="pb-3">
              <div className="room-item shadow rounded overflow-hidden" style={{ padding: 30 }}>
                <img className="img-fluid w-100" src={`${imageurl}${blog_details?.data?.result?.image}`} alt/>
               
                <h2 className="mb-3">{blog_details?.data?.result?.title}</h2>
                <p>{blog_details?.data?.result?.content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>

        <div className="room-item shadow rounded overflow-hidden" style={{padding: 30, marginBottom: 30,width: "1000px", marginLeft: "250px"}}>
  <h4 className="text-uppercase mb-4" style={{letterSpacing: 5}}>Comments</h4>
  <div className="media mb-4">
    {blog_comments?.data?.result.map((item,index)=>{
      return(
        <>
         <div className="media-body">
        <h6><a href="">{item.user.name}</a></h6>
         <p>{item.review}</p>
         </div>
        </>
      )
    })}
    
  </div>
</div>



        <div className="room-item shadow rounded overflow-hidden" style={{ padding: 30, width: "1000px", marginLeft: "250px" }}>
          <h4 className="text-uppercase mb-4" style={{ letterSpacing: 5 }}>Leave a comment</h4>
          <h1></h1>
          <form onSubmit={(e) =>handleSubmit(e)} >

            {/* <div className="form-group">
              <input type="text" className="form-control" name="user" onChange={(e) => setUser(e.target.value)} />
            </div> */}
            
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea name="review" cols={30} rows={5} className="form-control" onChange={(e) => setReview(e.target.value)} required />
            </div>
            <div className="form-group mb-0" style={{ marginTop: "20px" }}>
              <input type="submit" defaultValue="Leave a comment" className="btn btn-primary font-weight-semi-bold py-2 px-3" />
            </div>
          </form>
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
</div>
</div>

    </>
  )
}

export default BlogDetails