import OutputView from '../views/OutputView.js';

class GameModel {
  constructor(rounds, cars) {
    this.outputView = new OutputView();
    this.rounds = rounds;
    this.curRound = 1;
    this.cars = cars;
  }

  playRound() {
    const curCarPositions = this.cars.map((car) => {
      car.move();
      return car.getCarModel();
    });
    this.outputView.printAdvanceResult(curCarPositions);

    this.curRound++;
  }

  isGameOver() {
    return this.curRound === this.rounds;
  }

  getWinners() {}
}

export default GameModel;
