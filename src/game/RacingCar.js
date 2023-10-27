import Car from "./Car.js";
import OutputView from "../view/OutputView.js";

class RacingGame {
  constructor() {
    this.cars = [];
  }

  addCar(carName) {
    const car = new Car(carName);
    this.cars.push(car);
  }

  async startGame(attempts) {
    while (true) {
      this.cars.forEach(async (car) => {
        await car.move();
      });

      this.cars.forEach(async (car) => {
        const position = await car.getPosition();
        await OutputView.printLine(car, position);
      });

      await OutputView.printBlankLine();

      if (this.cars.some((car) => car.position >= attempts)) {
        break;
      }
    }
  }

  getWinners() {
    const maxPosition = Math.max(...this.cars.map((car) => car.position));
    const winners = this.cars.filter((car) => car.position === maxPosition);
    return winners.map((car) => car.name).join(", ");
  }
}

export default RacingGame;
