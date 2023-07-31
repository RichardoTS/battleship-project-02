import React from "react";

// Component responsible for playing a "click" sound each time the player clicks a block.

const Sound = ({ clickSoundRef }) => {
  return (
    <>
      <audio
        ref={clickSoundRef}
        src="../assets/sounds/click.wav"
        className="clip"
        preload="auto"
      ></audio>
    </>
  );
};

export default Sound;
