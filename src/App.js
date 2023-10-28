import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGE, ERROR } from './constants/index.js';

class App {
  async play() {
    const CARS = await this.getCarNames();
    const ROUNDS = await this.getNumberOfRounds();

    MissionUtils.Console.print(MESSAGE.roundResult);
    for (let i = 0; i < ROUNDS; i++) {
      CARS.forEach(player => {
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

    let winner = '';
    let distance = 0;
    CARS.forEach(player => {
      if (player[1].length > distance) {
        winner = player[0];
        distance = player[1].length;
      } else if (player[1].length === distance) {
        winner += `, ${player[0]}`;
      }
    });
    MissionUtils.Console.print(`${MESSAGE.winnerResult}${winner}`);

    function choiceGoOrStop() {
      const DICE = MissionUtils.Random.pickNumberInRange(0, 9);
      if (DICE >= 4) {
        return true;
      } else {
        return false;
      }
    }
  }

  async getCarNames() {
    const CARS = [];
    const NAMES = await MissionUtils.Console.readLineAsync(
      MESSAGE.carNameForStart,
    );
    NAMES.split(',').forEach(name => {
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
