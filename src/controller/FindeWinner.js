export const findWinner = (playersArray, scoreArray) => {
  const winnersScore = Math.max(...scoreArray);

  const playerWithScoreArray = playersArray.map((player, index) => {
    return [player, scoreArray[index]];
  })

  const racingBoard = Object.fromEntries(playerWithScoreArray);
  const winnersArray = [];

  for (let player in racingBoard) {
    if (racingBoard[player] === winnersScore) {
      winnersArray.push(player);
    }
  }

  return winnersArray;
}
/*
const a = ['pobi','crong','woong','b','c'];
const b = [4,3,4,9,9];
console.log(findWinner(a,b));*/
