import InputView from "../View/InputView.js";
import InputValidator from "../Validator/InputValidator.js";

class GameController {
  async init() {
    const carNames = await this.getCarNames();
    const tryCount = await this.getTryCount();
  }

  // 1-1. 경주할 자동차의 이름을 입력받는다.
  async getCarNames() {
    try {
      const carNames = InputValidator.validateCarNames(
        await InputView.getCarNames(),
      );
      return carNames.split(",");
    } catch (e) {
      console.error(e);
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
      console.error(e);
      throw new Error(e);
    }
  }
}

export default GameController;
