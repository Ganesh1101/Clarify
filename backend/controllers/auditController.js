const Audit = require('../models/Audit');

// Get all audits
exports.getAudits = async (req, res) => {
    try {
        const audits = await Audit.find();
        res.json(audits);
    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};

// Get audit by ID
exports.getAuditById = async (req, res) => {
    try {
        const audit = await Audit.findById(req.params.id);
        if (!audit) return res.status(404).json({ message: 'Audit not found' });
        res.json(audit);
    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};

// Create a new audit entry
exports.createAudit = async (req, res) => {
    try {
        const audit = new Audit(req.body);
        await audit.save();
        res.status(201).json(audit);
    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};

// Update an audit entry
exports.updateAudit = async (req, res) => {
    try {
        const audit = await Audit.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!audit) return res.status(404).json({ message: 'Audit not found' });
        res.json(audit);
    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};

// Delete an audit entry
exports.deleteAudit = async (req, res) => {
    try {
        const audit = await Audit.findByIdAndDelete(req.params.id);
        if (!audit) return res.status(404).json({ message: 'Audit not found' });
        res.json({ message: 'Audit deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};
