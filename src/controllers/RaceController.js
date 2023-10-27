import CONFIG from '../constants/config.js';
import RACE_CONSOLE_VIEW from '../views/raceView.js';
import Car from '../models/Car.js';
import createRandomNumber from '../utils/createRandomNumber.js';
import MESSAGES from '../constants/messages.js';

class RaceController {
  #maxRound = 0;

  #currentRound = 0;

  async start() {
    const USER_INPUT_CAR_NAME = await RACE_CONSOLE_VIEW.getUserInputCarName();
    const CAR_LIST = this.createCarList(USER_INPUT_CAR_NAME);

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
}

export default RaceController;
