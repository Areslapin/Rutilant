const Card = ({ card }) => {
  const BackPath = `src/assets/Carrds/back/0${card.back}_Back.png`;

  return (
    <>
      <div className='card'>
        <img src={BackPath} alt='Carte' />
        <span className='card-value'>{card.value}</span>
      </div>
    </>
  );
};
export default Card;
