import React from "react";

// Component responsible the winner of each game.

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
