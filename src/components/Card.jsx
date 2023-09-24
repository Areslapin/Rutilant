import { useState } from 'react';

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
}) => {
  const [isClickable, setIsClickable] = useState(true);
  const [fliped, setFliped] = useState(false);

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
      alert('1');
      setFliped(true);
    } else {
      console.log('perdu');
      setIsLost(true);
    }
  };
  const secondStepPlay = () => {
    if (card.value === 2 && cardsClicked.card1) {
      setSecondStep(false);
      setThirdStep(true);
      setCardsClicked({ ...cardsClicked, card2: true });
      setIsClickable(false);
      alert('2');
      setFliped(true);
    } else {
      console.log('perdu2');
      setIsLost(true);
    }
  };
  const thirdStepPlay = () => {
    if (card.value === 3 && cardsClicked.card2 && cardsClicked.card1) {
      setCardsClicked({ ...cardsClicked, card3: true });
      setIsClickable(false);
      alert('you win');
      setCardsClicked({
        card1: false,
        card2: false,
        card3: false,
      });
      setThirdStep(false);
      setFirstStep(true);
      setFliped(true);
    }
  };

  return (
    <>
      <div className='card' onClick={() => playCard()}>
        {!fliped ? (
          <img src={BackPath} alt='Carte' />
        ) : (
          <img src={FrontPath} alt='Carte' />
        )}{' '}
      </div>
    </>
  );
};
export default Card;
