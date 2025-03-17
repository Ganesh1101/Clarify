import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { forgotPassword } from "../redux/auth/authSlice";

const ForgotPasswordForm = ({ heading }) => {
    const [mobileNumber, setMobileNumber] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isBusy, error, success } = useSelector((state) => state.auth.screen);

    useEffect(() => {
        if (success) {
            navigate("/forgot-password/verification"); // Change this to the desired route
        }
    }, [success, navigate]);

    const handleChange = (event) => {
        const value = event.target.value;
        if (/^\d{0,10}$/.test(value)) {
            setMobileNumber(value);
        }
    };

    const handleVerify = (event) => {
        event.preventDefault(); 
        if (mobileNumber.length !== 10) {
            setErrorMessage("Please enter a valid 10-digit mobile number");
            return;
        }
        setErrorMessage(""); 
        dispatch(forgotPassword(`+91${mobileNumber}`));
    };


    return (
        <form className="signin-form" style={{ minHeight: "180px" }} onSubmit={handleVerify}>
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
                    value={mobileNumber}
                    onChange={handleChange}
                    className="mobile-input"
                    style={{ border: errorMessage ? "1px solid red" : "" }}
                    required
                />

            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}

            {/* Reset Button */}
            <button className="otp-button" type="submit" disabled={isBusy}>
                {isBusy ? "Processing..." : "Reset with Mobile Number"}
            </button>
            {/* Success & Error Messages */}
            {error && <p className="error-message">{error}</p>}
        </form>
    );
};

export default ForgotPasswordForm;
