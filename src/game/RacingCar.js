import Car from './Car';
import OutputView from '../view/OutputView';

class RacingGame {
  constructor() {
    this.cars = [];
  }

  addCar(carName) {
    const car = new Car(carName);
    this.cars.push(car);
  }

  async startGame(attempts) {
    for (let i = 0; i < attempts; i++) {
        this.cars.forEach( async (car) => {
            await car.move();
            const position = await car.getPosition();
            await OutputView.printLine(car, position);
        })
      await OutputView.printBlankLine();
    }
  }

  getWinners() {
    const maxPosition = this.#getMaxPosition();
    const winners = this.#getWinningCars(maxPosition);
    const joinWinners = this.#joinWinners(winners);
    return joinWinners;
  }

  #getMaxPosition() {
    const positions = this.cars.map((car) => car.position);
    return Math.max(...positions);
  }

  #getWinningCars(maxPosition) {
    return this.cars.filter((car) => car.position === maxPosition);
  }

  #joinWinners(winners) {
    return winners.map((car) => car.name).join(', ');
  }
}

export default RacingGame;