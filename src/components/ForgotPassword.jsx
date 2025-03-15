import React, { useState } from "react";

const ForgotPasswordForm = ({ onVerify, heading }) => {
    const [mobileNumber, setMobileNumber] = useState("");

    const handleChange = (event) => {
        const value = event.target.value;
        if (/^\d{0,10}$/.test(value)) {
            setMobileNumber(value);
        }
    };

    const handleVerify = () => {
        onVerify(mobileNumber);
    };

    return (
        <div className="otp-container">
            {/* Back Button and Heading */}
            <div className="otp-header">
                <img src={require("../assets/Images/Ic_back.png")} alt="Back" className="otp-back-icon" />
                <h2 className="otp-title">Forgot Password</h2>

            </div>

            {/* Mobile Number Input */}
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

            {/* Reset Button */}
            <button className="otp-button" onClick={handleVerify}>
                Reset with Mobile Number
            </button>
        </div>
    );
};

export default ForgotPasswordForm;
