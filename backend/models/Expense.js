const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true },
    category: { type: String, required: true },
    date: { type: Date, default: Date.now },
    status: { type: String, enum: ['New', 'Filed', 'Approved', 'Rejected'], default: 'New' },
    with_bill: { type: Boolean, default: false },
    bill_attachment: { type: String },
    vendor_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor' },
     company_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: false }
}, { timestamps: true });

module.exports = mongoose.model('Expense', ExpenseSchema);