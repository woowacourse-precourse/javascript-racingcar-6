const Referee = {
  compareMovement(carArray) {
    return carArray.sort((a, b) => b.movement.length - a.movement.length);
  },
  getWinnerPoint(comparedMovement) {
    return comparedMovement[0].movement.length;
  },
  selectWinners(carArray, winnerPoint) {
    const winners = carArray
      .filter((c) => c.movement.length === winnerPoint)
      .map((c) => c.name);

    return winners;
  },
  decideGameResult(carArray) {
    const comparedMovement = this.compareMovement(carArray);
    const winnerPoint = this.getWinnerPoint(comparedMovement);

    return this.selectWinners(carArray, winnerPoint);
  },
};

export default Referee;
