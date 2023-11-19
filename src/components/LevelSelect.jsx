const LevelSelect = ({
  currentLevel,
  setCurrentLevel,
  startCurrentLevel,
  setDisplayLevelSelect,
}) => {
  //récupère le max level en lS et permet de selectionner le niveau puis initialise le jeu au niveau selectionné
  //TODO : faire un useEffect ou autre pour initialiser le jeu au niveau selectionné
  const maxLevel = JSON.parse(localStorage.getItem('maxLevel'));
  const levelSelect = (level) => {
    console.log(level);
  };

  return (
    <div>
      <select
        name='level'
        id='level'
        onChange={(e) => levelSelect(e.target.value)}>
        <option value='1'>Niveau 1</option>
        {maxLevel >= 2 && <option value='2'>Niveau 2</option>}
        {maxLevel >= 3 && <option value='3'>Niveau 3</option>}
        {maxLevel >= 4 && <option value='4'>Niveau 4</option>}
        {maxLevel >= 5 && <option value='5'>Niveau 5</option>}
        {maxLevel >= 6 && <option value='6'>Niveau 6</option>}
        {maxLevel >= 7 && <option value='7'>Niveau 7</option>}
        {maxLevel >= 8 && <option value='8'>Niveau 8</option>}
        {maxLevel >= 9 && <option value='9'>Niveau 9</option>}
      </select>
    </div>
  );
};
export default LevelSelect;
