import Car from './Car.js';
import PrinterView from './helpers/PrinterView.js';

class Race {
  constructor(carNames, attempts) {
    this.cars = carNames.map((name) => new Car(name));
    this.attempts = attempts;
  }

  startRace() {
    let currentAttempts = 0;
    while (currentAttempts < this.attempts) {
      this.moveCars();
      this.printRaceStatus();
      PrinterView.printNewLine();
      currentAttempts += 1;
    }
  }

  moveCars() {
    for (const car of this.cars) {
      car.move();
    }
  }

  printRaceStatus() {
    for (const car of this.cars) {
      const name = car.name;
      const position = car.getPosition();
      const dash = '-'.repeat(position);

      PrinterView.print(`${name} : ${dash}`);
    }
  }

  // TODO: 맥스값 로직 수정 필요
  findWinner() {
    let maxPosition = -Infinity;
    let winningCars = [];
    for (const car of this.cars) {
      const carPosition = car.getPosition();
      if (carPosition > maxPosition) {
        maxPosition = carPosition;
        winningCars = [car];
      } else if (carPosition === maxPosition) {
        winningCars.push(car);
      }
    }
    return winningCars.map((winner) => winner.name);
  }
}

export default Race;
