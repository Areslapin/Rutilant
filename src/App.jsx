import Card from "./components/Card";
import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [cardsClicked, setCardsClicked] = useState({
    card1: false,
    card2: false,
    card3: false,
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
  const [backValues, setBackValues] = useState([1]);
  const [valueValues, setValueValues] = useState([1]);
  const [cards, setCards] = useState([]);
  const [isLost, setIsLost] = useState(false);
  const [isWon, setIsWon] = useState(false);
  const [firstStep, setFirstStep] = useState(true);
  const [secondStep, setSecondStep] = useState(false);
  const [thirdStep, setThirdStep] = useState(false);
  const [fourStep, setFourStep] = useState(false);
  const [fiveStep, setFiveStep] = useState(false);
  const [sixStep, setSixStep] = useState(false);
  const [sevenStep, setSevenStep] = useState(false);
  const [eightStep, setEightStep] = useState(false);
  const [nineStep, setNineStep] = useState(false);
  const [tenStep, setTenStep] = useState(false);
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
    setFirstStep(true);
    setSecondStep(false);
    setThirdStep(false);
    setFourStep(false);
    setFiveStep(false);
    setSixStep(false);
    setSevenStep(false);
    setEightStep(false);
    setNineStep(false);
    setTenStep(false);

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
    console.log("back", backValues);
    console.log("values", valueValues);
    console.log("current", currentLevel);
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
    console.log("CoucouEffect", isWon);
    if (isLost) {
      alert("perdu");
      startCurrentLevel(currentLevel);
    }
    if (isWon) {
      console.log("Coucou", setIsWon);
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
        <button onClick={() => startCurrentLevel()}>Recommencer</button>
      )}
      {cards &&
        cards.map((card, index) => {
          console.log(card);
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
              fourStep={fourStep}
              setFourStep={setFourStep}
              fiveStep={fiveStep}
              setFiveStep={setFiveStep}
              sixStep={sixStep}
              setSixStep={setSixStep}
              sevenStep={sevenStep}
              setSevenStep={setSevenStep}
              eightStep={eightStep}
              setEightStep={setEightStep}
              nineStep={nineStep}
              setNineStep={setNineStep}
              tenStep={tenStep}
              setTenStep={setTenStep}
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
