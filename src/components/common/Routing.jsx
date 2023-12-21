import React, { useEffect } from 'react'
import { BrowserRouter as Router,Routes,Route, Navigate } from 'react-router-dom'
import Navbar from './Navbar'
import RoomCategory from '../RoomCategory'
import Rooms from '../Rooms'
import Home from '../Home'
import About from '../About'
import Services from '../Services'
import RoomDetails from '../RoomDetails'
import Blog from '../Blog'
import BlogDetails from '../BlogDetails'
import Register from '../Register'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Login from '../Login'

import Contact from '../Contact'
import BookingFrom from '../BookingFrom'
import UserDetails from '../UserDetails'

import { useDispatch, useSelector } from 'react-redux'
import { check_token } from '../../Redux/AuthSlice'
const Routing = () => {
  // const {redirectToo}=useSelector((state)=>state.auth);
  
  function PrivateRoute({children}){
    const tokens=localStorage.getItem('token')
    return tokens !==null && tokens !==undefined ?(
      children
    ):(
      <Navigate to='/login'/>
    )
  }
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(check_token());
   },[])
   
  const publicRouting=[
    {
      path:'/register',
      Component:<Register/>
    },
    {
      path:'/login',
      Component:<Login/>
    },
    {
      path:'/',
      Component:<Home/>
    },
    {
      path:'/about',
      Component:<About/>
    },
    {
      path:'/services',
      Component:<Services/>
    },
    {
      path:'/category',
      Component:<RoomCategory/>
    },
    {
      path:'/roombycategory/:id',
      Component:<Rooms/>
    },
    {
      path:'/blogs',
      Component:<Blog/>
    },
    {
      path:'/register',
      Component:<Register/>
    },
    {
      path:'/login',
      Component:<Login/>
    },
    {
      path:'/contact',
      Component:<Contact/>
    },
  ]

  const privateRouting=[
    {
      path:'/roomdetails/:id',
      Component:<RoomDetails/>
    },
    {
      path:'/blogdetails/:id',
      Component:<BlogDetails/>
    },
    {
      path:'/booking/:id',
      Component:<BookingFrom/>
    },
    {
      path:'/userdetails',
      Component:<UserDetails/>
    }
  ]

  return (
    <>
    <ToastContainer/>
    <Router>
    <Navbar/>
    <Routes>
            {
              publicRouting?.map((route,index)=>{
                return(
                  <>
                  <Route
                  Key={index+1}
                  exact
                  path={route?.path}
                  element={route?.Component}
                  />
                  </>
                )
              })
            }
            {
              privateRouting?.map((proute,index)=>{
                return(
                  <>
                  <Route 
                  path={proute?.path}
                  element={<PrivateRoute>{proute?.Component}</PrivateRoute>}
                  />
                  </>
                )
              })
            }
        </Routes>
        </Router>
    </>
  )
}

export default Routing