const mongoose = require('mongoose');

const VendorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    gst_number: { type: String, required: false },
    contact: { type: String, required: true },
    email: { type: String, required: true },
    category: { type: String, required: true },
    is_gst_registered: { type: Boolean, default: false },
    status: { type: String, enum: ['Pending Approval', 'Approved', 'Rejected'], default: 'Pending Approval' },
    created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    approved_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
     company_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: false }
}, { timestamps: true });

module.exports = mongoose.model('Vendor', VendorSchema);