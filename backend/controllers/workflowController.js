const Workflow = require('../models/Workflow');

// Get all workflows
exports.getWorkflows = async (req, res) => {
    try {
        const workflows = await Workflow.find();
        res.json(workflows);
    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};

// Get workflow by ID
exports.getWorkflowById = async (req, res) => {
    try {
        const workflow = await Workflow.findById(req.params.id);
        if (!workflow) return res.status(404).json({ message: 'Workflow not found' });
        res.json(workflow);
    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};

// Create a new workflow
exports.createWorkflow = async (req, res) => {
    try {
        const workflow = new Workflow(req.body);
        await workflow.save();
        res.status(201).json(workflow);
    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};

// Update a workflow
exports.updateWorkflow = async (req, res) => {
    try {
        const workflow = await Workflow.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!workflow) return res.status(404).json({ message: 'Workflow not found' });
        res.json(workflow);
    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};

// Delete a workflow
exports.deleteWorkflow = async (req, res) => {
    try {
        const workflow = await Workflow.findByIdAndDelete(req.params.id);
        if (!workflow) return res.status(404).json({ message: 'Workflow not found' });
        res.json({ message: 'Workflow deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};
