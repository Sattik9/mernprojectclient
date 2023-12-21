import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


import axiosInstance from "../Api/Axiosinstance";
import { toast } from "react-toastify";




export const FetchBlogDetails = createAsyncThunk('fetchblogdetails', async (id) => {
    try {
        const res = await axiosInstance.get(`blog/${id.id}`)
        return res;

    } catch (error) {
        console.log(error);
    }
})
 


const initialState = {
    blog_details: [],
    status: "success"
}

export const FetchBlogDetailsSlice = createSlice({
    name: "blogdetails",
    initialState,
    reducers: {

    },
    extraReducers: {
        [FetchBlogDetails.pending]: (state) => {
            state.status = "loading..."
            state.blog_details = null
        },
        [FetchBlogDetails.fulfilled]: (state, { payload }) => {
            state.status = "success"
            state.blog_details = payload
        },
        [FetchBlogDetails.rejected]: (state) => {
            state.status = "Try Again"
        }
    }
})