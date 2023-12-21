import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


import axiosInstance from "../Api/Axiosinstance";
import { toast } from "react-toastify";




export const FetchBookingDetails = createAsyncThunk('fetchbookingdetails', async (id) => {
    try {
        const res = await axiosInstance.get(`bookings/${id}`);
        return res;

    } catch (error) {
        console.log(error);
    }
})
 


const initialState = {
    booking_details: [],
    status: "success"
}

export const FetchBookingDetailsSlice = createSlice({
    name: "bookingdetails",
    initialState,
    reducers: {

    },
    extraReducers: {
        [FetchBookingDetails.pending]: (state) => {
            state.status = "loading..."
            state.booking_details = null
        },
        [FetchBookingDetails.fulfilled]: (state, { payload }) => {
            state.status = "success"
            state.booking_details = payload
        },
        [FetchBookingDetails.rejected]: (state) => {
            state.status = "Try Again"
        }
    }
})