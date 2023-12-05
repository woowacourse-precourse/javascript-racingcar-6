import InputView from "../View/InputView.js";
import InputValidator from "../Validator/InputValidator.js";
import Car from "../Model/Car.js";

class GameController {
  #cars;
  #tryCount;

  async init() {
    const carNames = await this.getCarNames();
    this.#tryCount = await this.getTryCount();
    this.createCars(carNames);
  }

  // 1-1. 경주할 자동차의 이름을 입력받는다.
  async getCarNames() {
    try {
      const carNames = InputValidator.validateCarNames(
        await InputView.getCarNames(),
      );
      return carNames.split(",");
    } catch (e) {
      throw new Error(e);
    }
  }

  // 1-2. 시도할 횟수를 입력받는다.
  async getTryCount() {
    try {
      const tryCount = InputValidator.validateTryCount(
        await InputView.getTryCount(),
      );
      return Number(tryCount);
    } catch (e) {
      throw new Error(e);
    }
  }

  // 2. 입력된 자동차의 이름을 바탕으로 자동차를 생성한다.
  createCars(carNames) {
    this.#cars = carNames.map((carName) => new Car(carName));
  }
}

export default GameController;
