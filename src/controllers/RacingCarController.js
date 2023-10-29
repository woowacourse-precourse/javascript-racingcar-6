import Car from '../models/Car.js';
import InputValidator from '../utils/InputValidator.js';
import InputView from '../views/InputView.js';

class RacingCarController {
  #cars;

  #moveCount;

  constructor() {
    this.#cars = [];
    this.#moveCount = 0;
  }

  startGame() {
    this.makeCars();
  }

  async makeCars() {
    const response = await InputView.inputCarNames();
    const carNames = response.split(',');
    carNames.forEach(name => {
      if (InputValidator.checkCarName(name)) {
        const car = new Car(name);
        this.#cars.push(car);
      }
    });
  }
}

export default RacingCarController;
