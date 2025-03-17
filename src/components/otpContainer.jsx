import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { verifyOTP, sendOTP } from "../redux/auth/authSlice";

const OTPForm = ({ heading, mobileNumber,next}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(90); // Start from 90 seconds
  const [canResend, setCanResend] = useState(false); // Disable resend initially
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(countdown);
    } else {
      setCanResend(true); // Enable resend button when timer reaches 0
    }
  }, [timer]);

  const onVerify = async (otp) => {
    setSubmitted(true);
    setError("");

    if (otp.length < 6) {
      setError("Please enter a valid 6-digit OTP.");
      return;
    }

    setLoading(true);
    try {
      const result = await dispatch(verifyOTP(mobileNumber, otp));

      if (result?.success) { // ✅ Properly check result
        navigate(next);
        if(heading!=="Verification"){
          navigate(next, { state: { mobileNumber: `+91${mobileNumber}` } });
        }
      } else {
        setError(result?.error || "Invalid OTP. Please try again."); // ✅ Handle undefined result
      }
    } catch (error) {
      console.error(error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  const onResend = async () => {
    try {
      const result = await dispatch(sendOTP(`${mobileNumber}`));

      if (!result.success) {
        setError(result.error || "Failed to send OTP");
      } else {
        setTimer(90);
        setOtp(["", "", "", "", "", ""]);
      }
    } catch (error) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
    console.log("Resend OTP clicked!");
    setError(""); // Clear error when resending OTP
  };

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
    <div className={`otp-container`}>

      {/* Header with Image-based Back Arrow */}
      <div className="otp-header">
        <img src={require("../assets/Images/Ic_back.png")} alt="Back" className="otp-back-icon" />
        <h2 className="otp-title">{heading}</h2>
      </div>

      <p className="otp-text">Enter the OTP sent to <strong>{mobileNumber}</strong></p>

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
            className={`otp-input ${error ? "error-border" : ""}`}
          />
        ))}
      </div>
      {error && <p className="error-text">{error}</p>}
      {/* Verify & Proceed Button */}
      <button className="signin-btn" onClick={handleVerify}>Verify & Proceed</button>

      {/* Resend OTP */}
      <p className="otp-resend">
        Didn’t receive OTP? <span onClick={onResend} className="otp-resend-link">{timer}s, RESEND OTP</span>
      </p>
    </div>
  );
};

export default OTPForm;
