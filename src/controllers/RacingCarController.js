import Car from '../models/Car.js';
import InputValidator from '../utils/InputValidator.js';
import InputView from '../views/InputView.js';

class RacingCarController {
  #cars;

  constructor() {
    this.#cars = [];
  }

  async startGame() {
    const names = await InputView.inputCarNames();
    this.makeCars(names.split(','));
  }

  makeCars(names) {
    names.forEach(name => {
      if (InputValidator.checkCarName(name)) {
        const car = new Car(name);
        this.#cars.push(car);
      }
    });
  }
}

export default RacingCarController;
