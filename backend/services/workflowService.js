const Workflow = require('../models/Workflow');

// Fetch all workflows
exports.getAllWorkflows = async () => {
    return await Workflow.find();
};

// Fetch workflow by ID
exports.getWorkflowById = async (id) => {
    return await Workflow.findById(id);
};

// Create a new workflow
exports.createWorkflow = async (workflowData) => {
    const workflow = new Workflow(workflowData);
    return await workflow.save();
};

// Update an existing workflow
exports.updateWorkflow = async (id, workflowData) => {
    return await Workflow.findByIdAndUpdate(id, workflowData, { new: true });
};

// Delete a workflow
exports.deleteWorkflow = async (id) => {
    return await Workflow.findByIdAndDelete(id);
};