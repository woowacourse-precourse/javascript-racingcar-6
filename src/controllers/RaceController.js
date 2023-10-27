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
    const CAR_LIST = this.createCarList(USER_INPUT_CAR_NAME);
    this.checkCarNameUserInput(CAR_LIST);

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
    RACE_CONSOLE_VIEW.winner(this.findWinner(CAR_LIST));
  }

  findWinner(carList) {
    const MAX_MOVE_COUNT = Math.max(
      ...carList.map((car) => car.getMoveCount())
    );
    return carList
      .filter((car) => car.getMoveCount() === MAX_MOVE_COUNT)
      .map((car) => car.name);
  }

  createCarList(userInputCarName) {
    return userInputCarName.split(',').map((carName) => new Car(carName));
  }

  async setMaxRound() {
    this.#maxRound = +(await RACE_CONSOLE_VIEW.getUserInputMaxRound());
  }

  checkSameCarName(carList) {
    return (
      Array.from(new Set(carList.map((car) => car.name))).length !==
      carList.length
    );
  }

  checkCarNameLength(carList) {
    return (
      carList.filter((car) => car.name.length > CONFIG.MAX_CAR_NAME_LENGTH)
        .length > 0
    );
  }

  checkCarNameVoid(carList) {
    return carList.filter((car) => car.name === '').length > 0;
  }

  checkCarNameUserInput(carList) {
    if (this.checkSameCarName(carList)) {
      throwError('중복된 자동차 이름이 있습니다');
    }
    if (this.checkCarNameLength(carList)) {
      throwError(`자동차의 이름이 ${CONFIG.MAX_CAR_NAME_LENGTH} 보다 깁니다`);
    }
    if (this.checkCarNameVoid(carList)) {
      throwError(`이름이 존재하지 않는 차가 있습니다`);
    }
  }
}

export default RaceController;
