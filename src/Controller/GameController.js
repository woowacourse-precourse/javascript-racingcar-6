import InputView from "../View/InputView.js";
import InputValidator from "../Validator/InputValidator.js";

class GameController {
  async init() {
    const carNames = await this.getCarNames();
    console.log(carNames);
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
    }
  }
}

export default GameController;
