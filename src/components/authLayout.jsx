import React from "react";
import "../assets/Styles/styles.css";
import SignInImage from "../assets/Images/AuthBg.png"; // Ensure correct path

const AuthLayout = ({ children }) => {
  return (
    <div className="signin-container">
      {/* Left Side Image */}
      <div className="image-container">
        <img src={SignInImage} alt="Auth Illustration" />
      </div>

      {/* Right Side Form (Dynamic Content) */}
      <div className="signin-form-wrapper">{children}</div>
    </div>
  );
};

export default AuthLayout;
