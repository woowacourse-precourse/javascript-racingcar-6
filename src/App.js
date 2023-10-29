import User from '../cargame/User.js';
import { RaceSimulator } from '../cargame/CarRacing.js';
import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async play() {
    const user = new User();
    await user.getCarNames();
    await user.getTryNumber();

    const carNames = user.carNames;
    const tryNumber = user.tryNumber;

    MissionUtils.Console.print(' ');
    MissionUtils.Console.print('실행 결과');

    const raceSimulator = new RaceSimulator(carNames);
    raceSimulator.simulateRace(tryNumber);

    const raceResults = raceSimulator.getRaceResults();

    raceResults.forEach((result) => {
      MissionUtils.Console.print(result);
      MissionUtils.Console.print(' ');
    });
  }
}

export default App;
