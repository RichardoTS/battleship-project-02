import React, { useState } from "react";
import { GiAntiAircraftGun } from "react-icons/gi";
import { GiBattleship } from "react-icons/gi";
import { GiShipBow } from "react-icons/gi";
import { TbSubmarine } from "react-icons/tb";
import { BiSolidShip } from "react-icons/bi";

const Instructions = ({ onReset, onClick }) => {
  const [showInstructions, setShowInstructions] = useState(false);
  const [showShips, setShowShips] = useState(false);

  const getInstructions = (e) => {
    setShowInstructions((current) => !current);
  };
  const getShips = (e) => {
    setShowShips((current) => !current);
  };

  return (
    <div className="instructions">
      <button onClick={getInstructions} className="rules">
        Instructions
      </button>

      <button onClick={getShips} className="fleet">
        Ships
      </button>

      {showInstructions ? (
        <div>
          <div className="instructions-header">How to play: </div>

          <p>
            Each player deploys his ships secretly on a square grid. Then each
            player shoots at the other's grid by clicking a location. The
            defender responds by "Hit!" or "Miss!". You try to deduce where the
            enemy ships are and sink them. First to do so wins.
          </p>
        </div>
      ) : (
        ""
      )}
      {showShips ? (
        <div>
          <div className="instructions-header">
            You have the following ships at your disposal:{" "}
          </div>
          <div>
            <p>
              <GiAntiAircraftGun />
              Carrier: 5 tiles.
              <br />
              <GiBattleship />
              Batttleship: 4 tiles.
              <br />
              <GiShipBow />
              Destroyer: 3 tiles.
              <br />
              <TbSubmarine /> Submarine: 3 tiles.
              <br />
              <BiSolidShip />
              Patrol: 2 tiles.
              <br />
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
      <button onClick={onReset} className="reset">
        Reset Game
      </button>
    </div>
  );
};

export default Instructions;
