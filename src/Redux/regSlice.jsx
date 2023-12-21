import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Api/Axiosinstance";
import { toast } from "react-toastify";



export const register=createAsyncThunk("signup",async(data)=>{
   const response=await axiosInstance.post("createuser",data,{
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
   return response?.data;
})


export const RegSlice=createSlice({
   name:"USER",
   initialState:{
      UserData:{},
      loading:false,
      redirectTo: null
   },
   reducers:{
      
   },
   extraReducers:{
      [register.pending]:(state)=>{
         state.loading=true
      },
      [register.fulfilled]:(state,action)=>{
         
            // state.UserData.push(action.payload);
            localStorage.setItem("name", action?.payload?.user?.name)
            // localStorage.setItem("email", action.payload.data.email)
            // localStorage.setItem("mobile", action.payload.data.phone)
            // state.redirectReg = '/login';
           
            toast(action?.payload?.message);
        
      },
      [register.rejected]: (state,action) => {
         state.loading = false
         // state.error = action.payload;
         // console.log('kk',state.error);
         toast("Email Already Exists!");
     }

   }
})



// const RegSlice=createSlice({
//     name:"USER",
//     initialState:{
//         Userdata:[],
//         loading:false
//     },
//     extraReducers:(builder)=>{
//          builder
//          .addCase(register.pending,(state)=>{
//             state.loading=true
//          })
//          .addCase(register.fulfilled,(state,{payload})=>{
//             state.loading=false
//             state.Userdata.push({payload});
//             toast(payload?.data?.message);
//             localStorage.setItem("name",payload?.data?.result?.name);
            
//          })
//          .addCase(register.rejected,(state,{payload})=>{
//             state.loading=false;
//             toast(payload?.data?.message);
//          })
         
         
//     }
// })




