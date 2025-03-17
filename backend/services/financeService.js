const Finance = require('../models/Finance');

// Fetch all finance records
exports.getAllFinanceRecords = async () => {
    return await Finance.find();
};

// Fetch finance record by ID
exports.getFinanceRecordById = async (id) => {
    return await Finance.findById(id);
};

// Create a new finance record
exports.createFinanceRecord = async (financeData) => {
    const finance = new Finance(financeData);
    return await finance.save();
};

// Update an existing finance record
exports.updateFinanceRecord = async (id, financeData) => {
    return await Finance.findByIdAndUpdate(id, financeData, { new: true });
};

// Delete a finance record
exports.deleteFinanceRecord = async (id) => {
    return await Finance.findByIdAndDelete(id);
};