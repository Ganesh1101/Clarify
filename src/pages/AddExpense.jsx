import React, { useState } from 'react';
import '../assets/Styles/styles.css'; // Ensure the CSS file is imported
import { Link } from 'react-router-dom';

const AddExpense = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };
    return (
        <div className="expense-container">
            <div>
                <h1 className="heading">Expenses</h1>
                <div style={{ display: "flex", gap: "10px" }}>
                    <img src={require("../assets/Images/ic_home.png")} alt="Home" className="breadcrumb-icon" />
                    <Link to="/" className="breadcrumb-link">Home</Link>
                    <span className="breadcrumb-arrow">›</span>
                    <span className="breadcrumb-current">Expenses</span>
                    <span className="breadcrumb-arrow">›</span>
                    <span className="breadcrumb-currents"> New Expense</span>
                </div>
            </div>
            {/* Expense Addition Options */}
            <div className="expense-card">
                <div className="expense-icon-container">
                    <img src={require("../assets/Images/ic_form_creation.png")} alt="Document Icon" className="expense-icon" />
                </div>
                <h2 className="expense-title">How would you like to add your expense?</h2>

                <div className="expense-options">
                    {/* Upload Bill Option */}
                    <div>
                        <div className="expense-option-card">
                            <img src={require("../assets/Images/ic_square.png")} alt="Upload" className="expense-option-icon" />
                            <h3 className="expense-option-title">Upload the Bill</h3>
                            <p className="expense-option-text">
                                Our AI now makes creating expenses easier!
                            </p>
                            <p className="expense-option-or">or</p>
                            <input type="file" id="file-upload" onChange={handleFileChange} hidden />
                            <label htmlFor="file-upload" className="expense-button">Browse File</label>
                        </div>
                        <p className="expense-file-format">*Formats supported: .pdf, .jpeg</p>
                    </div>
                    {/* Add Details Manually Option */}
                    <div className="expense-option-card">
                        <img src={require("../assets/Images/ic_square_plus.png")} alt="Add" className="expense-option-icon" />
                        <h3 className="expense-option-title">Add Details Manually</h3>
                        <p className="expense-option-text">
                            Get step-by-step support with suggestions at your fingertips!
                        </p>
                        <button className="expense-button-new">Add New</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AddExpense;