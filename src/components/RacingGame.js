import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE, OUTPUT_MESSAGE, OTHERS } from '../utils/constants.js';

class RacingGame {
  constructor() {
    this.userInputCarNameList = null;
    this.userInputCarCount = null;
    this.userInputTryCount = null;
  }

  // CONTROLLER
  async start() {
    await this.getUserInput();
  }

  // VIEW
  async getUserInput() {
    const USER_INPUT_CAR_NAME = await Console.readLineAsync(INPUT_MESSAGE.carName);
    const USER_INPUT_TRY_COUNT = await Console.readLineAsync(INPUT_MESSAGE.tryCount);

    this.userInputCarNameList = USER_INPUT_CAR_NAME.split(OTHERS.comma);
    this.userInputCarCount = this.userInputCarNameList.length;
    this.userInputTryCount = Number(USER_INPUT_TRY_COUNT);

    this.validateUserInputCarName();
    this.validateUserInputTryCount();

    this.showGameResult();
  }

  // MODEL
  validateUserInputCarName() {
    const IS_VALID = this.userInputCarNameList.every(
      (carName) => carName.length <= 5 && carName.length > 0
    );

    if (!IS_VALID) {
      throw new Error(ERROR_MESSAGE.input);
    }

    return IS_VALID;
  }

  // MODEL
  validateUserInputTryCount() {
    // = 주위에서 줄바꿈 X -> 나중에 소괄호로 묶기
    const IS_VALID =
      typeof this.userInputTryCount === OTHERS.number &&
      this.userInputTryCount >= 0 &&
      Math.floor(this.userInputTryCount) === this.userInputTryCount;

    if (!IS_VALID) {
      throw new Error(ERROR_MESSAGE.input);
    }

    return IS_VALID;
  }

  // VIEW
  showGameResult() {
    this.gameCalculate();
  }

  // CONTROLLER
  gameCalculate() {
    this.generateRandomNumber();

    this.runRace();

    this.getRaceResultMessage();

    this.getWinnerMessage();
  }

  //MODEL
  generateRandomNumber() {}

  // MODEL
  runRace() {}

  //MODEL
  getRaceResultMessage() {}

  //MODEL
  getWinnerMessage() {}
}

export default RacingGame;
