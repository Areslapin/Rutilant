import Card from './components/Card';
import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [cardsClicked, setCardsClicked] = useState({
    card1: false,
    card2: false,
    card3: false,
  });

  const [cards, setCards] = useState([]);

  const [isLost, setIsLost] = useState(false);
  const [isWon, setIsWon] = useState(false);
  const [firstStep, setFirstStep] = useState(true);
  const [secondStep, setSecondStep] = useState(false);
  const [thirdStep, setThirdStep] = useState(false);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  useEffect(() => {
    if (isLost) {
      alert('perdu');
      window.location.reload();
    }
    if (isWon) {
      alert('gagné');
      window.location.reload();
    }
    const backValues = [1, 2, 3];
    const valueValues = [1, 2, 3];

    shuffleArray(backValues);
    shuffleArray(valueValues);

    const array = [];

    for (let i = 0; i < 3; i++) {
      const card = {
        back: backValues.pop(),
        value: valueValues.pop(),
      };
      array.push(card);
    }
    setCards(array);
  }, [isLost, isWon]);

  useEffect(() => {
    if (cardsClicked.card1 && cardsClicked.card2 && cardsClicked.card3) {
      console.log('You win!');
    }
  }, [cardsClicked]);

  return (
    <>
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
              firstStep={firstStep}
              setFirstStep={setFirstStep}
              secondStep={secondStep}
              setSecondStep={setSecondStep}
              thirdStep={thirdStep}
              setThirdStep={setThirdStep}
              isWon={isWon}
              setIsWon={setIsWon}
            />
          );
        })}
    </>
  );
};
export default App;

// Define arrays for "Back" and "Value" values
