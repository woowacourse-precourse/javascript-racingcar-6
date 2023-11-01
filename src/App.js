import UserInput from './UserInput';
import RaceResult from './RaceResult';

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
