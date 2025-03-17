const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['User', 'Staff', 'Finance', 'Auditor', 'Admin'], required: true,default:'User' },
    group: { type: String, required: true },
    department: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile_number: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    company_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: false }
}, { versionKey: false,timestamps: true });

module.exports = mongoose.model('User', UserSchema);