import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";

class RacingGameController {
  #racingCars;

  constructor() {}

  async startGame() {
    this.readRacingCars();
  }

  async readRacingCars() {
    await InputView.inputRacingCars((input) => {
      this.#racingCars = new RacingGame(input);
    });
  }

  async readRacingAttempt() {
    await InputView.inputRacingAttempt((input) => {
      this.#racingCars.set;
    });
  }

  validateRacingCarName(car) {
    const length = car.length;
    if (length > 5) {
      throw new Error("[ERROR] 차의 이름은 5자 이하만 가능합니다.");
    }
  }
}
