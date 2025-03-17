const mongoose = require('mongoose');

const FinanceSchema = new mongoose.Schema({
    expense_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Expense', required: true },
    finance_status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
    payment_status: { type: String, enum: ['Unpaid', 'Paid'], default: 'Unpaid' },
    payment_method: { type: String, enum: ['UPI', 'Bank Transfer', 'Cash'], required: true },
    transaction_id: { type: String },
    processed_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    audit_status: { type: String, enum: ['Not Audited', 'Audited'], default: 'Not Audited' },
    company_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: false }
}, { timestamps: true });

module.exports = mongoose.model('Finance', FinanceSchema);