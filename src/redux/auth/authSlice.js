import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import API_BASE_URL from "../../config/apiConfig";
import { jwtDecode } from "jwt-decode";

const initialState = {
  screen: {
    isBusy: false,
    error: null,
    success: null,
    updateSuccess: false,
  },
  data: {
    mobileNumber: null,
    OTP: null,
    token: null,
    email: null,
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setBusy: (state, action) => { state.screen.isBusy = action.payload; },
    setError: (state, action) => { state.screen.error = action.payload; },
    setSuccess: (state, action) => { state.screen.success = action.payload; },
    setMobileNumber: (state, action) => { state.data.mobileNumber = action.payload; },
    setOTP: (state, action) => { state.data.OTP = action.payload; },
    setToken: (state, action) => { state.data.token = action.payload; },
    setUpdateSuccess: (state, action) => { state.screen.updateSuccess = action.payload; },
    setEmail: (state, action) => { state.data.email = action.payload; },
  },
});

export const { setBusy, setError, setSuccess, setMobileNumber, setOTP, setToken, setUpdateSuccess, setEmail } = authSlice.actions;

export const sendOTP = (mobile_number) => async (dispatch) => {
  try {
    dispatch(setBusy(true));
    dispatch(setError(null));
    dispatch(setSuccess(null));

    const response = await axios.post(`${API_BASE_URL}/auth/sendOtp`, { mobile_number });
    console.log(response.data.data);
    if (response.status === 200 || response.status === 201) {
      dispatch(setMobileNumber(mobile_number));
      dispatch(setSuccess("OTP sent successfully"));
      return { success: true }; // Return success for handling in handleSubmit
    } else {
      dispatch(setError(response.data.message));
      return { success: false };
    }
  } catch (error) {
    dispatch(setError(error.response?.data?.message || "Failed to send OTP"));
    return { success: false };
  } finally {
    dispatch(setBusy(false));
  }
};


export const verifyOTP = (mobile_number, otp) => async (dispatch) => {
  try {
    dispatch(setBusy(true));
    dispatch(setError(null));
    dispatch(setSuccess(null));
    console.log(mobile_number, otp);

    const response = await axios.post(`${API_BASE_URL}/auth/verifyOtp`, { mobile_number, otp });

    if (response.status === 200 || response.status === 201) {
      localStorage.setItem('token', response.data.data.token);
      dispatch(setToken(response.data.data.token));
      dispatch(setSuccess('Verified Successfully'));
      dispatch(setUpdateSuccess(true));

      try {
        const decodedToken = jwtDecode(response.data.data.token);
        localStorage.setItem("role", decodedToken.role);
      } catch (error) {
        console.error("Error decoding token:", error);
      }

      return { success: true, data: response.data }; // ✅ Return success
    } else {
      dispatch(setError(response.data.message));
      return { success: false, error: response.data.message }; // ✅ Return failure
    }
  } catch (error) {
    console.error("Error decoding token:", error);
    dispatch(setError(error.response?.data?.message || 'Failed to verify OTP'));
    return { success: false, error: error.response?.data?.message || 'Failed to verify OTP' }; // ✅ Handle errors
  } finally {
    dispatch(setBusy(false));
  }
};


export const resetPassword = (mobile_number, newPassword, confirmPassword) => async (dispatch) => {
  console.log(mobile_number,newPassword,confirmPassword);
  try {
    dispatch(setBusy(true));
    dispatch(setError(null));
    dispatch(setSuccess(null));
    if (newPassword !== confirmPassword) {
      dispatch(setError("Passwords do not match"));
      dispatch(setBusy(false));
      return;
    }
    const response = await axios.post(`${API_BASE_URL}/auth/resetPassword`, { mobile_number, newPassword,confirmPassword });

    if (response.status === 200 || response.status === 201) {
      dispatch(setSuccess("Password reset successfully"));
    } else {
      dispatch(setError(response.data.message));
    }
  } catch (error) {
    dispatch(setError(error.response?.data?.message || 'Failed to reset password'));
  } finally {
    dispatch(setBusy(false));
  }
};
export const signIn = (company_id, email, password) => async (dispatch) => {
  try {
    dispatch(setBusy(true));
    dispatch(setError(null));
    dispatch(setSuccess(null));
    const response = await axios.post(`${API_BASE_URL}/auth/signIn`, { company_id, email, password });
    if (response.status === 200 || response.status === 201) {
      console.log(response.data.data);
      const { id, token } = response.data.data;
      localStorage.setItem('token', response.data.data.token);
      dispatch(setToken(token));
      dispatch(setSuccess('Login successful'));
      dispatch(setUpdateSuccess(true));
      try {
        const decodedToken = jwtDecode(token);
        localStorage.setItem("role", decodedToken.role);
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    } else {
      dispatch(setError(response.data.message));
    }
  } catch (error) {
    console.log("Error:", error);
    dispatch(setError(error.response?.data?.message || 'Failed to sign in'));
  } finally {
    dispatch(setBusy(false));
  }
};


export default authSlice.reducer;
