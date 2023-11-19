import Card from './components/Card';
import { useState, useEffect } from 'react';
import './App.css';
import shuffleArray from './utils/shuffleArray';
import Home from './components/Home';
import { GoGear } from 'react-icons/go';
import LevelSelect from './components/LevelSelect';

const App = () => {
  //a utiliser pour le suivi des niveaux et des sauvegardes
  // const [maxLevel, setMaxLevel] = useState({
  //   level1: true,
  //   level2: false,
  //   level3: false,
  //   level4: false,
  //   level5: false,
  //   level6: false,
  //   level7: false,
  //   level8: false,
  //   level9: false,
  //   level10: false,
  // });

  const [cardsClicked, setCardsClicked] = useState({
    card1: false,
    card2: false,
    card3: false,
    card4: false,
    card5: false,
    card6: false,
    card7: false,
    card8: false,
    card9: false,
    card10: false,
  });
  const [tryNumber, setTryNumber] = useState(0);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [cards, setCards] = useState([]);
  const [isLost, setIsLost] = useState(false);
  const [isWon, setIsWon] = useState(false);
  const [displayButton, setDisplayButton] = useState(false);
  const [displayMessage, setDisplayMessage] = useState(false);
  const [displayHome, setDisplayHome] = useState(false);
  const [displayLevelSelect, setDisplayLevelSelect] = useState(false);

  function startCurrentLevel(level) {
    const backValues = [];
    const valueValues = [];
    for (let i = 0; i < level; i++) {
      backValues.push(i + 1);
      valueValues.push(i + 1);
    }
    const array = [];
    setDisplayButton(false);
    setCards([]);
    setIsLost(false);
    setIsWon(false);

    setCardsClicked({
      card1: false,
      card2: false,
      card3: false,
      card4: false,
      card5: false,
      card6: false,
      card7: false,
      card8: false,
      card9: false,
      card10: false,
    });

    shuffleArray(backValues);
    shuffleArray(valueValues);

    for (let i = 0; i < currentLevel; i++) {
      const card = {
        back: backValues.pop(),
        value: valueValues.pop(),
      };
      array.push(card);
    }

    setCards(array);
  }

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('maxLevel'));
    if (!savedData || savedData === 1) {
      localStorage.setItem('maxLevel', JSON.stringify(currentLevel));

      setDisplayHome(true);
    }
    startCurrentLevel(currentLevel);
  }, []);

  useEffect(() => {
    if (isLost) {
      setTimeout(() => {
        setDisplayMessage(true);
        setDisplayButton(true);
        setTryNumber(tryNumber + 1);
      }, 350);
    }
    if (isWon) {
      setTryNumber(0);
      setDisplayButton(true);
      setDisplayMessage(true);
      localStorage.setItem('maxLevel', JSON.stringify(currentLevel));
    }
  }, [isLost, isWon]);

  const flipAllCards = () => {
    setCardsClicked({
      card1: true,
      card2: true,
      card3: true,
      card4: true,
      card5: true,
      card6: true,
      card7: true,
      card8: true,
      card9: true,
      card10: true,
    });
  };

  return displayHome ? (
    <Home
      setDisplayHome={setDisplayHome}
      currentLevel={currentLevel}
      setCurrentLevel={setCurrentLevel}
      setDisplayLevelSelect={setDisplayLevelSelect}
      displayLevelSelect={displayLevelSelect}
    />
  ) : (
    <>
      {displayLevelSelect && (
        <LevelSelect
          currentLevel={currentLevel}
          setCurrentLevel={setCurrentLevel}
          startCurrentLevel={startCurrentLevel}
          setDisplayLevelSelect={setDisplayLevelSelect}
        />
      )}

      <GoGear
        className='settings'
        onClick={() => setDisplayHome(true)}
        size={30}
      />
      {displayButton && (
        <button onClick={() => startCurrentLevel(currentLevel)}>
          {isLost ? 'Recommencer' : 'Continuer'}
        </button>
      )}

      {displayButton && isLost && (
        <button onClick={() => flipAllCards()}>Afficher les cartes</button>
      )}

      {isWon && displayMessage && <h1>Gagné</h1>}

      {isLost && displayMessage && <h1>Perdu</h1>}

      {tryNumber >= 1 && <span>Vous avez perdu {tryNumber} fois</span>}

      {cards &&
        !displayLevelSelect &&
        cards.map((card, index) => {
          return (
            <Card
              key={index}
              card={card}
              cardsClicked={cardsClicked}
              setCardsClicked={setCardsClicked}
              isLost={isLost}
              setIsLost={setIsLost}
              isWon={isWon}
              setIsWon={setIsWon}
              currentLevel={currentLevel}
              setCurrentLevel={setCurrentLevel}
            />
          );
        })}
    </>
  );
};
export default App;

// Define arrays for "Back" and "Value" values
