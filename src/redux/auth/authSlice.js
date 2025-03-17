import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import API_BASE_URL from "../../config/apiConfig";
import { jwtDecode } from "jwt-decode";


const initialState = {
  screen: {
    isBusy: false,
    error: null,
    success: null,
    updateSuccess: false
  },
  data: {
    mobileNumber: null,
    OTP: null,
    token: null,
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setBusy: (state, action) => {
      state.screen.isBusy = action.payload;
    },
    setError: (state, action) => {
      state.screen.error = action.payload
    },
    setSuccess: (state, action) => {
      state.screen.success = action.payload
    },
    setMobileNumber: (state, action) => {
      state.data.mobileNumber = action.payload
    },
    setOTP: (state, action) => {
      state.data.OTP = action.payload
    },
    setToken: (state, action) => {
      state.data.token = action.payload
    },
    setUpdateSuccess: (state, action) => {
      state.screen.updateSuccess = action.payload
    }

  }
});
export const {
  setBusy,
  setError,
  setSuccess,
  setMobileNumber,
  setOTP,
  setToken,
  setUpdateSuccess,
} = authSlice.actions;
export const sendOTP = (mobile_number) => async (dispatch) => {

  try {
    dispatch(setBusy(true));
    dispatch(setError(null));
    dispatch(setSuccess(null));
    dispatch(setUpdateSuccess(false))
    const response = await axios.post(`${API_BASE_URL}/auth/sendOtp`, { mobile_number })
    console.log(response.data);
    if (response.status == 200 || response.status == 201) {
      localStorage.removeItem('role')
      dispatch(setMobileNumber(mobile_number));
      dispatch(setOTP(response.data.otp));
      dispatch(setSuccess("OTP sent successfully"));
    }
    else {
      dispatch(setError(response.data.message));
    }
  } catch (error) {
    dispatch(setError(error.response?.data?.message || 'Failed to send OTP'));
  }
  finally {
    dispatch(setBusy(true));
  }

}
export const verifyOTP = (mobile_number, otp) => async (dispatch) => {
  try {
    dispatch(setBusy(true));
    dispatch(setError(null));
    dispatch(setSuccess(null));
    const response = await axios.post(`${API_BASE_URL}/auth/verifyOtp`, { mobile_number, otp })

    if (response.status == 200 || response.status == 201) {
      localStorage.setItem('token', response.data.data.token);
      dispatch(setToken(response.data.token));
      dispatch(setSuccess('Verified Successfully'));
      dispatch(setUpdateSuccess(true))
      try {
        const decodedToken = jwtDecode(response.data.data.token);
        localStorage.setItem("role", decodedToken.role);
        // Display relevant information
        // alert(`Welcome, ${decodedToken.username || decodedToken.name || "User"}`);
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    }
    else {
      dispatch(setError(response.data.message));
    }
  } catch (error) {
    dispatch(setError(error.response?.data?.message || 'Failed to send OTP'));
  }
  finally {
    dispatch(setBusy(true));
    // dispatch(setUpdateSuccess(false));
  }

}