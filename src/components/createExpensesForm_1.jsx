import { useState } from "react";

const CreateExpensesForm_1 = () => {
    const [expenseName, setExpenseName] = useState("");
    const [expenseType, setExpenseType] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ expenseName, expenseType, category });
    };
    return (
        <div className="expenses-form-container">
            <h2 className="expenses-form-title">Let’s start with Basic details</h2>

            <form onSubmit={handleSubmit}>
                <div className="expenses-form-group">
                    <label className="expenses-form-label">Expense Name</label>
                    <input
                        type="text"
                        value={expenseName}
                        onChange={(e) => setExpenseName(e.target.value)}
                        className="expenses-form-input"
                    />
                </div>

                <div className="expenses-form-group">
                    <label className="expenses-form-label">Expense Type</label>
                    <select
                        value={expenseType}
                        onChange={(e) => setExpenseType(e.target.value)}
                        className="expenses-form-select"
                    >
                        <option value="" >Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                <div className="expenses-form-group">
                    <label className="expenses-form-label">Category</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="expenses-form-select"
                    >
                        <option value="" >Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
            </form>
        </div>
    );
};

export default CreateExpensesForm_1;