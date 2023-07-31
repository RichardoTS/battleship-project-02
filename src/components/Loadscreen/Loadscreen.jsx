// Component responsible to act as a starting point of the game

const Loadscreen = ({ onClick }) => {
  return (
    <div className="main-screen">
      <button onClick={onClick} className="button">
        Join Game
      </button>
    </div>
  );
};

export default Loadscreen;
