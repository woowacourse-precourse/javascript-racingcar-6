import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGE, ERROR } from './constants/index.js';
import { Race } from './Game/Race.js';

class App {
  async play() {
    const CARS = await this.getCarNames();
    const ROUNDS = await this.getNumberOfRounds();
    const RACE = new Race(CARS, ROUNDS);
    RACE.runRace();
  }

  async getCarNames() {
    const CARS = [];
    const NAMES = await MissionUtils.Console.readLineAsync(
      MESSAGE.carNameForStart,
    );
    NAMES.split(',').forEach((name) => {
      if (name.length > 5) {
        throw new Error(ERROR.carNameInputLong);
      }
      CARS.push([name, '']);
    });
    return CARS;
  }

  async getNumberOfRounds() {
    const COUNTS = await MissionUtils.Console.readLineAsync(
      MESSAGE.raceRoundForStart,
    );
    const ROUNDS = parseInt(COUNTS, 10);
    if (isNaN(ROUNDS)) {
      throw new Error(ERROR.roundInputNumber);
    }
    return ROUNDS;
  }
}

export default App;
