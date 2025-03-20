import React, { useState } from "react";
import "../assets/Styles/styles.css"; // Ensure correct styles
import pencilIcon from "../assets/Images/ic_pencil.png"; // Ensure correct path

const CreateExpenseLayout = ({ steps  }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className="expense-container">
      {/* Step Indicator */}
      {steps.length > 0 && (
        <div className="step-indicator">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`step-item ${index <= currentStep ? "active" : ""}`} // Ensures previous steps are active
            >
              {index + 1}
            </div>
          ))}
        </div>
      )}

      {/* Pencil Icon */}
      <div className="pencil-container">
        <img src={pencilIcon} alt="Pencil Icon" className="pencil-icon" />
      </div>

      {/* Main Form Section */}
      <div className="expense-form">
        {/* Left Side Form */}
        <div className="form-content">
          {steps.length > 0 ? steps[currentStep] : <p>No steps available.</p>}
        </div>
      </div>

      {/* Navigation Buttons */}
      {steps.length > 0 && (
    <div className="navigation-buttons">
      <button
        onClick={handleBack}
        disabled={currentStep === 0}
        className="back-button"
      >
        Back
      </button>
      <button
        onClick={handleNext}
        disabled={currentStep === steps.length - 1}
        className="next-button"
      >
        Next
      </button>
    </div>
  )}
    </div>
  );
};

export default CreateExpenseLayout;
