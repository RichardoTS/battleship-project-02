import { useEffect, useState } from "react";

// Component responsible to set the color of each block based on the value and type prop.

function BoardItem(props) {
  const [color, setColor] = useState("");

  useEffect(() => {
    function changeColor() {
      setColor(
        props.boxValue === 1 && props.type !== "Gundam"
          ? "black"
          : props.boxValue === 2
          ? "red"
          : props.boxValue === 3
          ? "dark-gray"
          : ""
      );
    }
    changeColor();
  }, [props.boxValue, props.type]);

  return (
    <div
      onClick={() => {
        props.onClickBox();
      }}
      className={"box " + color}
    ></div>
  );
}

export default BoardItem;
