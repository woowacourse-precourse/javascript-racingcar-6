import OutputView from '../views/OutputView.js';

class GameModel {
  constructor(rounds, cars) {
    this.outputView = new OutputView();
    this.rounds = rounds;
    this.curRound = 0;
    this.cars = cars;
  }

  isGameOver() {
    return this.curRound === this.rounds;
  }

  getCarModels() {
    return this.cars.map((car) => car.getCarModel());
  }

  playRound() {
    this.cars.forEach((car) => {
      car.move();
    });
    this.curRound++;
  }

  getWinnersName() {
    const maxPos = this.getMaxPosition();

    return this.cars.map((car) => {
      if (car.isWinner(maxPos)) {
        return car.name;
      }
    });
  }

  getMaxPosition() {
    const carModels = this.getCarModels();
    const positions = carModels.map(({ _, position }) => position);

    return Math.max(positions);
  }
}

export default GameModel;
