import React from "react";
import AuthLayout from "../components/authLayout";
import SignInForm from "../components/SignInForm";
import OTPForm from "../components/otpContainer";

const Verification= () => {
    const handleVerify = (otp) => {
        console.log("Entered OTP:", otp);
      };
    
      const handleResend = () => {
        console.log("Resend OTP clicked!");
      };
  return (
    <AuthLayout>
      <OTPForm heading={"Verification"}  onVerify={handleVerify} onResend={handleResend} />
    </AuthLayout>
  );
};

export default Verification;
