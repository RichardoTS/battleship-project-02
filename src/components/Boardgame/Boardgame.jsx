import BoardItem from "./BoardItem";

// Component responsible of rendering the board for each player (i.e. the Player and CPU)

function BoardContainer(props) {
  const { type, boxes, handleClick } = props;

  const boxElements = [];
  boxes.forEach((col, i) => {
    col.forEach((box, j) => {
      boxElements.push(
        <BoardItem
          onClickBox={() => handleClick(type, i, j)}
          key={`${i}${j}`}
          type={type}
          boxValue={box}
        />
      );
    });
  });

  return (
    <div className="player-board">
      <h1>{type}</h1>
      <div className="box-container">{boxElements}</div>
    </div>
  );
}

export default BoardContainer;
