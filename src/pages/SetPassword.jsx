import React from "react";
import AuthLayout from "../components/authLayout";
import SetPasswordForm from "../components/SetPasswordForm"
import { useLocation } from "react-router-dom";

const SetPassword= () => {
  const location = useLocation();
  const mobileNumber = location.state?.mobileNumber || "Unknown";
  console.log(mobileNumber);
  return (
    <AuthLayout>
        <SetPasswordForm mobileNumber={mobileNumber}/>
    </AuthLayout>
  );
};

export default SetPassword;
