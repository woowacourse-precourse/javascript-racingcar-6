import OutputView from '../views/OutputView.js';
import CarModel from './CarModel.js';

class GameModel {
  /**
   * @param {number} rounds
   * @param {CarModel[]} cars
   */
  constructor(rounds, cars) {
    this.outputView = new OutputView();
    this.rounds = rounds;
    this.curRound = 0;
    this.cars = cars;
  }

  isGameOver() {
    return this.curRound === this.rounds;
  }

  playRound() {
    this.cars.forEach((car) => {
      car.move();
    });
    this.curRound++;
  }

  getWinnersName() {
    const maxPos = this.getMaxPosition();

    return this.cars
      .filter((car) => car.isWinner(maxPos))
      .map((car) => car.name);
  }

  getMaxPosition() {
    const carModels = this.getCarModelDTOs();
    const positions = carModels.map((carModel) => carModel.position);

    return Math.max(...positions);
  }

  /**
   * @returns {{name: string, position: number}[]}
   */
  getCarModelDTOs() {
    return this.cars.map((car) => car.getCarModelDTO());
  }
}

export default GameModel;
