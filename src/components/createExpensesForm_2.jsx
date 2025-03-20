import { useState } from "react";

const CreateExpensesForm_2 = () => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("");
    const [expenseDate, setExpenseDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ amount, currency, expenseDate });
    };

    return (
        <div className="expenses-form-container">
            <h2 className="expenses-form-title">Add details about your expense now</h2>

            <form onSubmit={handleSubmit}>
                <div className="expenses-form-group">
                    <label className="expenses-form-label">Amount</label>
                    <input
                        type="text"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="expenses-form-input"
                    />
                </div>

                <div className="expenses-form-group">
                    <label className="expenses-form-label">Currency</label>
                    <input
                        type="text"
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                        className="expenses-form-input"
                    />
                </div>

                <div className="expenses-form-group">
                    <label className="expenses-form-label">Expense Date</label>
                    <input
                        type="date"
                        value={expenseDate}
                        onChange={(e) => setExpenseDate(e.target.value)}
                        placeholder="Input text"
                        className="expenses-form-input"
                    />
                </div>
            </form>
        </div>
    );
};

export default CreateExpensesForm_2;