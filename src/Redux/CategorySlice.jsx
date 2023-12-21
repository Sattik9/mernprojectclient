import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Api/Axiosinstance";




export const FetchAllCategory = createAsyncThunk('fetchallcategory', async () => {
    try {
        const res = await axiosInstance.get('allcategory')
        return res

    } catch (error) {
        console.log(error);
    }
})

const initialState = {
    all_data: [],
    status: "success"
}

export const CategorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {

    },
    extraReducers: {
        [FetchAllCategory.pending]: (state) => {
            state.status = "loading..."
            state.all_data = null
        },
        [FetchAllCategory.fulfilled]: (state, { payload }) => {
            state.status = "success"
            state.all_data = payload
        },
        [FetchAllCategory.rejected]: (state) => {
            state.status = "Try Again"
        }
    }
})