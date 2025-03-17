const User = require('../models/User');

// Fetch all users
exports.getAllUsers = async () => {
    return await User.find();
};

// Fetch user by ID
exports.getUserById = async (id) => {
    return await User.findById(id);
};

// Create a new user
exports.createUser = async (userData) => {
    const user = new User(userData);
    return await user.save();
};

// Update an existing user
exports.updateUser = async (id, userData) => {
    return await User.findByIdAndUpdate(id, userData, { new: true });
};

// Delete a user
exports.deleteUser = async (id) => {
    return await User.findByIdAndDelete(id);
};