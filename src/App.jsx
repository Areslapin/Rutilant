// Define arrays for "Back" and "Value" values
const backValues = [1, 2, 3];
const valueValues = [1, 2, 3];

// Shuffle the arrays (Fisher-Yates shuffle)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(backValues);
shuffleArray(valueValues);

// Create and assign values to three cards
const cards = [];

for (let i = 0; i < 3; i++) {
  const card = {
    back: backValues.pop(),
    value: valueValues.pop(),
  };
  cards.push(card);
}

// Print the card values
cards.forEach((card, index) => {
  console.log(`Card ${index + 1}: Back - ${card.back}, Value - ${card.value}`);
});

export default App; // Default export