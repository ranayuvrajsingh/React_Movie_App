import React from "react";

const currentYear = new Date().getFullYear();
const footer = () => {
  return (
    <div>
      {" "}
      <footer className="footer">
        <div className="container" style={{}}>
          <p>
            &copy; {currentYear} <span style={{}}>Rana Yuvraj Singh</span>. All
            Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default footer;
