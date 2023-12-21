import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import axiosInstance from "../Api/Axiosinstance";
import { toast } from "react-toastify";






export const FetchRoomReviews = createAsyncThunk('fetchroomreviews', async (id) => {
    try {
        const res = await axiosInstance.get(`reviewofrooms/${id.id}`)
        return res

    } catch (error) {
        console.log(error);
    }
})

const initialState = {
    room_reviews: [],
    status: "success"
}

export const FetchRoomReviewsSlice = createSlice({
    name: "roomsreview",
    initialState,
    reducers: {

    },
    extraReducers: {
        [FetchRoomReviews.pending]: (state) => {
            state.status = "loading..."
            state.room_reviews = null
        },
        [FetchRoomReviews.fulfilled]: (state, { payload }) => {
            state.status = "success"
            state.room_reviews = payload
        },
        [FetchRoomReviews.rejected]: (state) => {
            state.status = "Try Again"
        }
    }
})