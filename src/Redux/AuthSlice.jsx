import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../Api/Axiosinstance'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const initialState = {
  loading: false,
  user: {}, // for user object
  redirectTo: null,
  Logouttoggle: false,
  userName: false,
  redirectReg: null
}

export const registerUser = createAsyncThunk("/signup", async (user) => {
  try {
    const ress = await axiosInstance.post("createuser", user,{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    return ress?.data;

  } catch (error) {
    toast(error?.response?.data?.message);
    console.log(error);
  }
});

export const loginRequest = createAsyncThunk("login", async (user) => {
  try {
    const res = await axiosInstance.post("login", user);
    return res;
  } catch (error) {
    toast(error?.response?.data?.message);
    console.log(error);
  }
});

export const AuthSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    //check for auth token 
    check_token: (state, { payload }) => {
      let token = localStorage.getItem("token");
      if (token !== null && token !== undefined) {
        state.Logouttoggle = true;
      }
    },

    logout: (state, { payload }) => {
      localStorage.removeItem("token");
      localStorage.removeItem("name");
      localStorage.removeItem("email");
      localStorage.removeItem("id");
      localStorage.removeItem("image");
      localStorage.removeItem("phone");
      toast("logout successfully",{
        position: toast.POSITION.TOP_CENTER
      })
      state.Logouttoggle = false

    },

    
    RegLog: (state, { payload }) => {
      localStorage.removeItem("name");
      state.Logouttoggle = false

    },

    redirectToo: (state, { payload }) => {
      state.redirectTo = payload
    },

    redirectTo_Register: (state, { payload }) => {
      state.redirectReg = payload
    }


  },

  extraReducers: {
    [registerUser.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [registerUser.fulfilled]: (state, { payload }) => {

      if (payload?.success === true) {
        localStorage.setItem("name", payload?.user?.name)
        state.redirectReg = "/login"
        //toast(payload?.token)
        toast(payload?.message);
      }

    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },

    //login
    [loginRequest.pending]: (state, action) => {
      state.loading = true;
    },
    [loginRequest.fulfilled]: (state,{payload}) => {
      if (payload?.status == 200) {
        localStorage.setItem("token", payload?.data?.token);
        localStorage.setItem("name", payload?.data?.data?.name);
        localStorage.setItem("email", payload?.data?.data?.email);
        localStorage.setItem("id", payload?.data?.data?._id);
        localStorage.setItem("image", payload?.data?.data?.image);
        localStorage.setItem("phone", payload?.data?.data?.phone);
        state.Logouttoggle = true
        state.redirectTo = "/"
        toast(payload?.data?.message,{
          position: toast.POSITION.TOP_CENTER
        });
      }

    },
    [loginRequest.rejected]: (state, action) => {
      state.loading = false;

    },
  },
})

export const {check_token, redirectToo, logout, redirectTo_Register,RegLog } = AuthSlice.actions

