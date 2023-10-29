import Output from './Output';

class Referee {
  winnerArray = [];

  output = new Output();

  comparePoint(carArray) {
    const comparedResult = carArray.sort(
      (a, b) => b.movement.length - a.movement.length
    );
    const winnerPoint = comparedResult[0].movement.length;
    this.winnerArray = carArray
      .filter((c) => c.movement.length === winnerPoint)
      .map((c) => c.name);
  }

  showWinner() {
    this.output.printWinner(this.winnerArray);
  }
}

export default Referee;
