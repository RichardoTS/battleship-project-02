import React, { useEffect, useState, useRef } from "react";

import Loadscreen from "./components/Loadscreen/Loadscreen";

import Title from "./components/Title/Title";
import Instructions from "./components/Instructions/Instructions";
import Boardgame from "./components/Boardgame/Boardgame";
import Gameresults from "./components/GameResults/Gameresults";

import Sound from "./components/Sound/Sound";

const Battleship = () => {
  const [hasJoined, setHasJoined] = useState(false);
  const clickSoundRef = useRef(null);

  const [playerBoxes, setPlayerBoxes] = useState([]);
  const [enemyTiles, setEnemyTiles] = useState([]);
  const [playerPoints, setPlayerPoints] = useState(null);
  const [enemyPoints, setEnemyPoints] = useState(null);
  const [display, setDisplay] = useState(null);
  const [clickedBlocks, setClickedBlocks] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const playSound = (sound) => {
    if (sound === "click") {
      clickSoundRef.current.play();
    }
  };

  function gameBoard(cols, setBoxes, setPoints) {
    const newArray = Array.from({ length: cols }, () =>
      Array.from({ length: cols }, () => 0)
    );
    let points = 0;

    for (let i = 0; i < 5; i++) {
      const length = Math.floor(Math.random() * 3) + 3;
      let [x, y, xAxis, yAxis] = [
        Math.floor(Math.random() * cols),
        Math.floor(Math.random() * cols),
        ...(Math.random() < 0.5 ? [1, 0] : [0, 1]),
      ];

      for (let j = 0; j < length; j++) {
        if (x < 0 || x >= cols || y < 0 || y >= cols || newArray[x][y] !== 0) {
          break;
        }
        newArray[x][y] = 1;
        points++;
        x += xAxis;
        y += yAxis;
      }
    }
    setPoints(points);
    setBoxes(newArray);
  }

  const resetGame = () => {
    setPlayerBoxes([]);
    setEnemyTiles([]);
    setPlayerPoints(null);
    setEnemyPoints(null);
    setDisplay(null);
    setClickedBlocks([]);
    setGameOver(false);
    gameBoard(10, setPlayerBoxes, setPlayerPoints);
    gameBoard(10, setEnemyTiles, setEnemyPoints);
  };

  function checkWinner() {
    if (playerPoints === 0) {
      setDisplay("Gundam Wins!");
      setGameOver(true);
    } else if (enemyPoints === 0) {
      setDisplay("You Win!");
      setGameOver(true);
    }
  }

  function cpu(cols) {
    let newArray = [];
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < cols; j++) {
        if (playerBoxes[i][j] < 2) {
          newArray.push([i, j]);
        }
      }
    }
    const randomIndex = Math.floor(Math.random() * newArray.length);
    const [i, j] = newArray[randomIndex];
    if (playerBoxes[i][j] === 1) {
      changeBoxValue(playerBoxes, setPlayerBoxes, 2, i, j);
      setPlayerPoints(playerPoints - 1);
    } else {
      changeBoxValue(playerBoxes, setPlayerBoxes, 3, i, j);
    }
  }

  function changeBoxValue(boxes, setBoxes, value, i, j) {
    let newArray = [...boxes];
    newArray[i].splice(j, 1, value);
    setBoxes(newArray);
  }

  function handleClick(type, i, j) {
    if (
      gameOver ||
      clickedBlocks.find((block) => block.i === i && block.j === j)
    ) {
      return;
    }

    if (type === "Gundam") {
      playSound("click");
      if (enemyTiles[i][j] === 1) {
        changeBoxValue(enemyTiles, setEnemyTiles, 2, i, j);
        setEnemyPoints(enemyPoints - 1);
      } else if (enemyTiles[i][j] === 0) {
        changeBoxValue(enemyTiles, setEnemyTiles, 3, i, j);
      }
      setClickedBlocks([...clickedBlocks, { i, j }]);
      cpu(10);
    }
  }

  useEffect(() => {
    gameBoard(10, setPlayerBoxes, setPlayerPoints);
    gameBoard(10, setEnemyTiles, setEnemyPoints);
  }, []);

  useEffect(() => {
    checkWinner();
  });

  useEffect(() => {}, [playerBoxes]);

  if (!hasJoined) {
    return <Loadscreen onClick={() => setHasJoined(true)} />;
  }

  return (
    <div>
      <Title />
      <Sound clickSoundRef={clickSoundRef} />
      <Instructions onReset={resetGame} />

      {["You", "Gundam"].map((type) => (
        <Boardgame
          key={type}
          boxes={type === "You" ? playerBoxes : enemyTiles}
          type={type}
          handleClick={handleClick}
        />
      ))}

      <Gameresults />
      {display && (
        <div className="winner">
          <h1>{display}</h1>
        </div>
      )}
    </div>
  );
};

export default Battleship;
