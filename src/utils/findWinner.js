const findWinner = (array) => {
  const input_array = array;
  const winner_array = [input_array[0]];
  const highest_score = array[0].currentState;
  for (let i = 1; i < input_array.length; i++) {
    if (highest_score === input_array[i].currentState) {
      winner_array.push(input_array[i]);
    } else {
      break;
    }
  }
  return winner_array;
};

export default findWinner;
