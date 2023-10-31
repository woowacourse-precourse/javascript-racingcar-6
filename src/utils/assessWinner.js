export default function assessWinner(positions) {
  let winnerScore = 0;
  let winnerIndex = [];

  positions.forEach((position, i) => {
    if (position.length === winnerScore) {
      winnerIndex.push(i);
    }
    if (position.length > winnerScore) {
      winnerScore = position.length;
      winnerIndex = [];
      winnerIndex.push(i);
    }
  });
  return winnerIndex;
}
