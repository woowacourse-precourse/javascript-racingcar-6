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
    const maxPosition = Math.max(...this.cars.map((car) => car.getPosition()));
    return this.cars.filter((car) => car.getPosition() === maxPosition).map((winner) => winner.name);
  }
}

export default Race;
