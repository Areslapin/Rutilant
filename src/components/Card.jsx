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
}) => {
  const [isClickable, setIsClickable] = useState(true);

  const BackPath = `src/assets/Carrds/back/0${card.back}_Back.png`;
  const FrontPath = `src/assets/Carrds/front/0${card.value}_Front.png`;

  const playCard = () => {
    if (maxLevel.level1 && isClickable) {
      firstStepPlay();
    }

    if (maxLevel.level2 && isClickable) {
      secondStepPlay();
    }
    if (maxLevel.level3 && isClickable) {
      thirdStepPlay();
    }
    if (maxLevel.level4 && isClickable) {
      fourStepPlay();
    }
  };

  const firstStepPlay = () => {
    if (currentLevel === 1) {
      if (card.value === 1) {
        setCardsClicked({ ...cardsClicked, card1: true });
        setIsClickable(false);
        setIsWon(true);
        setCurrentLevel(2);
      } else {
        setIsLost(true);
        setIsClickable(false);
        setCardsClicked({
          ...cardsClicked,
          card1: false,
        });
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
          setIsClickable(false);
          setCardsClicked({
            ...cardsClicked,
            card1: false,
          });
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
          setIsClickable(false);
          setCardsClicked({ ...cardsClicked, card1: true, card2: false });
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
          setIsLost(true);
          setIsClickable(false);
          setCardsClicked({
            ...cardsClicked,
            card1: false,
          });
        }
      }
      if (cardsClicked.card1 && !cardsClicked.card2) {
        if (card.value === 2 && maxLevel.level3) {
          setCardsClicked({ ...cardsClicked, card2: true });
          setIsClickable(false);
        } else {
          setIsLost(true);
          setIsClickable(false);
          setCardsClicked({ ...cardsClicked, card1: true, card2: false });
        }
      }
      if (cardsClicked.card1 && cardsClicked.card2 && !cardsClicked.card3) {
        if (card.value === 3 && maxLevel.level3) {
          setCardsClicked({ ...cardsClicked, card3: true });
          setIsClickable(false);
          setIsWon(true);
          setCurrentLevel(4);
        } else {
          setIsLost(true);
          setIsClickable(false);
          setCardsClicked({
            ...cardsClicked,
            card1: true,
            card2: true,
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
          setIsClickable(false);
        } else {
          setIsLost(true);
          setIsClickable(false);
          setCardsClicked({
            ...cardsClicked,
            card1: false,
          });
        }
      }
      if (cardsClicked.card1 && !cardsClicked.card2) {
        if (card.value === 2 && maxLevel.level3) {
          setCardsClicked({ ...cardsClicked, card2: true });
          setIsClickable(false);
        } else {
          setIsLost(true);
          setIsClickable(false);
          setCardsClicked({ ...cardsClicked, card1: true, card2: false });
        }
      }
      if (cardsClicked.card1 && cardsClicked.card2 && !cardsClicked.card3) {
        if (card.value === 3 && maxLevel.level3) {
          setCardsClicked({ ...cardsClicked, card3: true });
          setIsClickable(false);
        } else {
          setIsLost(true);
          setIsClickable(false);
          setCardsClicked({
            ...cardsClicked,
            card1: true,
            card2: true,
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
        if (card.value === 4 && maxLevel.level3) {
          setCardsClicked({ ...cardsClicked, card4: true });
          setIsClickable(false);
          setIsWon(true);
          setCurrentLevel(5);
        } else {
          setIsLost(true);
          setIsClickable(false);
          setCardsClicked({
            ...cardsClicked,
            card1: true,
            card2: true,
            card3: true,
            card4: false,
          });
        }
      }
    }
  };

  useEffect(() => {
    setIsClickable(true);
  }, [isWon, isLost]);

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
