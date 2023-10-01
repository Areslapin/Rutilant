import Card from './components/Card';
import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
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

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function startCurrentLevel(level) {
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
      alert('perdu');
      startCurrentLevel(currentLevel);
    }
    if (isWon) {
      setDisplayButton(true);
      alert('gagné');
    }
  }, [isLost, isWon]);

  return (
    <>
      {displayButton && (
        <button onClick={() => startCurrentLevel(currentLevel)}>
          Recommencer
        </button>
      )}
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
            />
          );
        })}
    </>
  );
};
export default App;

// Define arrays for "Back" and "Value" values
