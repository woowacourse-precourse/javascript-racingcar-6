import CONFIG from '../constants/config.js';
import RACE_CONSOLE_VIEW from '../views/raceView.js';
import Car from '../models/Car.js';

class RaceController {
  #maxRound = 0;

  #currentRound = 0;

  async start() {
    const USER_INPUT_CAR_NAME = await RACE_CONSOLE_VIEW.getUserInputCarName();
    const CAR_LIST = this.createCarList(USER_INPUT_CAR_NAME);
  }

  createCarList(userInputCarName) {
    return userInputCarName.split(',').map((carName) => new Car(carName));
  }
}

export default RaceController;
