import { STANDARD_NUMBER } from '../constants/controllers.js';
import Car from '../models/Car.js';
import InputValidator from '../utils/InputValidator.js';
import NumberGenerator from '../utils/NumberGenerator.js';
import InputView from '../views/InputView.js';

class RacingCarController {
  #cars;

  #moveCount;

  constructor() {
    this.#cars = [];
    this.#moveCount = 0;
  }

  async startGame() {
    const names = await InputView.inputCarNames();
    this.makeCars(names.split(','));

    const moveCount = await InputView.inputMoveCount();
    if (InputValidator.checkMoveCount(moveCount)) {
      this.#moveCount = moveCount;
    }

    for (let count = 0; count < this.#moveCount; count += 1) {
      this.moveCars();
    }
  }

  makeCars(names) {
    names.forEach(name => {
      if (InputValidator.checkCarName(name)) {
        const car = new Car(name);
        this.#cars.push(car);
      }
    });
  }

  moveCars() {
    const numberGenerator = new NumberGenerator();

    this.#cars.forEach(car => {
      const randomNumber = numberGenerator.createRandomNumbers();
      if (randomNumber >= STANDARD_NUMBER) {
        car.moveForward();
      }
    });
  }
}

export default RacingCarController;
