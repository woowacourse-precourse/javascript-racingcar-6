import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import RacingGame from "../model/RacingGame.js";
class RacingGameController {
  #racingCars;

  constructor() {}

  async startGame() {
    await this.readRacingCars();
    await this.readRacingAttempt();
    this.showRaceStartMessage();
  }

  async readRacingCars() {
    await InputView.inputRacingCars((input) => {
      this.#racingCars = new RacingGame(input);
      this.validateRacingCarName(this.#racingCars.getRacingCarsName);
    });
  }

  async readRacingAttempt() {
    await InputView.inputRacingAttempt((input) => {
      this.#racingCars.setRacingAttempt(input);
      this.validateRacingAttempt(input);
    });
  }

  showRaceStartMessage() {
    OutputView.printRaceStartMessage();
    this.race();
  }

  validateRacingCarName(cars) {
    cars.forEach((car) => {
      if (car.length > 5) {
        throw new Error("[ERROR] 차의 이름은 5자 이하만 가능합니다.");
      }
    });
  }

  validateRacingAttempt(attempt) {
    if (attempt < 1) {
      throw new Error("[ERROR] 시도 횟수는 1이상인 자연수여야 합니다.");
    }
    if (Number.isInteger(attempt) === false) {
      throw new Error("[ERROR] 시도 횟수는 자연수여야 합니다.");
    }
  }

  checkRaceScore() {
    const score = this.#racingCars.raceScore;
    score.forEach((item) => {
      const [name, score] = item;
      OutputView.printRaceScore(name, score);
    });
  }

  race() {
    for (let i = 0; i < this.#racingCars.getRacingAttempt; i++) {
      this.checkRaceScore();
      OutputView.printNewRound();
    }
  }
}

export default RacingGameController;
