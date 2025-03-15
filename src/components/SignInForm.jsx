import React, { useState } from "react";

const SignInForm = () => {
  const [formData, setFormData] = useState({
    companyId: "",
    email: "",
    password: "",
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
    <div className="signin-form">
      <h2>Hello !</h2>
      <p className="signin-subtext">Sign in to your account</p>
      <form onSubmit={handleSubmit}>

        {/* Company ID */}
        <div className="input-group">
          <label htmlFor="companyId">Company ID</label>
          <input
            type="text"
            id="companyId"
            name="companyId"
            value={formData.companyId}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email Address */}
        <div className="input-group">
          <label htmlFor="email">E-Mail Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password */}
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
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
          Sign In
        </button>

        <p className="or-text">or</p>

        {/* Login with Phone Number */}
        <a href="/login-phone" className="login-phone">
          Login with Phone Number
        </a>
      </form>
    </div>
  );
};

export default SignInForm;
