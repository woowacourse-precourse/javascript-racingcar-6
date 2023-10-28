export const findWinner = (playersArray, scoreArray) => {
  const winnerScore = Math.max(...scoreArray);

  const playerWithScoreArray = playersArray.map((player, index) => {
    return [player, scoreArray[index]];
  })

  const racingBoard = Object.fromEntries(playerWithScoreArray);
  const winnerArray = [];

  for (let player in racingBoard) {
    if (racingBoard[player] === winnerScore) {
      winnerArray.push(player);
    }
  }

  return winnerArray;
}

