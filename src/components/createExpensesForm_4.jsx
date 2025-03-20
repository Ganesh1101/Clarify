import { useState } from "react";

const CreateExpensesForm_4 = () => {
    const [file, setFile] = useState(null);
    const [remarks, setRemarks] = useState("");

    const handleDrop = (event) => {
        event.preventDefault();
        const droppedFile = event.dataTransfer.files[0];
        if (droppedFile && droppedFile.name.endsWith(".eml")) {
            setFile(droppedFile);
        } else {
            alert("Only .eml files are supported.");
        }
    };

    const handleFileSelect = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile && selectedFile.name.endsWith(".eml")) {
            setFile(selectedFile);
        } else {
            alert("Only .eml files are supported.");
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted with values:", {
            file: file ? file.name : "No file selected",
            remarks
        });
    };

    return (
        <div className="expenses-form-container" style={{marginBottom:-30}}>
            <h2 className="expenses-form-title">Add other Details</h2>

            <form onSubmit={handleSubmit}>
                <div
                    className="expense-option-card"
                    onDrop={handleDrop}
                    onDragOver={(e) => e.preventDefault()}
                    style={{ marginTop: "5px",height: "190px" }}
                >
                    <img src={require("../assets/Images/ic_square.png")} alt="Upload" className="expense-option-icon" style={{height:"50px",marginTop: "5px"}}/>
                    <p className="expense-option-title" style={{fontSize:"15px",marginTop:"5px"}}>Drag & Drop Mail here</p>
                    <p className="expense-option-text" style={{marginTop:"-5px"}}>*Formats supported: .eml</p>
                    <p className="expense-option-or" style={{marginTop:"-10px"}}>or</p>
                    <label className="expense-button" >
                        Browse File
                        <input
                            type="file"
                            accept=".eml"
                            onChange={handleFileSelect}
                            hidden
                        />
                    </label>
                </div>

                <div className="expenses-form-group">
                    <label className="expenses-form-label" style={{marginTop:"-5px"}}>Remarks</label>
                    <input
                        type="text"
                        className="expenses-form-input"
                        value={remarks}
                        onChange={(e) => setRemarks(e.target.value)}
                        required
                    />
                </div>
            </form>
        </div>
    );
};

export default CreateExpensesForm_4;
