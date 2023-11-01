import {
  printingGreetingResult,
  printingNewLine,
  printingFinalWinners,
  carNamesRead,
  trialNumRead,
} from '../utils/view.js';
import Car from '../classes/Car.js';

class App {
  carNamesArray;
  carList;
  #trialNum;
  constructor() {
    this.carNamesArray = [];
    this.carList = [];
    this.#trialNum = 0;
  }

  async init() {
    this.carNamesArray = await carNamesRead();
    this.carList = this.carNamesArray.map((name) => new Car(name));
    this.#trialNum = await trialNumRead();
  }

  running() {
    printingGreetingResult();
    for (let i = 0; i < this.#trialNum; i++) {
      this.carList.forEach((car) => {
        car.tryToMove();
        car.print();
      });
      printingNewLine();
    }
  }

  resulting() {
    const movementNumsForEachCar = this.carList.map(
      (car) => car.totalMovementDashArray.length,
    );
    const maxMovementNum = Math.max(...movementNumsForEachCar);

    const winners = this.carList
      .filter((car) => car.totalMovementDashArray.length === maxMovementNum)
      .map((car) => car.name)
      .join(', ');

    printingFinalWinners({ winners: winners });
  }
  async play() {
    await this.init();
    this.running();
    this.resulting();
  }
}

export default App;
