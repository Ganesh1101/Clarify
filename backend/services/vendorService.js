const Vendor = require('../models/Vendor');

// Fetch all vendors
exports.getAllVendors = async () => {
    return await Vendor.find();
};

// Fetch vendor by ID
exports.getVendorById = async (id) => {
    return await Vendor.findById(id);
};

// Create a new vendor
exports.createVendor = async (vendorData) => {
    const vendor = new Vendor(vendorData);
    return await vendor.save();
};

// Update an existing vendor
exports.updateVendor = async (id, vendorData) => {
    return await Vendor.findByIdAndUpdate(id, vendorData, { new: true });
};

// Delete a vendor
exports.deleteVendor = async (id) => {
    return await Vendor.findByIdAndDelete(id);
};
