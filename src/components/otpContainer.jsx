import React, { useState, useRef } from "react";

const OTPForm = ({ onVerify, onResend,heading }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (index, event) => {
    const value = event.target.value;

    // Allow only single-digit numbers
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to next input if a number is entered
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace") {
      const newOtp = [...otp];

      // If the current box is empty, move focus to the previous input
      if (!otp[index] && index > 0) {
        inputRefs.current[index - 1].focus();
      }

      // Clear current input value
      newOtp[index] = "";
      setOtp(newOtp);
    }
  };

  const handleVerify = () => {
    const enteredOtp = otp.join("");
    onVerify(enteredOtp); // Callback with OTP value
  };

  return (
    <div className="otp-container">
      {/* Header with Image-based Back Arrow */}
      <div className="otp-header">
        <img src={require("../assets/Images/Ic_back.png")} alt="Back" className="otp-back-icon" />
        <h2 className="otp-title">{heading}</h2>
      </div>

      <p className="otp-text">Enter the OTP sent to <strong>+91-9876543210</strong></p>

      {/* OTP Input Fields */}
      <div className="otp-input-container">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(index, e)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            ref={(el) => (inputRefs.current[index] = el)}
            className="otp-input"
          />
        ))}
      </div>

      {/* Verify & Proceed Button */}
      <button className="otp-button" onClick={handleVerify}>Verify & Proceed</button>

      {/* Resend OTP */}
      <p className="otp-resend">
        Didn’t receive OTP? <span onClick={onResend} className="otp-resend-link">RESEND OTP</span>
      </p>
    </div>
  );
};

export default OTPForm;
