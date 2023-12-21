import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Api/Axiosinstance";
import { toast } from "react-toastify";





export const ContactUs= createAsyncThunk('contactus', async (data) => {
    
        const response = await axiosInstance.post(`contact`,data)
        return response?.data;
})



export const ContactUsSlice=createSlice({
    name:"usercontact",
    initialState:{
       UserContact:{},
       loading:false,
       redirectReg: null
    },
    reducers:{
 
    },
    extraReducers:{
       [ContactUs.pending]:(state)=>{
          state.loading=true
       },
       [ContactUs.fulfilled]:(state,action)=>{
          
             // state.UserData.push(action.payload);
            //  localStorage.setItem("name", action?.payload?.user?.name)
             // localStorage.setItem("email", action.payload.data.email)
             // localStorage.setItem("mobile", action.payload.data.phone)
             // state.redirectReg = '/'
             toast(action?.payload?.message);
         
       },
       [ContactUs.rejected]: (state,action) => {
          state.loading = false
          // state.error = action.payload;
          // console.log('kk',state.error);
          toast("Already Commented!");
      }
 
    }
 })
 