const Audit = require('../models/Audit');

// Fetch all audits
exports.getAllAudits = async () => {
    return await Audit.find();
};

// Fetch audit by ID
exports.getAuditById = async (id) => {
    return await Audit.findById(id);
};

// Create a new audit record
exports.createAudit = async (auditData) => {
    const audit = new Audit(auditData);
    return await audit.save();
};

// Update an existing audit record
exports.updateAudit = async (id, auditData) => {
    return await Audit.findByIdAndUpdate(id, auditData, { new: true });
};

// Delete an audit record
exports.deleteAudit = async (id) => {
    return await Audit.findByIdAndDelete(id);
};
