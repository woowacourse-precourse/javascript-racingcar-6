import Car from './Car.js';
import GameUtils from './GameUtils.js';
import IOManager from './IOManager.js';

class RacingCarGame {
  #cars;

  static #MESSAGE = Object.freeze({
    GET_CAR_NAMES:
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    GET_TRY_COUNT: '시도할 횟수는 몇 회인가요?\n',
    RESULT: '\n실행 결과',
    NEW_LINE: '',
    DISPLAY_CURRENT_PROGRESS: (car) => {
      return `${car.getName()} : ${'-'.repeat(car.getStep())}`;
    },
    WINNER_ANNOUNCEMENT: (winnerNames) => {
      return `최종 우승자: ${winnerNames}`;
    },
  });

  static #ERROR_MESSAGE = Object.freeze({
    EMPTY_INPUT: '[ERROR] 입력이 없습니다.',
    INVALID_CAR_NAME: '[ERROR] 자동차 이름은 공백이 될 수 없습니다.',
    INVALID_CAR_NAME_LENGTH: '[ERROR] 자동차 이름은 5자 이하만 가능합니다.',
    INVALID_TRY_COUNT: '[ERROR] 숫자가 아닙니다.',
    INVALID_TRY_COUNT_RANGE: '[ERROR] 시도 횟수는 1보다 작을 수 없습니다.',
  });

  constructor() {
    this.#cars = [];
  }

  async #getCarNames() {
    const carNames = await IOManager.input(
      RacingCarGame.#MESSAGE.GET_CAR_NAMES
    );
    this.#validateCarNames(carNames);
    return carNames;
  }

  #validateCarNames(carNames) {
    if (carNames === '') {
      throw new Error(RacingCarGame.#ERROR_MESSAGE.EMPTY_INPUT);
    }

    const carNameList = carNames.split(',');

    carNameList.forEach((carName) => {
      if (carName.trim().length === 0) {
        throw new Error(RacingCarGame.#ERROR_MESSAGE.INVALID_CAR_NAME);
      }

      if (carName.trim().length > 5) {
        throw new Error(RacingCarGame.#ERROR_MESSAGE.INVALID_CAR_NAME_LENGTH);
      }
    });
  }

  #createCarObjectsFromNames(carNames) {
    const carNameList = carNames.split(',');

    carNameList.forEach((carName) => {
      this.#cars.push(new Car(carName.trim()));
    });
  }

  async #getTryCount() {
    const tryCount = await IOManager.input(
      RacingCarGame.#MESSAGE.GET_TRY_COUNT
    );
    this.#validateTryCount(tryCount);
    return parseInt(tryCount);
  }

  #validateTryCount(tryCount) {
    if (tryCount === '') {
      throw new Error(RacingCarGame.#ERROR_MESSAGE.EMPTY_INPUT);
    }

    if (isNaN(tryCount)) {
      throw new Error(RacingCarGame.#ERROR_MESSAGE.INVALID_TRY_COUNT);
    }

    if (parseInt(tryCount) < 1) {
      throw new Error(RacingCarGame.#ERROR_MESSAGE.INVALID_TRY_COUNT_RANGE);
    }
  }

  #decideToMove(car) {
    const randomNumber = GameUtils.getRandomNumberInRange(0, 9);

    if (randomNumber >= 4) {
      car.move(1);
    }
  }

  #displayCurrentProgress(car) {
    IOManager.output(RacingCarGame.#MESSAGE.DISPLAY_CURRENT_PROGRESS(car));
  }

  #getWinners() {
    const maxStep = this.#cars.reduce((maxStep, car) => {
      return Math.max(maxStep, car.getStep());
    }, 0);

    return this.#cars.filter((car) => car.getStep() === maxStep);
  }

  #displayResult(winners) {
    const winnerNames = winners.map((winner) => winner.getName()).join(', ');
    IOManager.output(RacingCarGame.#MESSAGE.WINNER_ANNOUNCEMENT(winnerNames));
  }

  async start() {
    try {
      const carNames = await this.#getCarNames();
      this.#createCarObjectsFromNames(carNames);
      const tryCount = await this.#getTryCount();

      IOManager.output(RacingCarGame.#MESSAGE.RESULT);
      for (let i = 0; i < tryCount; i++) {
        this.#cars.forEach((car) => {
          this.#decideToMove(car);
          this.#displayCurrentProgress(car);
        });
        IOManager.output(RacingCarGame.#MESSAGE.NEW_LINE);
      }

      const winners = this.#getWinners();
      this.#displayResult(winners);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default RacingCarGame;
