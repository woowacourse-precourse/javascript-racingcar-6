function FindWinner(carList) {
  let winner = [];
  let winnerCount = 0;

  carList.forEach((winCarElement) => {
    if (winnerCount < winCarElement.count) {
      winnerCount = winCarElement.count;
      winner = [winCarElement.name];
    } else if (winnerCount === winCarElement.count) {
      winner.push(winCarElement.name);
    }
  });

  return winner;
}

export default FindWinner;
