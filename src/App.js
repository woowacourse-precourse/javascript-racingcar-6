import Game from './Game.js';
import { NamesException, AttemptsException } from './UserInputExcpetion.js';

class App {
  async play() {
    let racingCars = new Map();
    const carNames = await NamesException();
    const attempts = await AttemptsException();
    Game(carNames, attempts, racingCars);
  }
}

export default App;
