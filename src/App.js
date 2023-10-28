import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGE, ERROR } from './constants/index.js';

class App {
  async play() {
    const CAR = [];
    let candidate = await MissionUtils.Console.readLineAsync(
      MESSAGE.carNameForStart,
    );
    candidate.split(',').forEach(name => {
      if (name.length > 5) {
        throw new Error(ERROR.carNameInputLong);
      }
      CAR.push([name, '']);
    });
    let counts = await MissionUtils.Console.readLineAsync(
      MESSAGE.raceRoundForStart,
    );
    const ROUND = parseInt(counts, 10);
    if (isNaN(ROUND)) {
      throw new Error(ERROR.roundInputNumber);
    }
    MissionUtils.Console.print(ROUND);
  }
}

export default App;
