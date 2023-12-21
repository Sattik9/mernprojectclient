import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Api/Axiosinstance";




export const FetchAllBlogs = createAsyncThunk('fetchallblogs', async () => {
    try {
        const res = await axiosInstance.get('allblog')
        return res

    } catch (error) {
        console.log(error);
    }
})

const initialState = {
    all_blogs: [],
    status: "success"
}

export const BlogSlice = createSlice({
    name: "blogs",
    initialState,
    reducers: {

    },
    extraReducers: {
        [FetchAllBlogs.pending]: (state) => {
            state.status = "loading..."
            state.all_blogs = null
        },
        [FetchAllBlogs.fulfilled]: (state, { payload }) => {
            state.status = "success"
            state.all_blogs = payload
        },
        [FetchAllBlogs.rejected]: (state) => {
            state.status = "Try Again"
        }
    }
})