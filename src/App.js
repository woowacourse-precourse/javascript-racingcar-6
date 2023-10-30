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

    const lastRaceResult = raceResults[raceResults.length - 1];
    const lastCarResults = lastRaceResult.split('\n').map((line) => {
      const [name, position] = line.split(' : ');
      return { name, position };
    });

    const maxPositionCount = Math.max(
      ...lastCarResults.map((car) => car.position.split('-').length - 1),
    );
    const winners = lastCarResults.filter(
      (car) => car.position.split('-').length - 1 === maxPositionCount,
    );
    const winnerNames = winners.map((winner) => winner.name);

    if (winners.length > 1) {
      MissionUtils.Console.print('최종 우승자 : ' + winnerNames.join(', '));
    } else {
      MissionUtils.Console.print('최종 우승자 : ' + winnerNames[0]);
    }
  }
}

export default App;
