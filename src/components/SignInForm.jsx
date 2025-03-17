import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../redux/auth/authSlice";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {  token } = useSelector((state) => state?.auth?.data);
  const {  error } = useSelector((state) => state?.auth?.screen); // Get auth state
  console.log(token);
  const [formData, setFormData] = useState({
    company_id: "",
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
    const { company_id, email, password } = formData;
    dispatch(signIn(company_id, email, password));
  };

  // Navigate to home page if login is successful
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <div className="signin-form">
      <h2>Hello !</h2>
      <p className="signin-subtext">Sign in to your account</p>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="company_id">Company ID</label>
          <input
            type="text"
            id="company_id"
            name="company_id"
            value={formData.company_id}
            onChange={handleChange}
            required
          />
        </div>

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

        {error && <p className="error-text">{error}</p>}

        <button type="submit" className="signin-btn">
          Sign In
        </button>

        <p className="or-text">or</p>

        <a href="/signInMobile" className="login-phone" >
          Login with Phone Number
        </a>
      </form>
    </div>
  );
};

export default SignInForm;
