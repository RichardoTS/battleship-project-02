import React from "react";

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
