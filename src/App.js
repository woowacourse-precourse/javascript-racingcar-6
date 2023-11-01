import { UserInputCarNames } from './Game/UserInputCarNames.js';
import { UserInputRounds } from './Game/UserInputRounds.js';
import { Race } from './Game/Race.js';

class App {
  async play() {
    const CARS = await UserInputCarNames.getCarNames();
    const ROUNDS = await UserInputRounds.getNumberOfRounds();
    const RACE = new Race(CARS, ROUNDS);
    RACE.runRace();
  }
}

export default App;
