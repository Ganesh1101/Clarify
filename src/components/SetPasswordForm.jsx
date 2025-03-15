import React, { useState } from "react";
import "../assets/Styles/styles.css"; // Import the stylesheet

const SetPasswordForm = ({ onUpdatePassword }) => {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleUpdatePassword = () => {
        if (newPassword !== confirmPassword) {
            setError("Passwords do not match");
        } else {
            setError("");
            onUpdatePassword(newPassword);
        }
    };

    return (
        <div className="signin-form" style={{ minHeight: "220px" }}>
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

            {error && <p className="error-message">{error}</p>}

            {/* Update Button */}
            <button className="signin-btn" onClick={handleUpdatePassword}>
                Update Password
            </button>
        </div>
    );
};

export default SetPasswordForm;
