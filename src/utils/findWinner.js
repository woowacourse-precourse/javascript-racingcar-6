const findWinner = (array) => {
  const inputArray = array;
  const winnerArray = [inputArray[0]];
  const highestScore = array[0].currentState;
  for (let i = 1; i < inputArray.length; i += 1) {
    if (highestScore === inputArray[i].currentState) {
      winnerArray.push(inputArray[i]);
    } else {
      break;
    }
  }
  return winnerArray;
};

export default findWinner;
