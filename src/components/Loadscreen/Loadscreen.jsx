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
