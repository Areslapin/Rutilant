import Card from './components/Card';
import { useState, useEffect } from 'react';
import './App.css';
import shuffleArray from './utils/shuffleArray';

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

  const [currentLevel, setCurrentLevel] = useState(1);
  const [cards, setCards] = useState([]);
  const [isLost, setIsLost] = useState(false);
  const [isWon, setIsWon] = useState(false);
  const [displayButton, setDisplayButton] = useState(false);
  const [displayMessage, setDisplayMessage] = useState(false);

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

    // setMaxLevel({
    //   ...maxLevel,
    //   [`level${level}`]: true,
    // });

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
    startCurrentLevel(currentLevel);
  }, []);

  useEffect(() => {
    if (isLost) {
      setTimeout(() => {
        setDisplayMessage(true);
        setDisplayButton(true);
      }, 350);
    }
    if (isWon) {
      setDisplayButton(true);
      setDisplayMessage(true);
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

  return (
    <>
      {displayButton && (
        <button onClick={() => startCurrentLevel(currentLevel)}>
          Recommencer
        </button>
      )}

      {displayButton && (
        <button onClick={() => flipAllCards()}>Afficher les cartes</button>
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
