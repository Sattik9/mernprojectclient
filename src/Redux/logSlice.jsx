import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Api/Axiosinstance";
import { toast } from "react-toastify";


export const login=createAsyncThunk("login",async(data)=>{
   const response=await axiosInstance.post("login",data);
   return response;
})


export const LogSlice=createSlice({
   name:"userlogin",
   initialState:{
      userlogin:{},
      loading:false,
      redirectReg: null,
      LogoutToggle:false
      
   },
   reducers:{
      check_token: (state, { payload }) => {
         let token = localStorage.getItem("token");
         if (token !== null && token !== undefined) {
           state.LogoutToggle = true;
         }
       },
       logoutd: (state, { payload }) => {
         localStorage.removeItem("token");
         localStorage.removeItem("name");
         toast("logout successfully")
         state.LogoutToggle = false
   
       },
       RegLog: (state, { payload }) => {
         localStorage.removeItem("name");
         state.LogoutToggle = false
   
       },
   
       redirectToo: (state, { payload }) => {
         state.redirectToo = payload
       },

   },
   extraReducers:{
      [login.pending]:(state)=>{
         state.loading=true
      },
      [login.fulfilled]:(state,action)=>{
         if(action.payload.status===200){
            localStorage.setItem("token", action?.payload?.data?.token)
            localStorage.setItem("name", action?.payload?.data?.data?.name)
            localStorage.setItem("email", action?.payload?.data?.data?.email)
            localStorage.setItem("phone", action?.payload?.data?.data?.phone)
            localStorage.setItem("id", action?.payload?.data?.data?._id)
            localStorage.setItem("image", action?.payload?.data?.data?.image);
            state.LogoutToggle=true;
            state.redirectToo="/"
            // localStorage.setItem("email", action.payload.data.email)
            // localStorage.setItem("mobile", action.payload.data.phone)
            // state.redirectReg = '/'
            toast(action?.payload?.data?.message);
         }
            // state.userlogin.push(action.payload);
            
        
      },
      [login.rejected]: (state,action) => {
         state.loading = false
         state.error = action.payload;
         console.log('kk',state.error);
         toast("Wrong Email or Password!");
     }

   }
})

export const {check_token,logoutd,RegLog,redirectToo}=LogSlice.actions;
