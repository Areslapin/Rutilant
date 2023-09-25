import { useState, useEffect } from "react";

const Card = ({
  card,
  cardsClicked,
  setCardsClicked,
  isLost,
  setIsLost,
  firstStep,
  setFirstStep,
  secondStep,
  setSecondStep,
  thirdStep,
  setThirdStep,
  isWon,
  setIsWon,
}) => {
  const [isClickable, setIsClickable] = useState(true);

  const BackPath = `src/assets/Carrds/back/0${card.back}_Back.png`;
  const FrontPath = `src/assets/Carrds/front/0${card.value}_Front.png`;

  const playCard = () => {
    if (firstStep && isClickable) {
      firstStepPlay();
    }

    if (secondStep && isClickable) {
      secondStepPlay();
    }
    if (thirdStep && isClickable) {
      thirdStepPlay();
    }
  };

  const firstStepPlay = () => {
    if (card.value === 1 && firstStep) {
      setFirstStep(false);
      setSecondStep(true);
      setCardsClicked({ ...cardsClicked, card1: true });
      setIsClickable(false);
      alert("1");
    } else {
      console.log("perdu");
      setIsLost(true);
      setIsClickable(false);
      setCardsClicked({
        card1: false,
        card2: false,
        card3: false,
      });
    }
  };
  const secondStepPlay = () => {
    if (card.value === 2 && cardsClicked.card1) {
      setSecondStep(false);
      setThirdStep(true);
      setCardsClicked({ ...cardsClicked, card2: true });
      setIsClickable(false);
      alert("2");
    } else {
      console.log("perdu2");
      setIsLost(true);
      setIsClickable(false);

      setCardsClicked({
        card1: false,
        card2: false,
        card3: false,
      });
    }
  };
  const thirdStepPlay = () => {
    if (card.value === 3 && cardsClicked.card2 && cardsClicked.card1) {
      setCardsClicked({ ...cardsClicked, card3: true });
      setIsClickable(false);
      setThirdStep(false);
      setFirstStep(true);
      setIsWon(true);
    }
  };
  useEffect(() => {
    setIsClickable(true);
  }, [isWon, isLost]);

  return (
    <>
      <div className="card" onClick={() => playCard()}>
        {!cardsClicked["card" + card.value] ? (
          <img src={BackPath} alt="Carte" />
        ) : (
          <img src={FrontPath} alt="Carte" />
        )}
      </div>
      {/* <span>{card.value}</span> */}
    </>
  );
};
export default Card;
