export const findWinner = (playersArray, scoreArray) => {
  const winnersScore = Math.max(...scoreArray);

  const playerWithScoreArray = playersArray.map((player, index) => [player, scoreArray[index]]);

  const racingBoard = Object.fromEntries(playerWithScoreArray);

  const winnersArray = [];
  for (let player in racingBoard) {
    if (racingBoard[player] === winnersScore) {
      winnersArray.push(player);
    }
  }

  return winnersArray;
};
