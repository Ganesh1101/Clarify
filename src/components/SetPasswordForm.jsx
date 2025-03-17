import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { resetPassword } from "../redux/auth/authSlice";
import "../assets/Styles/styles.css"; // Import the stylesheet
import { useNavigate } from "react-router-dom";
const SetPasswordForm = (mobileNumber) => {
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleUpdatePassword = (event) => {
        event.preventDefault(); // Prevent form refresh
        if (!newPassword || !confirmPassword) {
            setError("Both fields are required");
            return;
        }
        if (newPassword !== confirmPassword) {
            setError("Passwords do not match");
        } else {
            setError("");
           const result = dispatch(resetPassword(mobileNumber.mobileNumber, newPassword, confirmPassword));
           if (result.success) {
              navigate("/");
           }else{
               setError(result.error || "Failed to reset password");
           }
            // console.log("Form submitted", newPassword, confirmPassword);
        }
    };
    

    return (
        <form className="signin-form" style={{ minHeight: "300px" }} onSubmit={handleUpdatePassword}>
            {/* Back Button and Heading */}
            <div className="otp-header">
                <img src={require("../assets/Images/Ic_back.png")} alt="Back" className="back-icon" />
                <h2 className="otp-title">New Password</h2>
            </div>

            {/* New Password Input */}
            <div className="input-group">
                <label htmlFor="password">New Password</label>
                <input
                    type="password"
                    id="new-password"
                    name="new-password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                />
            </div>

            {/* Confirm Password Input */}
            <div className="input-group">
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

            {error && <p className="error-text">{error}</p>}

            {/* Update Button */}
            <button className="signin-btn" onClick={handleUpdatePassword}>
                Update Password
            </button>
        </form>
    );
};

export default SetPasswordForm;
