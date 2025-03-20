import { useState } from "react";

const CreateExpensesForm_3 = () => {
  const [vendorId, setVendorId] = useState("");
  const [gstApplicable, setGstApplicable] = useState("");
  const [gstAmount, setGstAmount] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with values:", {
      vendorId,
      gstApplicable,
      gstAmount,
    });
  };

  return (
    <div className="expenses-form-container">
      <h2 className="expenses-form-title">Add Details about your Vendor & GST</h2>

      <form onSubmit={handleSubmit}>
        <div className="expenses-form-group">
          <label className="expenses-form-label">Vendor ID</label>
          <input
            type="text"
            value={vendorId}
            onChange={(e) => setVendorId(e.target.value)}
            className="expenses-form-input"
            required
          />
        </div>

        <div className="expenses-form-group">
          <label className="expenses-form-label">GST Applicable?</label>
          <select
            value={gstApplicable}
            onChange={(e) => setGstApplicable(e.target.value)}
            className="expenses-form-select"
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="expenses-form-group">
          <label className="expenses-form-label">GST Amount</label>
          <input
            type="text"
            value={gstAmount}
            onChange={(e) => setGstAmount(e.target.value)}
            className="expenses-form-input"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default CreateExpensesForm_3;
