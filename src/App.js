import UserInput from '../src/Input/UserInput.js';
import RaceResult from '../src/RaceGame/RaceResult.js';

class App {
  constructor() {
    this.userInput = new UserInput();
    this.raceGame = new RaceResult();
  }

  async play() {
    const cars = await this.userInput.getCarName();
    const input = await this.userInput.getAttempts();

    this.raceGame.getRaceResult(cars, input);
  }
}

export default App;
