import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AuthLayout from "../components/authLayout";
import OTPForm from "../components/otpContainer";


const Verification = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const mobileNumber = location.state?.mobileNumber || "Unknown";
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(false);

  return (
    <AuthLayout>
      <OTPForm
        heading="Verification"
        mobileNumber={mobileNumber}
        next="/"
      />
    </AuthLayout>
  );
};

export default Verification;
