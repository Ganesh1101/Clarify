import React,{useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AuthLayout from "../components/authLayout";
import OTPForm from "../components/otpContainer";

const ResetPasswordVerification= () => {
  const location = useLocation();
  const mobileNumber = location.state?.mobileNumber || "Unknown";
  return (
    <AuthLayout>
      <OTPForm 
      heading="Forgot Password Verification"
      mobileNumber={mobileNumber}  
      />
    </AuthLayout>
  );
};

export default ResetPasswordVerification;
