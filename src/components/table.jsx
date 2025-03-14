import "../assets/Styles/styles.css";

const getStatusStyle = (status) => {
  switch (status) {
    case "In Progress":
      return { bgColor: "#14FF0026", textColor: "#0B8A00", dotColor: "#0B8A00" }; // Green
    case "Pending":
      return { bgColor: "#FFBB0326", textColor: "#C79610", dotColor: "#C79610" }; // Yellow
    default:
      return { bgColor: "#E0E0E0", textColor: "#606060", dotColor: "#606060" }; // Gray (default)
  }
};

const Table = ({ data, columns }) => {
  return (
    <div className="tableContainer">
      <table className="table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key}>{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {columns.map((col) => (
                <td key={col.key}>
                  {/* Handle noOfTCs formatting */}
                  {col.key === "noOfTCs" ? (
                    (() => {
                      const parts = row[col.key].split("/");
                      return (
                        <span>
                          <span>{parts[0]}</span>/
                          <span style={{ color: "green", fontWeight: "bold" }}>{parts[1]}</span>/
                          <span style={{ color: "red", fontWeight: "bold" }}>{parts[2]}</span>
                        </span>
                      );
                    })()
                  ) : col.key === "status" ? (
                    (() => {
                      const { bgColor, textColor, dotColor } = getStatusStyle(row[col.key]);
                      return (
                        <span
                          style={{
                            backgroundColor: bgColor,
                            color: textColor,
                            padding: "5px 10px",
                            borderRadius: "15px",
                            display: "inline-flex",
                            alignItems: "center",
                            fontWeight: 400,
                            fontSize: "14px",
                            fontFamily: "Inter, sans-serif",
                          }}
                        >
                          <span
                            style={{
                              width: "8px",
                              height: "8px",
                              backgroundColor: dotColor,
                              borderRadius: "50%",
                              display: "inline-block",
                              marginRight: "5px",
                            }}
                          ></span>
                          {row[col.key]}
                        </span>
                      );
                    })()
                  ) : col.key === "progress" ? (
                    (() => {
                      const progressValue = parseInt(row[col.key].replace("%", ""));
                      return (
                        <div style={{ display: "flex", alignItems: "center"}}>
                          <div
                            style={{
                              width: "70px",
                              height: "8px",
                              backgroundColor: "#DCE3EB",
                              borderRadius: "5px",
                              overflow: "hidden",
                              position: "relative",
                              marginRight: "8px",
                            }}
                          >
                            <div
                              style={{
                                width: `${progressValue}%`,
                                height: "100%",
                                backgroundColor: progressValue > 0 ? "#0B8A00" : "#0B8A00",
                                borderRadius: "5px",
                              }}
                            ></div>
                          </div>
                          <span style={{ fontWeight: "bold", color: "#333", fontSize: "12px" }}>
                            {row[col.key]}
                          </span>
                        </div>
                      );
                    })()
                  ) : (
                    row[col.key]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
