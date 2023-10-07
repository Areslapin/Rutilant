import Card from './components/Card';
import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [isClickable, setIsClickable] = useState({
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
  const [maxLevel, setMaxLevel] = useState({
    level1: true,
    level2: false,
    level3: false,
    level4: false,
    level5: false,
    level6: false,
    level7: false,
    level8: false,
    level9: false,
    level10: false,
  });
  const [currentLevel, setCurrentLevel] = useState(1);
  const [backValues, setBackValues] = useState([]);
  const [valueValues, setValueValues] = useState([]);
  const [cards, setCards] = useState([]);
  const [isLost, setIsLost] = useState(false);
  const [isWon, setIsWon] = useState(false);
  const [displayButton, setDisplayButton] = useState(false);
  const [displayMessage, setDisplayMessage] = useState(false);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function startCurrentLevel(level) {
    for (let i = 1; i < 10; i++) {
      setIsClickable({ ...isClickable, ['card' + i]: true });
    }
    for (let i = 1; i < 10; i++) {
      setCardsClicked({ ...cardsClicked, ['card' + i]: false });
    }

    for (let i = 0; i < level; i++) {
      backValues.push(i + 1);
      valueValues.push(i + 1);
    }
    const array = [];
    setDisplayButton(false);
    setCards([]);
    setIsLost(false);
    setIsWon(false);

    setMaxLevel({
      ...maxLevel,
      [`level${level}`]: true,
    });

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
    maxLevel.level1 && startCurrentLevel(currentLevel);
  }, []);

  useEffect(() => {
    if (isLost) {
      for (let i = 1; i < currentLevel; i++) {
        setIsClickable({ ...isClickable, ['card' + i]: false });
      }
      setTimeout(() => {
        setDisplayMessage(true);
        setDisplayButton(true);
      }, 1000);
    }
    if (isWon) {
      setDisplayButton(true);
      setDisplayMessage(true);
    }
  }, [isLost, isWon]);

  return (
    <>
      {displayButton && (
        <button onClick={() => startCurrentLevel(currentLevel)}>
          Recommencer
        </button>
      )}
      {isWon && displayMessage && <h1>BIEN OUEJ PD</h1>}

      {isLost && displayMessage && <h1>RACISTE</h1>}

      {cards &&
        cards.map((card, index) => {
          return (
            <Card
              key={index}
              card={card}
              cardsClicked={cardsClicked}
              setCardsClicked={setCardsClicked}
              isLost={isLost}
              setIsLost={setIsLost}
              maxLevel={maxLevel}
              setMaxLevel={setMaxLevel}
              isWon={isWon}
              setIsWon={setIsWon}
              currentLevel={currentLevel}
              setCurrentLevel={setCurrentLevel}
              isClickable={isClickable}
              setIsClickable={setIsClickable}
            />
          );
        })}
    </>
  );
};
export default App;

// Define arrays for "Back" and "Value" values
