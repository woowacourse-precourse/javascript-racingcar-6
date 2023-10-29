import CONFIG from '../constants/config.js';
import RACE_CONSOLE_VIEW from '../views/raceView.js';
import Car from '../models/Car.js';
import createRandomNumber from '../utils/createRandomNumber.js';
import MESSAGES from '../constants/messages.js';
import throwError from '../utils/throwError.js';

class RaceController {
  #maxRound = 0;

  #currentRound = 0;

  async start() {
    const USER_INPUT_CAR_NAME = await RACE_CONSOLE_VIEW.getUserInputCarName();
    const CAR_NAME_LIST = USER_INPUT_CAR_NAME.split(',');
    RaceController.checkCarNameUserInput(CAR_NAME_LIST);
    const CAR_LIST = RaceController.createCarList(CAR_NAME_LIST);
    await this.setMaxRound();

    const raceResults = [];
    while (this.#maxRound !== this.#currentRound) {
      const roundResults = [];

      CAR_LIST.forEach((car) => {
        createRandomNumber() >= CONFIG.MINIMUM_CAN_MOVE_FOWARD && car.move();
        // prettier-ignore
        roundResults.push(`${car.name} : ${MESSAGES.ONE_STEP.repeat(car.getMoveCount())}`);
      });

      raceResults.push(roundResults);
      this.#currentRound += 1;
    }

    RACE_CONSOLE_VIEW.raceResult(raceResults);
    RACE_CONSOLE_VIEW.winner(RaceController.findWinner(CAR_LIST));
  }

  static createCarList(carNameList) {
    return carNameList.map((carName) => new Car(carName));
  }

  async setMaxRound() {
    this.#maxRound = +(await RACE_CONSOLE_VIEW.getUserInputMaxRound());
  }

  static findWinner(carList) {
    // prettier-ignore
    const MAX_MOVE_COUNT = Math.max(...carList.map((car) => car.getMoveCount()));
    return carList
      .filter((car) => car.getMoveCount() === MAX_MOVE_COUNT)
      .map((car) => car.name);
  }

  static checkSameCarName(carNameList) {
    return (
      Array.from(new Set(carNameList.map((car) => car))).length !==
      carNameList.length
    );
  }

  static checkCarNameLength(carNameList) {
    return (
      carNameList.filter((car) => car.length > CONFIG.MAX_CAR_NAME_LENGTH)
        .length > 0
    );
  }

  static checkCarNameVoid(carNameList) {
    return carNameList.filter((car) => car === '').length > 0;
  }

  static checkCarNameUserInput(carList) {
    if (RaceController.checkSameCarName(carList)) {
      throwError('중복된 자동차 이름이 있습니다');
    }
    if (RaceController.checkCarNameLength(carList)) {
      throwError(`자동차의 이름이 ${CONFIG.MAX_CAR_NAME_LENGTH} 보다 깁니다`);
    }
    if (RaceController.checkCarNameVoid(carList)) {
      throwError(`이름이 존재하지 않는 차가 있습니다`);
    }
  }
}

export default RaceController;
