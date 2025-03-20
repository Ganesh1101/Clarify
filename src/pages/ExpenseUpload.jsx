import React, { useState, useEffect } from "react";
import "../assets/Styles/styles.css";
import { Link } from "react-router-dom";

const ExpenseUpload = () => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setStep((prev) => (prev < 3 ? prev + 1 : prev));
        }, 1500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div> 
            {/* Header Section */}
            <h1 className="heading">Expenses</h1>
            <div style={{ display: "flex", gap: "10px" }}>
                <img src={require("../assets/Images/ic_home.png")} alt="Home" className="breadcrumb-icon" />
                <Link to="/" className="breadcrumb-link">Home</Link>
                <span className="breadcrumb-arrow">›</span>
                <span className="breadcrumb-current">Expenses</span>
                <span className="breadcrumb-arrow">›</span>
                <span className="breadcrumb-current" style={{ color: "black" }}>New Expense</span>
            </div>


            {/* Loading Section */}
            <div className="loading-container">
                <div className="reading-icon">
                    <img src={require("../assets/Images/ic_Creation.png")} alt="Loading" />
                </div>
                <h2>Reading file... Please wait!</h2>

                {/* ✅ Only one loading spinner appears below the h2 text */}
                {step < 3 && (
                    <img
                        src={require("../assets/Images/ic_loading_spinner.png")}
                        alt="Loading..."
                        className="loading-spinner"
                    />
                )}

                <div className="loading-steps">
                    <Step label="Reading the File.." completed={step >= 1} current={step === 0} />
                    <Step label="Data Processing & Parsing" completed={step >= 2} current={step === 1} />
                    <Step label="Ready !" completed={step >= 3} current={step === 2} />
                </div>
            </div>
        </div> 
    );
};

function Step({ label, completed, current }) {
    return (
        <div className="step">
            {/* ✅ Shows step image when in progress, success icon when completed */}
            {completed ? (
                <img
                    src={require("../assets/Images/ic_success_round.png")}
                    alt="Success"
                    className="check-icon"
                />
            ) : (
                <img
                    src={require("../assets/Images/ic_loading_spinner.png")}
                    alt="Processing Step"
                    className="step-icon"
                />
            )}
            <span>{label}</span>
        </div>
    );
}

export default ExpenseUpload;
