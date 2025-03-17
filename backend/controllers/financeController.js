 
const Finance = require('../models/Finance');

// Get all finance records
exports.getFinanceRecords = async (req, res) => {
    try {
        const records = await Finance.find();
        res.json(records);
    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};

// Get finance record by ID
exports.getFinanceRecordById = async (req, res) => {
    try {
        const record = await Finance.findById(req.params.id);
        if (!record) return res.status(404).json({ message: 'Finance record not found' });
        res.json(record);
    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};

// Create a new finance record
exports.createFinanceRecord = async (req, res) => {
    try {
        const record = new Finance(req.body);
        await record.save();
        res.status(201).json(record);
    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};

// Update a finance record
exports.updateFinanceRecord = async (req, res) => {
    try {
        const record = await Finance.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!record) return res.status(404).json({ message: 'Finance record not found' });
        res.json(record);
    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};

// Delete a finance record
exports.deleteFinanceRecord = async (req, res) => {
    try {
        const record = await Finance.findByIdAndDelete(req.params.id);
        if (!record) return res.status(404).json({ message: 'Finance record not found' });
        res.json({ message: 'Finance record deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};
