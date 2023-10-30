import User from '../cargame/User.js';
import { RaceSimulator } from '../cargame/CarRacing.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import Winner from '../cargame/Winner.js';
import { MESSAGES } from '../constants/message.js';

class App {
  async play() {
    const user = new User();
    await user.getCarNames();
    await user.getTryNumber();

    const carNames = user.carNames;
    const tryNumber = user.tryNumber;

    MissionUtils.Console.print(MESSAGES.RESULT_TITLE);

    const raceSimulator = new RaceSimulator(carNames);
    raceSimulator.simulateRace(tryNumber);

    const raceResults = raceSimulator.getRaceResults();

    raceResults.forEach((result) => {
      MissionUtils.Console.print(result + '\n');
    });

    const lastRaceResult = raceResults[raceResults.length - 1];

    const winnersCalculator = new Winner();
    const winnerNames = winnersCalculator.calculateWinners(lastRaceResult);

    if (winnerNames.length > 1) {
      return MissionUtils.Console.print(
        MESSAGES.WINNER_LABEL + winnerNames.join(', '),
      );
    }
    return MissionUtils.Console.print(MESSAGES.WINNER_LABEL + winnerNames[0]);
  }
}

export default App;
