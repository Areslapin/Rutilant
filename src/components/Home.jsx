const Home = ({
  setDisplayHome,
  currentLevel,
  setCurrentLevel,
  setDisplayLevelSelect,
  displayLevelSelect,
}) => {
  const maxLevel = JSON.parse(localStorage.getItem('maxLevel'));

  const continueGame = () => {
    setDisplayHome(false);

    setCurrentLevel(maxLevel);

    displayLevelSelect && setDisplayLevelSelect(false);
  };

  const levelSelect = () => {
    setDisplayHome(false);
    setDisplayLevelSelect(true);
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
      {maxLevel > 1 && (
        <button
          onClick={() => {
            levelSelect();
          }}>
          Sélection du niveau
        </button>
      )}
    </div>
  );
};

export default Home;
