const Expense = require('../models/Expense');

// Fetch all expenses
exports.getAllExpenses = async () => {
    return await Expense.find();
};

// Fetch expense by ID
exports.getExpenseById = async (id) => {
    return await Expense.findById(id);
};

// Create a new expense record
exports.createExpense = async (expenseData) => {
    const expense = new Expense(expenseData);
    return await expense.save();
};

// Update an existing expense record
exports.updateExpense = async (id, expenseData) => {
    return await Expense.findByIdAndUpdate(id, expenseData, { new: true });
};

// Delete an expense record
exports.deleteExpense = async (id) => {
    return await Expense.findByIdAndDelete(id);
};