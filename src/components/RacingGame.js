import { INPUT_MESSAGE, OUTPUT_MESSAGE, ERROR_MESSAGE, OTHERS } from '../utils/constants.js';
import { Console } from '@woowacourse/mission-utils';
import { Random } from '@woowacourse/mission-utils';

class RacingGame {
  constructor() {
    this.userInputCarNameList = null;
    this.userInputCarCount = null;
    this.userInputTryCount = null;
    this.randomNumberForRace = null;
    this.allRaceForAllCar = [];
    this.raceResultMessage = OTHERS.empty;
    this.raceWinnerMessage = null;
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
    const IS_VALID = (
      typeof this.userInputTryCount === OTHERS.number &&
      this.userInputTryCount >= 0 &&
      Math.floor(this.userInputTryCount) === this.userInputTryCount
    );

    if (!IS_VALID) {
      throw new Error(ERROR_MESSAGE.input);
    }

    return IS_VALID;
  }

  // VIEW
  showGameResult() {
    this.gameCalculate();

    Console.print(OUTPUT_MESSAGE.result);
    Console.print(this.raceResultMessage);
    Console.print(`${OUTPUT_MESSAGE.winner}${this.raceWinnerMessage}`);
  }

  // CONTROLLER
  gameCalculate() {
    this.generateRandomNumber();

    this.runRace();

    this.getRaceResultMessage();

    this.getWinnerMessage();
  }

  //MODEL
  generateRandomNumber() {
    this.randomNumberForRace = Array.from({ length: this.userInputTryCount }, () => {
      return Array.from({ length: this.userInputCarCount }, () => {
        return Random.pickNumberInRange(0, 9);
      });
    });
  }

  // MODEL
  runRace() {
    function moveCar(randomNumberForMove) {
      return randomNumberForMove > OTHERS.baseNum ? true : false;
    }

    for (let i = 0; i < this.userInputCarCount; i++) {
      let eachRacePerCar = OTHERS.empty;
      const allRacePerCar = [];

      for (let j = 0; j < this.userInputTryCount; j++) {
        moveCar(this.randomNumberForRace[j][i])
          ? (eachRacePerCar += OTHERS.dash)
          : (eachRacePerCar += OTHERS.empty);
        allRacePerCar.push(eachRacePerCar);
      }

      this.allRaceForAllCar.push(allRacePerCar);
    }
  }

  //MODEL
  getRaceResultMessage() {
    for (let i = 0; i < this.userInputTryCount; i++) {
      for (let j = 0; j < this.userInputCarCount; j++) {
        this.raceResultMessage += `${this.userInputCarNameList[j]} ${OTHERS.colon} ${this.allRaceForAllCar[j][i]}${OTHERS.lineBreak}`;
      }

      if (i < this.userInputTryCount - 1) {
        this.raceResultMessage += OTHERS.lineBreak;
      }
    }
  }

  //MODEL
  getWinnerMessage() {
    const objForLastRace = {};

    this.allRaceForAllCar.forEach((racePerCar, index) => {
      if (racePerCar[this.userInputTryCount - 1]) {
        objForLastRace[this.userInputCarNameList[index]] = (
          racePerCar[this.userInputTryCount - 1].length
        );
      }
    });

    this.raceWinnerMessage = Object.keys(objForLastRace)
      .filter((key) => objForLastRace[key] === Math.max(...Object.values(objForLastRace)))
      .join(OTHERS.commaWithSpace);
  }
}

export default RacingGame;
