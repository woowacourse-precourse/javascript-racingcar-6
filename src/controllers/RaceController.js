import CONFIG from '../constants/config.js';
import RACE_CONSOLE_VIEW from '../views/raceView.js';
import Car from '../models/Car.js';
import createRandomNumber from '../utils/createRandomNumber.js';
import MESSAGES from '../constants/messages.js';
import throwError from '../utils/throwError.js';
import RaceResult from '../models/RaceResult.js';
import checkNumber from '../utils/checkNumber.js';
import checkString from '../utils/checkString.js';

class RaceController {
  #maxRound = 0;

  #currentRound = 0;

  #raceResult = new RaceResult();

  async start() {
    const USER_INPUT_CAR_NAME = await RACE_CONSOLE_VIEW.getUserInputCarName();
    const carNameList = USER_INPUT_CAR_NAME.split(',');

    RaceController.checkCarNameUserInput(carNameList);

    const carList = RaceController.createCarList(carNameList);

    const TRY_NUMBER = +(await RACE_CONSOLE_VIEW.getUserInputMaxRound());

    RaceController.checkUserInputTryNumber(TRY_NUMBER);

    this.setMaxRound(TRY_NUMBER);

    while (this.#maxRound !== this.#currentRound) {
      const roundResult = [];

      carList.forEach((car) => {
        createRandomNumber(CONFIG.MIN_RANDOM_COUNT, CONFIG.MAX_RANDOM_COUNT) >=
          CONFIG.MINIMUM_CAN_MOVE_FOWARD && car.move();
        // prettier-ignore
        roundResult.push(`${car.name} : ${MESSAGES.ONE_STEP.repeat(car.getMoveCount())}`);
      });

      this.#raceResult.addRoundResult(roundResult);
      this.#currentRound += 1;
    }

    RACE_CONSOLE_VIEW.raceResult(this.#raceResult.getResult());
    RACE_CONSOLE_VIEW.winner(RaceController.findWinner(carList));
  }

  static createCarList(carNameList) {
    return carNameList.map((carName) => new Car(carName));
  }

  async setMaxRound(tryNumber) {
    this.#maxRound = tryNumber;
  }

  static findWinner(carList) {
    // prettier-ignore
    const MAX_MOVE_COUNT = Math.max(...carList.map((car) => car.getMoveCount()));
    return carList
      .filter((car) => car.getMoveCount() === MAX_MOVE_COUNT)
      .map((car) => car.name);
  }

  static checkCarNameUserInput(carList) {
    if (checkString.checkListSameValue(carList)) {
      throwError('중복된 자동차 이름이 있습니다');
    } else if (
      checkString.checkListItemLongerThan(carList, CONFIG.MAX_CAR_NAME_LENGTH)
    ) {
      throwError(`자동차의 이름이 ${CONFIG.MAX_CAR_NAME_LENGTH} 보다 깁니다`);
    } else if (checkString.checkListValueHasSpace(carList)) {
      throwError('공백은 입력하실수 없습니다');
    } else if (checkString.checkListHasVoid(carList)) {
      throwError(`이름이 존재하지 않는 차가 있습니다`);
    } else if (
      !checkString.checkListLengthLongerThan(carList, CONFIG.MIN_CAR_COUNT - 1)
    ) {
      throwError(`자동차는 최소 ${CONFIG.MIN_CAR_COUNT}대이상 입력해주세요`);
    }
  }

  static checkUserInputTryNumber(userInput) {
    if (!checkNumber.checkNumberType(userInput)) {
      throwError(
        '입력값이 잘못된 형식입니다. 정수로 이루어진 숫자만 입력해주세요'
      );
    } else if (!checkNumber.checkGreaterThan(userInput, 0)) {
      throwError('1 이상의 값을 입력해주세요');
    }
  }
}

export default RaceController;
