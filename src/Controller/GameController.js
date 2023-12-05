import InputView from "../View/InputView.js";
import InputValidator from "../Validator/InputValidator.js";
import Car from "../Model/Car.js";
import { generateRandom } from "../util/generateRandom.js";

class GameController {
  #cars;
  #tryCount;

  async init() {
    const carNames = await this.getCarNames();
    this.#tryCount = await this.getTryCount();
    this.createCars(carNames);
    this.startGame();
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

  // 3. 자동차 경주 게임을 진행한다.
  startGame() {
    while (this.#tryCount) {
      // 3-1. 각 자동차마다 무작위 값을 구한다.
      const randomNumbers = generateRandom(this.#cars.length);
    }
  }
}

export default GameController;
