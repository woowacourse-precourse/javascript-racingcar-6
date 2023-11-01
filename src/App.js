import Car from './Car';
import MessageProcessor from './MessageProcessor';
import Validator from './Validator';

class App {
  constructor() {
    this.cars = [];
    this.tryCount = 0;
  }

  progressRace() {
    MessageProcessor.result();
    for (let i = 0; i < this.tryCount; i += 1) {
      this.cars.forEach(car => {
        const carCondition = Car.getCondition();
        car.move(carCondition);
      });
      MessageProcessor.progress(this.cars);
    }
  }

  determineWinner() {
    const maxPosition = Math.max(...this.cars.map(car => car.position));
    const winners = this.cars.filter(car => car.position === maxPosition);
    return winners;
  }

  async play() {
    const carNames = await MessageProcessor.inputCarNames();
    if (Validator.racerEntry(carNames) && Validator.carNames(carNames)) {
      this.cars = carNames.split(',').map(carName => new Car(carName));
    }

    const tryCount = await MessageProcessor.inputTryCount();
    if (Validator.tryCount(tryCount)) {
      this.tryCount = tryCount;
    }

    this.progressRace();
    MessageProcessor.winners(this.determineWinner());
  }
}

export default App;
