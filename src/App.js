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

    MissionUtils.Console.print(MESSAGE.roundResult);
    for (let i = 0; i < ROUND; i++) {
      CAR.forEach(player => {
        const NAME = player[0];
        let step = player[1];
        if (choiceGoOrStop()) {
          step += '-';
        }
        MissionUtils.Console.print(`${NAME} : ${step}`);
        player[1] = step;
      });
      MissionUtils.Console.print(`\n`);
    }

    function choiceGoOrStop() {
      const DICE = MissionUtils.Random.pickNumberInRange(0, 9);
      if (DICE >= 4) {
        return true;
      } else {
        return false;
      }
    }
  }
}

export default App;
