import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import axiosInstance from "../Api/Axiosinstance";




export const FetchAllRooms = createAsyncThunk('fetchallrooms', async (id) => {
    try {
        const res = await axiosInstance.get(`roomsbycategory/${id.id}`)
        return res

    } catch (error) {
        console.log(error);
    }
})

const initialState = {
    all_rooms: [],
    status: "success"
}

export const FetchAllRoomsSlice = createSlice({
    name: "roombycategory",
    initialState,
    reducers: {

    },
    extraReducers: {
        [FetchAllRooms.pending]: (state) => {
            state.status = "loading..."
            state.all_rooms = null
        },
        [FetchAllRooms.fulfilled]: (state, { payload }) => {
            state.status = "success"
            state.all_rooms = payload
        },
        [FetchAllRooms.rejected]: (state) => {
            state.status = "Try Again"
        }
    }
})