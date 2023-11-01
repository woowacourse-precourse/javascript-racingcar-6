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
      this.validateRacingCarName(input);
    });
  }

  async readRacingAttempt() {
    await InputView.inputRacingAttempt((input) => {
      this.#racingCars.setRacingAttempt(input);
      this.validateRacingAttempt(input);
    });
  }

  validateRacingCarName(car) {
    const length = car.length;
    if (length > 5) {
      throw new Error("[ERROR] 차의 이름은 5자 이하만 가능합니다.");
    }
  }

  validateRacingAttempt(attempt) {
    if (attempt < 1) {
      throw new Error("[ERROR] 시도 횟수는 1이상인 자연수여야 합니다.");
    }
    if (Number.isInteger(attempt)) {
      throw new Error("[ERROR] 시도 횟수는 자연수여야 합니다.");
    }
  }

  showRaceStartMessage() {
    OutputView.printRaceStartMessage();
  }

  showRaceScore(score) {
    OutputView.printRaceScore(score);
  }

  race() {
    const score = this.#racingCars.raceScore;
    score.forEach((item) => {
      const [name, score] = item;
      OutputView.showRaceScore(name, score);
    });
  }
}

export default RacingGameController;
