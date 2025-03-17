const mongoose = require('mongoose');

const WorkflowSchema = new mongoose.Schema({
    workflow_name: { type: String, required: true },
    steps: [
        {
            role: { type: String, required: true },
            action: { type: String, required: true },
            order: { type: Number, required: true }
        }
    ],
    limits: {
        CAPEX: { type: Number, default: 0 },
        OPEX: { type: Number, default: 0 }
    },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    company_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: false }
}, { timestamps: true });

module.exports = mongoose.model('Workflow', WorkflowSchema);
