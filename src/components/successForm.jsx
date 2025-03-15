import React from "react";
import "../assets/Styles/styles.css"; // Ensure you have this image in your project

const SuccessForm = ( {signIn}) => {
  return (
  
      <div className="success-card">
        <img src={require("../assets/Images/ic-success.png")} alt="Success" className="success-icon" />
        <h2 className="success-title">Success!</h2>
        <p className="success-message">Your Password Successfully Updated.</p>
        <button className="success-button" onClick={signIn}>Sign In</button>
      </div>
  );
};

export default SuccessForm;
