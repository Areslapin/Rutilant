const Home = ({ setDisplayHome, currentLevel, setCurrentLevel }) => {
  const maxLevel = JSON.parse(localStorage.getItem('maxLevel'));
  console.log(maxLevel, 'home');

  const continueGame = () => {
    setDisplayHome(false);
    setCurrentLevel(maxLevel);
  };
  return (
    <div>
      {maxLevel === 1 && (
        <button
          onClick={() => {
            setDisplayHome(false);
          }}>
          Start
        </button>
      )}
      {maxLevel > 1 && (
        <button
          onClick={() => {
            continueGame();
          }}>
          Continuer
        </button>
      )}
      <button>Quit</button>
      {maxLevel > 1 && <button>Sélection du niveau</button>}
    </div>
  );
};

export default Home;
