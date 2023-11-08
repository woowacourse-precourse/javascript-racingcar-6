import Output from './Output';

class Referee {
  winnerArray = [];

  output = new Output();

  compareMovement(carArray) {
    return carArray.sort((a, b) => b.movement.length - a.movement.length);
  }
  getWinnerPoint(comparedMovement) {
    return comparedMovement[0].movement.length;
  }
  selectWinner(carArray, winnerPoint) {
    const winners = carArray
      .filter((c) => c.movement.length === winnerPoint)
      .map((c) => c.name);

    this.winnerArray = winners;
    return winners;
  }
  decideGameResult(carArray) {
    const comparedMovement = this.compareMovement(carArray);
    const winnerPoint = this.getWinnerPoint(comparedMovement);
    this.selectWinner(carArray, winnerPoint);
  }
  showWinner() {
    this.output.printWinner(this.winnerArray);
  }
}

export default Referee;
