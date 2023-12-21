import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import axiosInstance from "../Api/Axiosinstance";
import { toast } from "react-toastify";




export const FetchRoomDetails = createAsyncThunk('fetchroomdetails', async (id) => {
    try {
        const res = await axiosInstance.get(`room/${id.id}`)
        return res

    } catch (error) {
        console.log(error);
    }
})


const initialState = {
    room_details: [],
    status: "success"
}

export const FetchRoomDetailsSlice = createSlice({
    name: "rooms",
    initialState,
    reducers: {

    },
    extraReducers: {
        [FetchRoomDetails.pending]: (state) => {
            state.status = "loading..."
            state.room_details = null
        },
        [FetchRoomDetails.fulfilled]: (state, { payload }) => {
            state.status = "success"
            state.room_details = payload
        },
        [FetchRoomDetails.rejected]: (state) => {
            state.status = "Try Again"
        }
    }
})