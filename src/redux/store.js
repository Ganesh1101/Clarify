import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { authSlice } from "./auth/authSlice";


// Configure the Redux store
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
   
  },
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
