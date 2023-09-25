import Card from "./components/Card";
import { useState, useEffect } from "react";
import "./App.css";

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
  const [displayButton, setDisplayButton] = useState(false);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function startLevel3() {
    const backValues = [1, 2, 3];
    const valueValues = [1, 2, 3];
    const array = [];
    setDisplayButton(false);
    setCards([]);
    setIsLost(false);
    setIsWon(false);
    setFirstStep(true);
    setSecondStep(false);
    setThirdStep(false);
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
    for (let i = 0; i < 3; i++) {
      const card = {
        back: backValues.pop(),
        value: valueValues.pop(),
      };
      array.push(card);
    }
    setCards(array);
  }

  useEffect(() => {
    startLevel3();
  }, []);

  useEffect(() => {
    if (isLost) {
      alert("perdu");
      startLevel3();
    }
    if (isWon) {
      setDisplayButton(true);
    }
  }, [isLost, isWon]);

  // useEffect(() => {
  //   if (cardsClicked.card1 && cardsClicked.card2 && cardsClicked.card3) {
  //     console.log("You win!");
  //   }
  // }, [cardsClicked]);

  return (
    <>
      {displayButton && (
        <button onClick={() => startLevel3()}>Recommencer</button>
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
