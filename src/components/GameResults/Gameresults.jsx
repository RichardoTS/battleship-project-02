import React from "react";

const Gameresults = ({ message }) => {
  return (
    <div>
      {message && (
        <div className="winner">
          <h1>{message}</h1>
        </div>
      )}
    </div>
  );
};

export default Gameresults;
