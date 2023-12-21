import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Api/Axiosinstance";
import { toast } from "react-toastify";


export const booking=createAsyncThunk("booking",async(data)=>{
   const response=await axiosInstance.post("book",data);
   return response?.data;
})


export const BookingSlice=createSlice({
   name:"userbooking",
   initialState:{
    userbooking:{},
      loading:false,
      redirectReg: null
   },
   reducers:{
      
   },
   extraReducers:{
      [booking.pending]:(state)=>{
         state.loading=true
      },
      [booking.fulfilled]:(state,action)=>{
         
            // state.userlogin.push(action.payload);
            
            // localStorage.setItem("email", action.payload.data.email)
            // localStorage.setItem("mobile", action.payload.data.phone)
            // state.redirectReg = '/'
            toast(action?.payload?.message);
        
      },
      [booking.rejected]: (state,action) => {
         state.loading = false
         state.error = action.payload;
         console.log('kk',state.error);
         toast("Already booked!");
     }

   }
})
