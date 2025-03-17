import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendOTP } from "../redux/auth/authSlice";
import { useNavigate } from "react-router-dom";

const SignInMobileForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { error } = useSelector((state) => state?.auth?.screen); // Get error from Redux

  const [formData, setFormData] = useState({
    mobileNumber: "",
    rememberMe: false,
  });

  const [localError, setLocalError] = useState(""); // Local validation error
  const [submitted, setSubmitted] = useState(false); // Track form submission
  const [loading, setLoading] = useState(false); // Loading state
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "mobileNumber") {
      if (!/^\d*$/.test(value)) return; // Allow only numbers
      if (value.length > 10) return; // Limit input to 10 digits
    }

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    // If user enters 10 digits, clear any errors
    if (name === "mobileNumber" && value.length === 10) {
      setLocalError("");
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setSubmitted(true); // Mark form as submitted

    const { mobileNumber } = formData;

    if (mobileNumber.length < 10) {
      setLocalError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setLocalError(""); // Clear previous errors
    try {
      const result = await dispatch(sendOTP(`+91${mobileNumber}`));

      if (result.success) {
        navigate("/verify", { state: { mobileNumber: `+91${mobileNumber}` } });
      } else {
        setLocalError(result.error || "Failed to send OTP");
      }
    } catch (error) {
      setLocalError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  
  };

  return (
    <div className="signin-form">
      <h2>Hello !</h2>
      <p className="signin-subtext">Sign in to your account</p>
      <form onSubmit={handleSubmit}>
        <label className="login-label">Mobile Number</label>
        <div className="mobile-input-container">
          <div className="country-code">+91</div>
          <input
            type="text"
            name="mobileNumber"
            id="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            className="mobile-input"
            maxLength="10"
            inputMode="numeric"
            pattern="[0-9]*"
            required
          />
        </div>



        <div className="remember-forgot-container">
          <label className="remember-me">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            Remember Me
          </label>
          <a href="/forgot-password" className="forgot-password">
            Forgot Password?
          </a>
        </div>
        {/* Show validation error only after form submission and if the number is incomplete */}
        {submitted && localError && <p className="error-text">{localError}</p>}

        {/* Show API error from Redux */}
        {/* {error && <p className="error-text">{error}</p>} */}

        <button type="submit" className="signin-btn">
          Get OTP
        </button>

        <p className="or-text">or</p>

        <a href="/login-phone" className="login-phone">
          Sign in with Credentials
        </a>
      </form>
    </div>
  );
};

export default SignInMobileForm;
