 const mongoose = require('mongoose');

const AuditSchema = new mongoose.Schema({
    expense_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Expense', required: true },
    auditor_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    remarks: { type: String, required: true },
    audit_status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
    audit_date: { type: Date, default: Date.now },
    company_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: false }
}, { timestamps: true });

module.exports = mongoose.model('Audit', AuditSchema);