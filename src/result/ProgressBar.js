import React from "react";
import "./result.css";

const ProgressBar = ({ resultData }) => {
  return (
    <div>
      <div className="prgress-row">
        {resultData.map((data, index) => (
          <div key={index} className="progress-bar">
            <div
              className="progress"
              style={{
                width: `${data.percentage}%`,
                background: data.color,
              }}
            >
              {data.label} ({data.percentage}%)
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
