import React, { useState } from "react";
import "../assets/Styles/styles.css"; // Ensure the CSS file is imported
import Table from "../components/table";
import Pagination from "../components/pagination"; // Import the Pagination component
import { Link } from "react-router-dom";

const Expenses = () => {
    const handleView = (rowData) => {
        alert(`Viewing details for: ${JSON.stringify(rowData)}`);
    };

    const columns = [
        { key: "expID", label: "EXPID#" },
        { key: "expenseTitle", label: "Expense Title" },
        { key: "expenseType", label: "Expense Type" },
        { key: "amount", label: "Amount (INR)" },
        { key: "expenseDate", label: "Expense Date" },
        { key: "createdOn", label: "Created On" },
        { key: "incharge", label: "Incharge" },
        { key: "status", label: "Status" },
        { key: "action", label: "Action" },
    ];

    const [expensesData] = useState([
        { expID: "EXP#1", expenseTitle: "TC Name", expenseType: "Product Name", amount: 250000, expenseDate: "DD-MM-YYYY", createdOn: "DD-MM-YYYY HH:MM", incharge: "User", status: "Draft (4/6)", action: handleView },
        { expID: "EXP#2", expenseTitle: "TC Name", expenseType: "Product Name", amount: 250000, expenseDate: "DD-MM-YYYY", createdOn: "DD-MM-YYYY HH:MM", incharge: "User", status: "Filed (2/6)", action: handleView },
        { expID: "EXP#1", expenseTitle: "TC Name", expenseType: "Product Name", amount: 250000, expenseDate: "DD-MM-YYYY", createdOn: "DD-MM-YYYY HH:MM", incharge: "User", status: "Draft (4/6)", action: handleView },
        { expID: "EXP#2", expenseTitle: "TC Name", expenseType: "Product Name", amount: 250000, expenseDate: "DD-MM-YYYY", createdOn: "DD-MM-YYYY HH:MM", incharge: "User", status: "Filed (2/6)", action: handleView },
        { expID: "EXP#1", expenseTitle: "TC Name", expenseType: "Product Name", amount: 250000, expenseDate: "DD-MM-YYYY", createdOn: "DD-MM-YYYY HH:MM", incharge: "User", status: "Draft (4/6)", action: handleView },
        { expID: "EXP#2", expenseTitle: "TC Name", expenseType: "Product Name", amount: 250000, expenseDate: "DD-MM-YYYY", createdOn: "DD-MM-YYYY HH:MM", incharge: "User", status: "Filed (2/6)", action: handleView },
        { expID: "EXP#1", expenseTitle: "TC Name", expenseType: "Product Name", amount: 250000, expenseDate: "DD-MM-YYYY", createdOn: "DD-MM-YYYY HH:MM", incharge: "User", status: "Draft (4/6)", action: handleView },
        { expID: "EXP#2", expenseTitle: "TC Name", expenseType: "Product Name", amount: 250000, expenseDate: "DD-MM-YYYY", createdOn: "DD-MM-YYYY HH:MM", incharge: "User", status: "Filed (2/6)", action: handleView },
        { expID: "EXP#1", expenseTitle: "TC Name", expenseType: "Product Name", amount: 250000, expenseDate: "DD-MM-YYYY", createdOn: "DD-MM-YYYY HH:MM", incharge: "User", status: "Draft (4/6)", action: handleView },
        { expID: "EXP#2", expenseTitle: "TC Name", expenseType: "Product Name", amount: 250000, expenseDate: "DD-MM-YYYY", createdOn: "DD-MM-YYYY HH:MM", incharge: "User", status: "Filed (2/6)", action: handleView },
        { expID: "EXP#1", expenseTitle: "TC Name", expenseType: "Product Name", amount: 250000, expenseDate: "DD-MM-YYYY", createdOn: "DD-MM-YYYY HH:MM", incharge: "User", status: "Draft (4/6)", action: handleView },
        { expID: "EXP#2", expenseTitle: "TC Name", expenseType: "Product Name", amount: 250000, expenseDate: "DD-MM-YYYY", createdOn: "DD-MM-YYYY HH:MM", incharge: "User", status: "Filed (2/6)", action: handleView },
        { expID: "EXP#1", expenseTitle: "TC Name", expenseType: "Product Name", amount: 250000, expenseDate: "DD-MM-YYYY", createdOn: "DD-MM-YYYY HH:MM", incharge: "User", status: "Draft (4/6)", action: handleView },
        { expID: "EXP#2", expenseTitle: "TC Name", expenseType: "Product Name", amount: 250000, expenseDate: "DD-MM-YYYY", createdOn: "DD-MM-YYYY HH:MM", incharge: "User", status: "Filed (2/6)", action: handleView },
        // Add more mock data if needed
    ]);

    const [currentPage, setCurrentPage] = useState(1);
    const [recordPerPage, setRecordsPerPage] = useState(5);// Adjust as needed
    const totalRecords = expensesData.length;

    // Logic for displaying current records
    const indexOfLastRecord = currentPage * recordPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordPerPage;
    const currentRecords = expensesData.slice(indexOfFirstRecord, indexOfLastRecord);
    const handleRecordsPerPageChange = (newRecords) => {
        setRecordsPerPage(newRecords);
        setCurrentPage(1); // Reset to first page when changing per page count
    };

    return (
        <div >
            <h1 className="heading">Expenses</h1>
            <div style={{ display: "flex", gap: "10px" }}>
                <img src={require("../assets/Images/ic_home.png")} alt="Home" className="breadcrumb-icon" />
                <Link to="/" className="breadcrumb-link">Home</Link>
                <span className="breadcrumb-arrow">›</span>
                <span className="breadcrumb-currents">Expenses</span>
            </div>

            <div className="expensesContainer">
                <div className="search-container">
                    {/* Search Bar */}
                    <div className="search-bar">
                        <img src={require("../assets/Images/ic_search.png")} alt="search-icon" />
                        <input type="text" className="search-input" placeholder="Search..." style={{ width: "300px" }} />
                    </div>
                    <button className="filter-button">
                        <img src={require("../assets/Images/ic_filter.png")} alt="filter-icon" />
                    </button>
                    <button className="filter-button">
                        <img src={require("../assets/Images/Expenses_View.png")} alt="filter-icon" />
                    </button>

                    {/* Filters and Add Expense Button aligned to the right */}
                    <div className="filters-container">
                        <select className="filter-dropdown">
                            <option>Expense Type</option>
                        </select>
                        <select className="filter-dropdown">
                            <option>1 Month</option>
                        </select>
                        <button className="addExpenseButton">
                            <img src={require("../assets/Images/Ic_add.png")} alt="Add" className="addExpenseIcon" />
                            Add Expense
                        </button>
                    </div>
                </div>

                {/* Table Component */}
                <Table data={currentRecords} columns={columns} recordsPerPage={recordPerPage}/>

                {/* Pagination Component */}
                <Pagination
                    currentPage={currentPage}
                    totalRecords={totalRecords}
                    recordsPerPage={recordPerPage}
                    onPageChange={setCurrentPage}
                    onRecordsPerPageChange={handleRecordsPerPageChange}
                />
            </div>
        </div>
    );
};

export default Expenses;
