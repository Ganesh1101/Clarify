import React from 'react';
import '../assets/Styles/styles.css'; // Ensure the CSS file is imported
import { Link } from 'react-router-dom';
import CreateExpenseLayout from '../components/createExpenseLayout';
import CreateExpensesForm_1 from '../components/createExpensesForm_1';
import CreateExpensesForm_2 from '../components/createExpensesForm_2';
import CreateExpensesForm_3 from '../components/createExpensesForm_3';
import CreateExpensesForm_4 from '../components/createExpensesForm_4';

const Expensescreate = () => {
    const steps = [
        <CreateExpensesForm_1 />,
        <CreateExpensesForm_2 />,
        <CreateExpensesForm_3 />,
        <CreateExpensesForm_4 />
    ];

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
                          <span  className="breadcrumb-current" style={{ color: "black" }}>New Expense</span>
                      </div>

            {/* Main Layout with Preview on Right Side */}
            <div className="expense-container-right">
                {/* Expense Form Section */}
                <div className="expense-form-right">
                    <CreateExpenseLayout steps={steps} />
                </div>

                {/* Preview Section on Right */}
                <div className="expense-preview-right">
                    <img 
                        src={require("../assets/Images/ic_AI_Star.png")} 
                        alt="Expense Preview" 
                        className="preview-image-right"
                    />
                </div>
            </div>
        </div>
    );
};

export default Expensescreate;
