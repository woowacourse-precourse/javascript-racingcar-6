import InputView from "../View/InputView.js";
import OutputView from "../View/OutputView.js";
import Car from "../Model/Car.js";

import InputValidator from "../Validator/InputValidator.js";
import { generateRandom } from "../util/generateRandom.js";
import { DELIMITER, MOVE_THRESHOLD } from "../constant/constant.js";

class GameController {
  #cars;
  #tryCount;

  async init() {
    const carNames = await this.#getCarNames();
    this.#tryCount = await this.#getTryCount();
    this.#createCars(carNames);
    this.#startGame();
  }

  // 1-1. 경주할 자동차의 이름을 입력받는다.
  async #getCarNames() {
    try {
      const carNames = InputValidator.validateCarNames(
        await InputView.getCarNames(),
      );
      return carNames.split(DELIMITER);
    } catch (e) {
      throw new Error(e);
    }
  }

  // 1-2. 시도할 횟수를 입력받는다.
  async #getTryCount() {
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
  #createCars(carNames) {
    this.#cars = carNames.map((carName) => new Car(carName));
  }

  // 3. 자동차 경주 게임을 진행한다.
  #startGame() {
    OutputView.startGame();
    while (this.#tryCount) {
      this.#cars.forEach((car) => {
        // 3-1. 각 자동차마다 무작위 값을 구한다.
        const randomNumber = generateRandom();
        // 3-2. 무작위 값이 4 이상일 경우 해당 자동차를 전진시킨다.
        if (randomNumber >= MOVE_THRESHOLD) car.move();
        this.#printProcess(car);
      });
      this.#tryCount -= 1;
      OutputView.printNewLine();
    }
    this.#printWinner();
  }

  // 3-3. 입력된 횟수에 대해 각 횟수마다 실행 결과를 출력한다
  #printProcess(car) {
    OutputView.printProcess(car);
  }

  // 3-4. 최종 우승자를 결정하고 출력한다
  #printWinner() {
    const cars = this.#cars.map((car) => car.getCarInfo());
    const maxPosition = Math.max(...cars.map((car) => car.position));
    const winner = cars
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name)
      .join(`${DELIMITER} `);
    OutputView.printWinner(winner);
  }
}

export default GameController;
