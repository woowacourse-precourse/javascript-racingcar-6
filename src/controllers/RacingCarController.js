import { ERROR_MESSAGE, STANDARD_NUMBER } from '../constants/controllers.js';
import Car from '../models/Car.js';
import InputValidator from '../utils/InputValidator.js';
import NumberGenerator from '../utils/NumberGenerator.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class RacingCarController {
  #cars;

  #moveCount;

  #winners;

  constructor() {
    this.#cars = [];
    this.#moveCount = 0;
    this.#winners = [];
  }

  async startGame() {
    const names = await InputView.inputCarNames();
    this.makeCars(names.split(','));

    const moveCount = await InputView.inputMoveCount();
    if (InputValidator.checkMoveCount(moveCount)) {
      this.#moveCount = moveCount;
    }

    OutputView.printLine();
    OutputView.printResultText();
    for (let count = 0; count < this.#moveCount; count += 1) {
      this.moveCars();
    }

    this.calcWinners();
    OutputView.printWinners(this.#winners);
  }

  makeCars(names) {
    const enterNames = [];
    names.forEach(name => {
      if (enterNames.includes(name)) {
        throw new Error(ERROR_MESSAGE.print(ERROR_MESSAGE.existName));
      }
      if (InputValidator.checkCarName(name)) {
        const car = new Car(name);
        this.#cars.push(car);
        enterNames.push(name);
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

    this.showPositions();
  }

  showPositions() {
    this.#cars.forEach(car => {
      OutputView.printCarPosition(car);
    });
    OutputView.printLine();
  }

  calcWinners() {
    let maxPosition = 0;

    this.#cars.forEach(car => {
      if (car.position === maxPosition) {
        this.#winners.push(car.name);
      }
      if (car.position > maxPosition) {
        this.#winners = [];
        this.#winners.push(car.name);
        maxPosition = car.position;
      }
    });
  }
}

export default RacingCarController;
