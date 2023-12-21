import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


import axiosInstance from "../Api/Axiosinstance";
import { toast } from "react-toastify";




export const FetchBlogComments = createAsyncThunk('fetchblogcomments', async (id) => {
    try {
        const res = await axiosInstance.get(`commentsbyid/${id.id}`)
        return res;

    } catch (error) {
        console.log(error);
    }
})


const initialState = {
    blog_comments: [],
    status: "success"
}

export const FetchBlogCommentsSlice = createSlice({
    name: "blogcomments",
    initialState,
    reducers: {

    },
    extraReducers: {
        [FetchBlogComments.pending]: (state) => {
            state.status = "loading..."
            state.blog_comments = null
        },
        [FetchBlogComments.fulfilled]: (state, { payload }) => {
            state.status = "success"
            state.blog_comments = payload
        },
        [FetchBlogComments.rejected]: (state) => {
            state.status = "Try Again"
        }
    }
})