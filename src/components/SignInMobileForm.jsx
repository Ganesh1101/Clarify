import React, { useState } from "react";

const SignInMobileForm = () => {
  const [formData, setFormData] = useState({
    mobileNumber: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div className="signin-form" style={{ minHeight: "300px" }}>
      <h2>Hello !</h2>
      <p className="signin-subtext">Sign in to your account</p>
      <form onSubmit={handleSubmit}>

        <label className="login-label">Mobile Number</label>
        <div className="mobile-input-container">
          <div className="country-code">+91</div>
          <input
            type="text"
            value={formData.mobileNumber}
            onChange={handleChange}
            className="mobile-input"
          />
        </div>

        {/* Remember Me & Forgot Password */}
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

        {/* Sign In Button */}
        <button type="submit" className="signin-btn">
          Get OTP
        </button>

        <p className="or-text">or</p>

        {/* Login with Phone Number */}
        <a href="/login-phone" className="login-phone">
          Sign in with Credentials
        </a>
      </form>
    </div>
  );
};

export default SignInMobileForm;
