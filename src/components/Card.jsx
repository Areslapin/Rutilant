import { useState, useEffect } from "react";

const Card = ({
  card,
  cardsClicked,
  setCardsClicked,
  isLost,
  setIsLost,
  isWon,
  setIsWon,
  setCurrentLevel,
  currentLevel,
  maxLevel,
  setMaxLevel,
}) => {
  const [isClickable, setIsClickable] = useState(true);
  const BackPath = `src/assets/Carrds/back/0${card.back}_Back.png`;
  const FrontPath = `src/assets/Carrds/front/0${card.value}_Front.png`;

  const playCard = () => {
    handleClick("card" + card.value);
    if (isClickable) {
      firstStepPlay();
    }
    if (isClickable) {
      secondStepPlay();
    }
    if (isClickable) {
      thirdStepPlay();
    }
    if (isClickable) {
      fourStepPlay();
    }
    if (isClickable) {
      fiveStepPlay();
    }
    if (isClickable) {
      sixStepPlay();
    }
    if (isClickable) {
      sevenStepPlay();
    }
    if (isClickable) {
      eightStepPlay();
    }
    if (isClickable) {
      nineStepPlay();
    }
    if (isClickable) {
      tenStepPlay();
    }
  };
  // Commentaire de sécurité niveau 94 //
  const firstStepPlay = () => {
    if (currentLevel === 1) {
      if (card.value === 1) {
        setCardsClicked({ ...cardsClicked, card1: true });
        setIsClickable(false);
        setIsWon(true);
        setCurrentLevel(2);
      } else {
        setIsLost(true);
      }
    }
  };
  const secondStepPlay = () => {
    if (currentLevel === 2) {
      if (!cardsClicked.card1) {
        if (card.value === 1) {
          setCardsClicked({ ...cardsClicked, card1: true });
          setIsClickable(false);
        } else {
          setIsLost(true);
        }
      }
      if (cardsClicked.card1 && !cardsClicked.card2) {
        if (card.value === 2) {
          setCardsClicked({ ...cardsClicked, card2: true });
          setIsClickable(false);
          setIsWon(true);
          setCurrentLevel(3);
        } else {
          setIsLost(true);
        }
      }
    }
  };

  const thirdStepPlay = () => {
    if (currentLevel === 3) {
      if (!cardsClicked.card1) {
        if (card.value === 1) {
          setCardsClicked({ ...cardsClicked, card1: true });
          setIsClickable(false);
        } else {
          setIsClickable(false);
          setIsLost(true);
        }
      }
      if (cardsClicked.card1 && !cardsClicked.card2) {
        if (card.value === 2) {
          setCardsClicked({ ...cardsClicked, card2: true });
          setIsClickable(false);
        } else {
          setIsClickable(false);
          setIsLost(true);
        }
      }
      if (cardsClicked.card1 && cardsClicked.card2 && !cardsClicked.card3) {
        if (card.value === 3) {
          setCardsClicked({ ...cardsClicked, card3: true });
          setIsClickable(false);
          setIsWon(true);
          setCurrentLevel(4);
        } else {
          setIsClickable(false);
          setIsLost(true);
        }
      }
    }
  };

  const fourStepPlay = () => {
    if (currentLevel === 4) {
      if (!cardsClicked.card1) {
        if (card.value === 1) {
          setCardsClicked({ ...cardsClicked, card1: true });
          setIsClickable(false);
        } else {
          setIsLost(true);
        }
      }
      if (cardsClicked.card1 && !cardsClicked.card2) {
        if (card.value === 2) {
          setCardsClicked({ ...cardsClicked, card2: true });
          setIsClickable(false);
        } else {
          setIsLost(true);
        }
      }
      if (cardsClicked.card1 && cardsClicked.card2 && !cardsClicked.card3) {
        if (card.value === 3) {
          setCardsClicked({ ...cardsClicked, card3: true });
          setIsClickable(false);
        } else {
          setIsLost(true);
        }
      }
      if (
        cardsClicked.card1 &&
        cardsClicked.card2 &&
        cardsClicked.card3 &&
        !cardsClicked.card4
      ) {
        if (card.value === 4) {
          setCardsClicked({ ...cardsClicked, card4: true });
          setIsClickable(false);
          setIsWon(true);
          setCurrentLevel(5);
        } else {
          setIsLost(true);
        }
      }
    }
  };

  const fiveStepPlay = () => {
    if (currentLevel === 5) {
      if (!cardsClicked.card1) {
        if (card.value === 1) {
          setCardsClicked({ ...cardsClicked, card1: true });
          setIsClickable(false);
        } else {
          setIsLost(true);
        }
      }
      if (cardsClicked.card1 && !cardsClicked.card2) {
        if (card.value === 2) {
          setCardsClicked({ ...cardsClicked, card2: true });
          setIsClickable(false);
        } else {
          setIsLost(true);
        }
      }
      if (cardsClicked.card1 && cardsClicked.card2 && !cardsClicked.card3) {
        if (card.value === 3) {
          setCardsClicked({ ...cardsClicked, card3: true });
          setIsClickable(false);
        } else {
          setIsLost(true);
        }
      }
      if (
        cardsClicked.card1 &&
        cardsClicked.card2 &&
        cardsClicked.card3 &&
        !cardsClicked.card4
      ) {
        if (card.value === 4) {
          setCardsClicked({ ...cardsClicked, card4: true });
          setIsClickable(false);
        } else {
          setIsLost(true);
        }
      }
      if (
        cardsClicked.card1 &&
        cardsClicked.card2 &&
        cardsClicked.card3 &&
        cardsClicked.card4 &&
        !cardsClicked.card5
      ) {
        if (card.value === 5) {
          setCardsClicked({ ...cardsClicked, card5: true });
          setIsClickable(false);
          setIsWon(true);
          setCurrentLevel(6);
        } else {
          setIsLost(true);
        }
      }
    }
  };
  const sixStepPlay = () => {
    if (currentLevel === 6) {
      if (!cardsClicked.card1) {
        if (card.value === 1) {
          setCardsClicked({ ...cardsClicked, card1: true });
          setIsClickable(false);
        } else {
          setIsLost(true);
        }
      }
      if (cardsClicked.card1 && !cardsClicked.card2) {
        if (card.value === 2) {
          setCardsClicked({ ...cardsClicked, card2: true });
          setIsClickable(false);
        } else {
          setIsLost(true);
        }
      }
      if (cardsClicked.card1 && cardsClicked.card2 && !cardsClicked.card3) {
        if (card.value === 3) {
          setCardsClicked({ ...cardsClicked, card3: true });
          setIsClickable(false);
        } else {
          setIsLost(true);
        }
      }
      if (
        cardsClicked.card1 &&
        cardsClicked.card2 &&
        cardsClicked.card3 &&
        !cardsClicked.card4
      ) {
        if (card.value === 4) {
          setCardsClicked({ ...cardsClicked, card4: true });
          setIsClickable(false);
        } else {
          setIsLost(true);
        }
      }
      if (
        cardsClicked.card1 &&
        cardsClicked.card2 &&
        cardsClicked.card3 &&
        cardsClicked.card4 &&
        !cardsClicked.card5
      ) {
        if (card.value === 5) {
          setCardsClicked({ ...cardsClicked, card5: true });
          setIsClickable(false);
        } else {
          setIsLost(true);
        }
      }
      if (
        cardsClicked.card1 &&
        cardsClicked.card2 &&
        cardsClicked.card3 &&
        cardsClicked.card4 &&
        cardsClicked.card5 &&
        !cardsClicked.card6
      ) {
        if (card.value === 6) {
          setCardsClicked({ ...cardsClicked, card6: true });
          setIsClickable(false);
          setIsWon(true);
          setCurrentLevel(7);
        } else {
          setIsLost(true);
        }
      }
    }
  };

  const sevenStepPlay = () => {
    if (currentLevel === 7) {
      if (!cardsClicked.card1) {
        if (card.value === 1) {
          setCardsClicked({ ...cardsClicked, card1: true });
          setIsClickable(false);
        } else {
          setIsLost(true);
        }
      }
      if (cardsClicked.card1 && !cardsClicked.card2) {
        if (card.value === 2) {
          setCardsClicked({ ...cardsClicked, card2: true });
          setIsClickable(false);
        } else {
          setIsLost(true);
        }
      }
      if (cardsClicked.card1 && cardsClicked.card2 && !cardsClicked.card3) {
        if (card.value === 3) {
          setCardsClicked({ ...cardsClicked, card3: true });
          setIsClickable(false);
        } else {
          setIsLost(true);
        }
      }
      if (
        cardsClicked.card1 &&
        cardsClicked.card2 &&
        cardsClicked.card3 &&
        !cardsClicked.card4
      ) {
        if (card.value === 4) {
          setCardsClicked({ ...cardsClicked, card4: true });
          setIsClickable(false);
        } else {
          setIsLost(true);
        }
      }
      if (
        cardsClicked.card1 &&
        cardsClicked.card2 &&
        cardsClicked.card3 &&
        cardsClicked.card4 &&
        !cardsClicked.card5
      ) {
        if (card.value === 5) {
          setCardsClicked({ ...cardsClicked, card5: true });
          setIsClickable(false);
        } else {
          setIsLost(true);
        }
      }
      if (
        cardsClicked.card1 &&
        cardsClicked.card2 &&
        cardsClicked.card3 &&
        cardsClicked.card4 &&
        cardsClicked.card5 &&
        !cardsClicked.card6
      ) {
        if (card.value === 6) {
          setCardsClicked({ ...cardsClicked, card6: true });
          setIsClickable(false);
        } else {
          setIsLost(true);
        }
      }
      if (
        cardsClicked.card1 &&
        cardsClicked.card2 &&
        cardsClicked.card3 &&
        cardsClicked.card4 &&
        cardsClicked.card5 &&
        cardsClicked.card6 &&
        !cardsClicked.card7
      ) {
        if (card.value === 7) {
          setCardsClicked({ ...cardsClicked, card7: true });
          setIsClickable(false);
          setIsWon(true);
          setCurrentLevel(8);
        } else {
          setIsLost(true);
        }
      }
    }
  };

  const eightStepPlay = () => {
    if (currentLevel === 8) {
      if (!cardsClicked.card1) {
        if (card.value === 1) {
          setCardsClicked({ ...cardsClicked, card1: true });
          setIsClickable(false);
        } else {
          setIsLost(true);
        }
      }
      if (cardsClicked.card1 && !cardsClicked.card2) {
        if (card.value === 2) {
          setCardsClicked({ ...cardsClicked, card2: true });
          setIsClickable(false);
        } else {
          setIsLost(true);
        }
      }
      if (cardsClicked.card1 && cardsClicked.card2 && !cardsClicked.card3) {
        if (card.value === 3) {
          setCardsClicked({ ...cardsClicked, card3: true });
          setIsClickable(false);
        } else {
          setIsLost(true);
        }
      }
      if (
        cardsClicked.card1 &&
        cardsClicked.card2 &&
        cardsClicked.card3 &&
        !cardsClicked.card4
      ) {
        if (card.value === 4) {
          setCardsClicked({ ...cardsClicked, card4: true });
          setIsClickable(false);
        } else {
          setIsLost(true);
        }
      }
      if (
        cardsClicked.card1 &&
        cardsClicked.card2 &&
        cardsClicked.card3 &&
        cardsClicked.card4 &&
        !cardsClicked.card5
      ) {
        if (card.value === 5) {
          setCardsClicked({ ...cardsClicked, card5: true });
          setIsClickable(false);
        } else {
          setIsLost(true);
        }
      }
      if (
        cardsClicked.card1 &&
        cardsClicked.card2 &&
        cardsClicked.card3 &&
        cardsClicked.card4 &&
        cardsClicked.card5 &&
        !cardsClicked.card6
      ) {
        if (card.value === 6) {
          setCardsClicked({ ...cardsClicked, card6: true });
          setIsClickable(false);
        } else {
          setIsLost(true);
        }
      }
      if (
        cardsClicked.card1 &&
        cardsClicked.card2 &&
        cardsClicked.card3 &&
        cardsClicked.card4 &&
        cardsClicked.card5 &&
        cardsClicked.card6 &&
        !cardsClicked.card7
      ) {
        if (card.value === 7) {
          setCardsClicked({ ...cardsClicked, card7: true });
          setIsClickable(false);
        } else {
          setIsLost(true);
        }
      }
      if (
        cardsClicked.card1 &&
        cardsClicked.card2 &&
        cardsClicked.card3 &&
        cardsClicked.card4 &&
        cardsClicked.card5 &&
        cardsClicked.card6 &&
        cardsClicked.card7 &&
        !cardsClicked.card8
      ) {
        if (card.value === 8) {
          setCardsClicked({ ...cardsClicked, card8: true });
          setIsClickable(false);
          setIsWon(true);
          setCurrentLevel(9);
        } else {
          setIsLost(true);
        }
      }
    }
  };

  const nineStepPlay = () => {
    if (currentLevel === 9) {
      if (!cardsClicked.card1) {
        if (card.value === 1) {
          setCardsClicked({ ...cardsClicked, card1: true });
          setIsClickable(false);
        } else {
          setIsLost(true);
        }
      }
      if (cardsClicked.card1 && !cardsClicked.card2) {
        if (card.value === 2) {
          setCardsClicked({ ...cardsClicked, card2: true });
          setIsClickable(false);
        } else {
          setIsLost(true);
        }
      }
      if (cardsClicked.card1 && cardsClicked.card2 && !cardsClicked.card3) {
        if (card.value === 3) {
          setCardsClicked({ ...cardsClicked, card3: true });
          setIsClickable(false);
        } else {
          setIsLost(true);
        }
      }
      if (
        cardsClicked.card1 &&
        cardsClicked.card2 &&
        cardsClicked.card3 &&
        !cardsClicked.card4
      ) {
        if (card.value === 4) {
          setCardsClicked({ ...cardsClicked, card4: true });
          setIsClickable(false);
        } else {
          setIsLost(true);
        }
      }
      if (
        cardsClicked.card1 &&
        cardsClicked.card2 &&
        cardsClicked.card3 &&
        cardsClicked.card4 &&
        !cardsClicked.card5
      ) {
        if (card.value === 5) {
          setCardsClicked({ ...cardsClicked, card5: true });
          setIsClickable(false);
        } else {
          setIsLost(true);
        }
      }
      if (
        cardsClicked.card1 &&
        cardsClicked.card2 &&
        cardsClicked.card3 &&
        cardsClicked.card4 &&
        cardsClicked.card5 &&
        !cardsClicked.card6
      ) {
        if (card.value === 6) {
          setCardsClicked({ ...cardsClicked, card6: true });
          setIsClickable(false);
        } else {
          setIsLost(true);
        }
      }
      if (
        cardsClicked.card1 &&
        cardsClicked.card2 &&
        cardsClicked.card3 &&
        cardsClicked.card4 &&
        cardsClicked.card5 &&
        cardsClicked.card6 &&
        !cardsClicked.card7
      ) {
        if (card.value === 7) {
          setCardsClicked({ ...cardsClicked, card7: true });
          setIsClickable(false);
        } else {
          setIsLost(true);
        }
      }
      if (
        cardsClicked.card1 &&
        cardsClicked.card2 &&
        cardsClicked.card3 &&
        cardsClicked.card4 &&
        cardsClicked.card5 &&
        cardsClicked.card6 &&
        cardsClicked.card7 &&
        !cardsClicked.card8
      ) {
        if (card.value === 8) {
          setCardsClicked({ ...cardsClicked, card8: true });
          setIsClickable(false);
        } else {
          setIsLost(true);
        }
      }
      if (
        cardsClicked.card1 &&
        cardsClicked.card2 &&
        cardsClicked.card3 &&
        cardsClicked.card4 &&
        cardsClicked.card5 &&
        cardsClicked.card6 &&
        cardsClicked.card7 &&
        cardsClicked.card8 &&
        !cardsClicked.card9
      ) {
        if (card.value === 9) {
          setCardsClicked({ ...cardsClicked, card9: true });
          setIsClickable(false);
          setIsWon(true);
          setCurrentLevel(10);
        } else {
          setIsLost(true);
        }
      }
    }
  };
  //make the tenStepPlay function
  const tenStepPlay = () => {
    if (currentLevel === 10) {
      if (!cardsClicked.card1) {
        if (card.value === 1) {
          setCardsClicked({ ...cardsClicked, card1: true });
          setIsClickable(false);
          setIsWon(true);
        } else {
          setIsLost(true);
        }
      }
      if (cardsClicked.card1 && !cardsClicked.card2) {
        if (card.value === 2) {
          setCardsClicked({ ...cardsClicked, card2: true });
          setIsClickable(false);
          setIsWon(true);
        } else {
          setIsLost(true);
        }
      }
      if (cardsClicked.card1 && cardsClicked.card2 && !cardsClicked.card3) {
        if (card.value === 3) {
          setCardsClicked({ ...cardsClicked, card3: true });
          setIsClickable(false);
          setIsWon(true);
        } else {
          setIsLost(true);
        }
      }
      if (
        cardsClicked.card1 &&
        cardsClicked.card2 &&
        cardsClicked.card3 &&
        !cardsClicked.card4
      ) {
        if (card.value === 4) {
          setCardsClicked({ ...cardsClicked, card4: true });
          setIsClickable(false);
          setIsWon(true);
        } else {
          setIsLost(true);
        }
      }
      if (
        cardsClicked.card1 &&
        cardsClicked.card2 &&
        cardsClicked.card3 &&
        cardsClicked.card4 &&
        !cardsClicked.card5
      ) {
        if (card.value === 5) {
          setCardsClicked({ ...cardsClicked, card5: true });
          setIsClickable(false);
          setIsWon(true);
        } else {
          setIsLost(true);
        }
      }
      if (
        cardsClicked.card1 &&
        cardsClicked.card2 &&
        cardsClicked.card3 &&
        cardsClicked.card4 &&
        cardsClicked.card5 &&
        !cardsClicked.card6
      ) {
        if (card.value === 6) {
          setCardsClicked({ ...cardsClicked, card6: true });
          setIsClickable(false);
          setIsWon(true);
        } else {
          setIsLost(true);
        }
      }
      if (
        cardsClicked.card1 &&
        cardsClicked.card2 &&
        cardsClicked.card3 &&
        cardsClicked.card4 &&
        cardsClicked.card5 &&
        cardsClicked.card6 &&
        !cardsClicked.card7
      ) {
        if (card.value === 7) {
          setCardsClicked({ ...cardsClicked, card7: true });
          setIsClickable(false);
          setIsWon(true);
        } else {
          setIsLost(true);
        }
      }
      if (
        cardsClicked.card1 &&
        cardsClicked.card2 &&
        cardsClicked.card3 &&
        cardsClicked.card4 &&
        cardsClicked.card5 &&
        cardsClicked.card6 &&
        cardsClicked.card7 &&
        !cardsClicked.card8
      ) {
        if (card.value === 8) {
          setCardsClicked({ ...cardsClicked, card8: true });
          setIsClickable(false);
          setIsWon(true);
        } else {
          setIsLost(true);
        }
      }
      if (
        cardsClicked.card1 &&
        cardsClicked.card2 &&
        cardsClicked.card3 &&
        cardsClicked.card4 &&
        cardsClicked.card5 &&
        cardsClicked.card6 &&
        cardsClicked.card7 &&
        cardsClicked.card8 &&
        !cardsClicked.card9
      ) {
        if (card.value === 9) {
          setCardsClicked({ ...cardsClicked, card9: true });
          setIsClickable(false);
          setIsWon(true);
        } else {
          setIsLost(true);
        }
      }
    }
  };

  const handleClick = (card) => {
    console.log("card", card);
    setCardsClicked({ ...cardsClicked, [card]: true });
    setIsClickable(false);
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
