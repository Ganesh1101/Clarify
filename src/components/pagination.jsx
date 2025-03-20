import React from "react";

const Pagination = ({ 
    currentPage, 
    totalRecords, 
    recordsPerPage, 
    onPageChange, 
    onRecordsPerPageChange 
}) => {
    const totalPages = Math.max(1, Math.ceil(totalRecords / recordsPerPage)); // Ensure at least 1 page

    return (
        <div className="pagination-container" style={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "space-between", 
            width: "100%", 
            padding: "10px 5",
            backgroundColor:"#fff"
        }}>
            {/* Left: Displaying Record Count */}
            <span className="records-info" style={{ whiteSpace: "nowrap" }}>
                Displaying  {Math.min(currentPage * recordsPerPage, totalRecords)} of {totalRecords} Records
            </span>

            {/* Center: Pagination Controls */}
            <div className="pagination" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                {/* Left Arrow */}
                <button 
                    className="arrows" 
                    disabled={currentPage === 1} 
                    onClick={() => onPageChange(currentPage - 1)}
                    style={{ background: "none", border: "none", opacity: currentPage === 1 ? 0.5 : 1, cursor: "pointer" }}
                >
                    <img 
                        src={require("../assets/Images/ic_right.png")} 
                        style={{ transform: "rotate(180deg)", filter: "brightness(0.7)" }} 
                        alt="Previous"
                    />
                </button>

                {/* Page Numbers */}
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index + 1}
                        className={currentPage === index + 1 ? "activePage" : ""}
                        onClick={() => onPageChange(index + 1)}
                        style={{ 
                            padding: "5px 10px", 
                            borderRadius: "5px", 
                            border: "1px solid #ccc", 
                            background: currentPage === index + 1 ? "#007bff" : "white", 
                            color: currentPage === index + 1 ? "white" : "black", 
                            cursor: "pointer" 
                        }}
                    >
                        {index + 1}
                    </button>
                ))}

                {/* Right Arrow */}
                <button 
                    className="arrows" 
                    disabled={currentPage === totalPages} 
                    onClick={() => onPageChange(currentPage + 1)}
                    style={{ background: "none", border: "none", opacity: currentPage === totalPages ? 0.5 : 1, cursor: "pointer" }}
                >
                    <img 
                        src={require("../assets/Images/ic_right.png")} 
                        style={{ filter: "brightness(0.7)" }} 
                        alt="Next"
                    />
                </button>
            </div>

            {/* Right: Records Per Page Dropdown */}
            <select 
                className="records-dropdown" 
                value={recordsPerPage} 
                onChange={(e) => onRecordsPerPageChange(parseInt(e.target.value))}
                style={{ 
                    padding: "5px", 
                    borderRadius: "5px", 
                    border: "1px solid #ccc", 
                    cursor: "pointer",
                    whiteSpace: "nowrap"
                }}
            >      <option value="5">5 per page</option>
                <option value="10">10 per page</option>
                <option value="15">15 per page</option>
                <option value="20">20 per page</option>
                <option value="25">25 per page</option>
                <option value="50">50 per page</option>
            </select>
        </div>
    );
};

export default Pagination;
