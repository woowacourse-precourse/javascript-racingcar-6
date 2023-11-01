import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGE, ERROR } from './constants/index.js';
import { Race } from './Game/Race.js';
import { UserInputCarNames } from './Game/UserInputCarNames.js';

class App {
  async play() {
    const CARS = await UserInputCarNames.getCarNames();
    const ROUNDS = await this.getNumberOfRounds();
    const RACE = new Race(CARS, ROUNDS);
    RACE.runRace();
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
