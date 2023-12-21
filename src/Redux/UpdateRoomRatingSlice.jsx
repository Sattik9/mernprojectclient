import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Api/Axiosinstance";
import { toast } from "react-toastify";



export const updateRoomRating = createAsyncThunk('reviewcreate', async (data) => {

        const response = await axiosInstance.post(`review`,data)
        return response;
        
})



export const updateRoomRatingSlice=createSlice({
    name:"userreview",
    initialState:{
       userreview:{},
       loading:false,
       redirectReg: null
    },
    reducers:{
 
    },
    extraReducers:{
       [updateRoomRating.pending]:(state)=>{
          state.loading=true
       },
       [updateRoomRating.fulfilled]:(state,action)=>{
          
             // state.userlogin.push(action.payload);
            //  localStorage.setItem("review", action?.payload?.result)
             
             // localStorage.setItem("email", action.payload.data.email)
             // localStorage.setItem("mobile", action.payload.data.phone)
             // state.redirectReg = '/'
            //  toast(action?.payload?.data?.message);
            // toast("reviewed successfully!");
         
       },
       [updateRoomRating.rejected]: (state,action) => {
          state.loading = false
          state.error = action.payload;
          console.log('kk',state.error);
          toast("Already reviewed!");
      }
 
    }
 })