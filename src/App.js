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
    MissionUtils.Console.print(CAR);
  }
}

export default App;
