import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Api/Axiosinstance";
import { toast } from "react-toastify";





export const commentCreate = createAsyncThunk('commentcreate', async (data) => {
    
        const response = await axiosInstance.post(`comment`,data)
        return response?.data;
})



export const CommentCreateSlice=createSlice({
    name:"usercommentcreation",
    initialState:{
       UserComment:{},
       loading:false,
       redirectReg: null
    },
    reducers:{
 
    },
    extraReducers:{
       [commentCreate.pending]:(state)=>{
          state.loading=true
       },
       [commentCreate.fulfilled]:(state,action)=>{
          
             // state.UserData.push(action.payload);
            //  localStorage.setItem("name", action?.payload?.user?.name)
             // localStorage.setItem("email", action.payload.data.email)
             // localStorage.setItem("mobile", action.payload.data.phone)
             // state.redirectReg = '/'
             toast(action?.payload?.message);
         
       },
       [commentCreate.rejected]: (state,action) => {
          state.loading = false
          // state.error = action.payload;
          // console.log('kk',state.error);
          toast("Already Commented!");
      }
 
    }
 })
 