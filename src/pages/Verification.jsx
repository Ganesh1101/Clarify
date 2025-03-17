import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AuthLayout from "../components/authLayout";
import OTPForm from "../components/otpContainer";
import { verifyOTP,sendOTP } from "../redux/auth/authSlice";

const Verification = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const mobileNumber = location.state?.mobileNumber || "Unknown";
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(false);


  const handleVerify = async (otp) => {
    setSubmitted(true);
    setError("");

    if (otp.length < 6) {
      setError("Please enter a valid 6-digit OTP.");
      return;
    }

    setLoading(true);
    try {
      const result = await dispatch(verifyOTP(mobileNumber, otp));

      if (result.success) {
        navigate("/dashboard"); // Redirect to dashboard after successful verification
      } else {
        setError(result.error || "Invalid OTP. Please try again.");
      }
    } catch (error) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async() => {
     try {
          const result = await dispatch(sendOTP(`+91${mobileNumber}`));
    
          if (!result.success) {
            setError(result.error || "Failed to send OTP");
          }else {
            setTimer(true);
          }
        } catch (error) {
          setError("An unexpected error occurred. Please try again.");
        } finally {
          setLoading(false);
        }
    console.log("Resend OTP clicked!");
    setError(""); // Clear error when resending OTP
  };

  return (
    <AuthLayout>
      <OTPForm
        heading="Verification"
        mobileNumber={mobileNumber}
      />
    </AuthLayout>
  );
};

export default Verification;
