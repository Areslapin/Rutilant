import { useState, useEffect } from 'react';

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
  isClickable,
  setIsClickable,
}) => {
  const BackPath = `src/assets/Carrds/back/0${card.back}_Back.png`;
  const FrontPath = `src/assets/Carrds/front/0${card.value}_Front.png`;
  console.log('isclickable', isClickable);

  const playCard = () => {
    handleClick('card' + card.value);

    if (currentLevel === 1) {
      firstStepPlay();
    }
    if (currentLevel === 2) {
      secondStepPlay();
    }
    if (currentLevel === 3) {
      thirdStepPlay();
    }
    if (currentLevel === 4) {
      fourStepPlay();
    }
    if (currentLevel === 5) {
      fiveStepPlay();
    }
    if (currentLevel === 6) {
      sixStepPlay();
    }
    if (currentLevel === 7) {
      sevenStepPlay();
    }
    if (currentLevel === 8) {
      eightStepPlay();
    }
    if (currentLevel === 9) {
      nineStepPlay();
    }
    if (currentLevel === 10) {
      tenStepPlay();
    }
  };

  const firstStepPlay = () => {
    if (card.value === 1) {
      setCardsClicked({ ...cardsClicked, card1: true });
      setIsClickable({ ...isClickable, card1: false });
      setIsWon(true);
      setCurrentLevel(2);
    } else {
      setIsLost(true);
      setIsClickable({ ...isClickable, card1: false });
    }
  };
  const secondStepPlay = () => {
    if (currentLevel === 2) {
      if (!cardsClicked.card1 && isClickable.card1) {
        if (card.value === 1) {
          setCardsClicked({ ...cardsClicked, card1: true });
          setIsClickable({
            ...isClickable,
            card1: false,
          });
        } else {
          setIsLost(true);
          setIsClickable({
            ...isClickable,
            card1: false,
            card2: false,
          });
        }
      }
      if (cardsClicked.card1 && !cardsClicked.card2 && isClickable.card2) {
        if (card.value === 2) {
          setCardsClicked({ ...cardsClicked, card2: true });
          // setIsClickable({
          //   ...isClickable,
          //   card2: false,
          // });
          setIsWon(true);
          setCurrentLevel(3);
        } else {
          setIsLost(true);
          setIsClickable({
            ...isClickable,
            card1: false,
            card2: false,
          });
        }
      }
    }
  };

  const thirdStepPlay = () => {
    if (currentLevel === 3) {
      if (!cardsClicked.card1 && isClickable.card1) {
        if (card.value === 1) {
          setCardsClicked({ ...cardsClicked, card1: true });
          setIsClickable({
            ...isClickable,
            card1: false,
          });
        } else {
          setIsLost(true);
          setIsClickable({
            ...isClickable,
            card1: false,
          });
        }
      }
      if (cardsClicked.card1 && !cardsClicked.card2 && isClickable.card2) {
        if (card.value === 2) {
          setCardsClicked({ ...cardsClicked, card2: true });
          setIsClickable({
            ...isClickable,
            card2: false,
          });
        } else {
          setIsLost(true);
          setIsClickable({
            ...isClickable,
            card2: false,
            card3: false,
          });
        }
      }
      if (
        cardsClicked.card1 &&
        cardsClicked.card2 &&
        !cardsClicked.card3 &&
        isClickable.card3
      ) {
        if (card.value === 3) {
          setCardsClicked({ ...cardsClicked, card3: true });
          setIsClickable({
            ...isClickable,
            card3: false,
          });
          setIsWon(true);
          setCurrentLevel(4);
        } else {
          setIsLost(true);
          setIsClickable({
            ...isClickable,
            card3: false,
          });
        }
      }
    }
  };

  const fourStepPlay = () => {
    if (currentLevel === 4) {
      if (!cardsClicked.card1) {
        if (card.value === 1) {
          setCardsClicked({ ...cardsClicked, card1: true });
          setIsClickable({
            ...isClickable,
            card1: false,
          });
        } else {
          setIsLost(true);
          setIsClickable({
            ...isClickable,
            card1: false,
          });
        }
      }
      if (cardsClicked.card1 && !cardsClicked.card2) {
        if (card.value === 2) {
          setCardsClicked({ ...cardsClicked, card2: true });
          setIsClickable({
            ...isClickable,
            card2: false,
          });
        } else {
          setIsLost(true);
          setIsClickable({
            ...isClickable,
            card2: false,
          });
        }
      }
      if (cardsClicked.card1 && cardsClicked.card2 && !cardsClicked.card3) {
        if (card.value === 3) {
          setCardsClicked({ ...cardsClicked, card3: true });
          setIsClickable({
            ...isClickable,
            card3: false,
          });
        } else {
          setIsLost(true);
          setIsClickable({
            ...isClickable,
            card3: false,
          });
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
          setIsClickable({
            ...isClickable,
            card4: false,
          });
          setIsWon(true);
          setCurrentLevel(5);
        } else {
          setIsLost(true);
          setIsClickable({
            ...isClickable,
            card4: false,
          });
        }
      }
    }
  };

  const fiveStepPlay = () => {
    if (currentLevel === 5) {
      if (!cardsClicked.card1) {
        if (card.value === 1) {
          setCardsClicked({ ...cardsClicked, card1: true });
          setIsClickable({
            ...isClickable,
            card1: false,
          });
        } else {
          setIsLost(true);
          setIsClickable({
            ...isClickable,
            card1: false,
          });
        }
      }
      if (cardsClicked.card1 && !cardsClicked.card2) {
        if (card.value === 2) {
          setCardsClicked({ ...cardsClicked, card2: true });
          setIsClickable({
            ...isClickable,
            card2: false,
          });
        } else {
          setIsLost(true);
          setIsClickable({
            ...isClickable,
            card2: false,
          });
        }
      }
      if (cardsClicked.card1 && cardsClicked.card2 && !cardsClicked.card3) {
        if (card.value === 3) {
          setCardsClicked({ ...cardsClicked, card3: true });
          setIsClickable({
            ...isClickable,
            card3: false,
          });
        } else {
          setIsLost(true);
          setIsClickable({
            ...isClickable,
            card3: false,
          });
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
          setIsClickable({
            ...isClickable,
            card4: false,
          });
        } else {
          setIsLost(true);
          setIsClickable({
            ...isClickable,
            card4: false,
          });
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
          setIsClickable({
            ...isClickable,
            card5: false,
          });
          setIsWon(true);
          setCurrentLevel(6);
        } else {
          setIsLost(true);
          setIsClickable({
            ...isClickable,
            card5: false,
          });
        }
      }
    }
  };
  const sixStepPlay = () => {
    if (currentLevel === 6) {
      if (!cardsClicked.card1) {
        if (card.value === 1) {
          setCardsClicked({ ...cardsClicked, card1: true });
          setIsClickable({
            ...isClickable,
            card1: false,
          });
        } else {
          setIsLost(true);
          setIsClickable({
            ...isClickable,
            card1: false,
          });
        }
      }
      if (cardsClicked.card1 && !cardsClicked.card2) {
        if (card.value === 2) {
          setCardsClicked({ ...cardsClicked, card2: true });
          setIsClickable({
            ...isClickable,
            card2: false,
          });
        } else {
          setIsLost(true);
          setIsClickable({
            ...isClickable,
            card2: false,
          });
        }
      }
      if (cardsClicked.card1 && cardsClicked.card2 && !cardsClicked.card3) {
        if (card.value === 3) {
          setCardsClicked({ ...cardsClicked, card3: true });
          setIsClickable({
            ...isClickable,
            card3: false,
          });
        } else {
          setIsLost(true);
          setIsClickable({
            ...isClickable,
            card3: false,
          });
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
          setIsClickable({
            ...isClickable,
            card4: false,
          });
        } else {
          setIsLost(true);
          setIsClickable({
            ...isClickable,
            card4: false,
          });
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
          setIsClickable({
            ...isClickable,
            card5: false,
          });
        } else {
          setIsLost(true);
          setIsClickable({
            ...isClickable,
            card5: false,
          });
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
          setIsClickable({
            ...isClickable,
            card6: false,
          });
          setIsWon(true);
          setCurrentLevel(7);
        } else {
          setIsLost(true);
          setIsClickable({
            ...isClickable,
            card6: false,
          });
        }
      }
    }
  };

  const sevenStepPlay = () => {
    if (currentLevel === 7) {
      if (!cardsClicked.card1) {
        if (card.value === 1) {
          setCardsClicked({ ...cardsClicked, card1: true });
          setIsClickable({
            ...isClickable,
            card1: false,
          });
        } else {
          setIsLost(true);
          setIsClickable({
            ...isClickable,
            card1: false,
          });
        }
      }
      if (cardsClicked.card1 && !cardsClicked.card2) {
        if (card.value === 2) {
          setCardsClicked({ ...cardsClicked, card2: true });
          setIsClickable({
            ...isClickable,
            card2: false,
          });
        } else {
          setIsLost(true);
        }
      }
      if (cardsClicked.card1 && cardsClicked.card2 && !cardsClicked.card3) {
        if (card.value === 3) {
          setCardsClicked({ ...cardsClicked, card3: true });
          setIsClickable({
            ...isClickable,
            card3: false,
          });
        } else {
          setIsLost(true);
          setIsClickable({
            ...isClickable,
            card3: false,
          });
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
          setIsClickable({
            ...isClickable,
            card4: false,
          });
        } else {
          setIsLost(true);
          setIsClickable({
            ...isClickable,
            card4: false,
          });
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
          setIsClickable({
            ...isClickable,
            card5: false,
          });
        } else {
          setIsLost(true);
          setIsClickable({
            ...isClickable,
            card5: false,
          });
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
          setIsClickable({
            ...isClickable,
            card6: false,
          });
        } else {
          setIsLost(true);
          setIsClickable({
            ...isClickable,
            card6: false,
          });
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
          setIsClickable({
            ...isClickable,
            card7: false,
          });
          setIsWon(true);
          setCurrentLevel(8);
        } else {
          setIsLost(true);
          setIsClickable({
            ...isClickable,
            card7: false,
          });
        }
      }
    }
  };

  const eightStepPlay = () => {
    if (currentLevel === 8) {
      if (!cardsClicked.card1) {
        if (card.value === 1) {
          setCardsClicked({ ...cardsClicked, card1: true });
          setIsClickable({
            ...isClickable,
            card1: false,
          });
        } else {
          setIsLost(true);
          setIsClickable({
            ...isClickable,
            card1: false,
          });
        }
      }
      if (cardsClicked.card1 && !cardsClicked.card2) {
        if (card.value === 2) {
          setCardsClicked({ ...cardsClicked, card2: true });
          setIsClickable({
            ...isClickable,
            card2: false,
          });
        } else {
          setIsLost(true);
          setIsClickable({
            ...isClickable,
            card2: false,
          });
        }
      }
      if (cardsClicked.card1 && cardsClicked.card2 && !cardsClicked.card3) {
        if (card.value === 3) {
          setCardsClicked({ ...cardsClicked, card3: true });
          setIsClickable({
            ...isClickable,
            card3: false,
          });
        } else {
          setIsLost(true);
          setIsClickable({
            ...isClickable,
            card3: false,
          });
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
          setIsClickable({
            ...isClickable,
            card4: false,
          });
        } else {
          setIsLost(true);
          setIsClickable({
            ...isClickable,
            card4: false,
          });
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
          setIsClickable({
            ...isClickable,
            card5: false,
          });
        } else {
          setIsLost(true);
          setIsClickable({
            ...isClickable,
            card5: false,
          });
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
          setIsClickable({
            ...isClickable,
            card6: false,
          });
        } else {
          setIsLost(true);
          setIsClickable({
            ...isClickable,
            card6: false,
          });
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
          setIsClickable({
            ...isClickable,
            card7: false,
          });
        } else {
          setIsLost(true);
          setIsClickable({
            ...isClickable,
            card7: false,
          });
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
          setIsClickable({
            ...isClickable,
            card8: false,
          });
          setIsWon(true);
          setCurrentLevel(9);
        } else {
          setIsLost(true);
          setIsClickable({
            ...isClickable,
            card8: false,
          });
        }
      }
    }
  };

  const nineStepPlay = () => {
    if (currentLevel === 9) {
      if (!cardsClicked.card1) {
        if (card.value === 1) {
          setCardsClicked({ ...cardsClicked, card1: true });
          setIsClickable({
            ...isClickable,
            card1: false,
          });
        } else {
          setIsLost(true);
          setIsClickable({
            ...isClickable,
            card1: false,
          });
        }
      }
      if (cardsClicked.card1 && !cardsClicked.card2) {
        if (card.value === 2) {
          setCardsClicked({ ...cardsClicked, card2: true });
          setIsClickable({
            ...isClickable,
            card2: false,
          });
        } else {
          setIsLost(true);
          setIsClickable({
            ...isClickable,
            card2: false,
          });
        }
      }
      if (cardsClicked.card1 && cardsClicked.card2 && !cardsClicked.card3) {
        if (card.value === 3) {
          setCardsClicked({ ...cardsClicked, card3: true });
          setIsClickable({
            ...isClickable,
            card3: false,
          });
        } else {
          setIsLost(true);
          setIsClickable({
            ...isClickable,
            card3: false,
          });
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
          setIsClickable({
            ...isClickable,
            card4: false,
          });
        } else {
          setIsLost(true);
          setIsClickable({
            ...isClickable,
            card4: false,
          });
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
          setIsClickable({
            ...isClickable,
            card5: false,
          });
        } else {
          setIsLost(true);
          setIsClickable({
            ...isClickable,
            card5: false,
          });
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
          setIsClickable({
            ...isClickable,
            card6: false,
          });
        } else {
          setIsLost(true);
          setIsClickable({
            ...isClickable,
            card6: false,
          });
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
          setIsClickable({
            ...isClickable,
            card7: false,
          });
        } else {
          setIsLost(true);
          setIsClickable({
            ...isClickable,
            card7: false,
          });
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
          setIsClickable({
            ...isClickable,
            card8: false,
          });
        } else {
          setIsLost(true);
          setIsClickable({
            ...isClickable,
            card8: false,
          });
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
          setIsClickable({
            ...isClickable,
            card9: false,
          });
          setIsWon(true);
          setCurrentLevel(10);
        } else {
          setIsLost(true);
          setIsClickable({
            ...isClickable,
            card9: false,
          });
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
          setIsClickable({
            ...isClickable,
            card1: false,
          });
          setIsWon(true);
        } else {
          setIsLost(true);
          setIsClickable({
            ...isClickable,
            card1: false,
          });
        }
      }
      if (cardsClicked.card1 && !cardsClicked.card2) {
        if (card.value === 2) {
          setCardsClicked({ ...cardsClicked, card2: true });
          setIsClickable({
            ...isClickable,
            card2: false,
          });
          setIsWon(true);
        } else {
          setIsLost(true);
          setIsClickable({
            ...isClickable,
            card2: false,
          });
        }
      }
      if (cardsClicked.card1 && cardsClicked.card2 && !cardsClicked.card3) {
        if (card.value === 3) {
          setCardsClicked({ ...cardsClicked, card3: true });
          setIsClickable({
            ...isClickable,
            card3: false,
          });
          setIsWon(true);
        } else {
          setIsLost(true);
          setIsClickable({
            ...isClickable,
            card3: false,
          });
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
          setIsClickable({
            ...isClickable,
            card4: false,
          });
          setIsWon(true);
        } else {
          setIsLost(true);
          setIsClickable({
            ...isClickable,
            card4: false,
          });
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
          setIsClickable({
            ...isClickable,
            card5: false,
          });
          setIsWon(true);
        } else {
          setIsLost(true);
          setIsClickable({
            ...isClickable,
            card5: false,
          });
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
          setIsClickable({
            ...isClickable,
            card6: false,
          });
          setIsWon(true);
        } else {
          setIsLost(true);
          setIsClickable({
            ...isClickable,
            card6: false,
          });
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
          setIsClickable({
            ...isClickable,
            card7: false,
          });
          setIsWon(true);
        } else {
          setIsLost(true);
          setIsClickable({
            ...isClickable,
            card7: false,
          });
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
          setIsClickable({
            ...isClickable,
            card8: false,
          });
          setIsWon(true);
        } else {
          setIsLost(true);
          setIsClickable({
            ...isClickable,
            card8: false,
          });
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
          setIsClickable({
            ...isClickable,
            card9: false,
          });
          setIsWon(true);
        } else {
          setIsLost(true);
          setIsClickable({
            ...isClickable,
            card9: false,
          });
        }
      }
    }
  };

  const handleClick = (card) => {
    console.log('card', card);
    setCardsClicked({ ...cardsClicked, [card]: true });
  };

  return (
    <>
      <div className='card' onClick={() => playCard()}>
        {!cardsClicked['card' + card.value] ? (
          <img src={BackPath} alt='Carte' />
        ) : (
          <img src={FrontPath} alt='Carte' />
        )}
      </div>

      <span>{card.value}</span>
    </>
  );
};
export default Card;
