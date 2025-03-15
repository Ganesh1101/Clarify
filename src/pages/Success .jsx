import React from "react";
import AuthLayout from "../components/authLayout";
import SignInForm from "../components/SignInForm";
import OTPForm from "../components/otpContainer";
import SuccessForm from "../components/successForm";

const Success= () => {
    const handleSignIn= (otp) => {
        console.log("Entered OTP:", otp);
      };
    
     
  return (
    <AuthLayout>
    <SuccessForm signIn={handleSignIn} />
    </AuthLayout>
  );
};

export default Success;
