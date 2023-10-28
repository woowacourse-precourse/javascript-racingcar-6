import RacingGame from './Controller/RacingGame.js';
import CarModel from './Model/CarModel.js';
import ResultModel from './Model/ResultModel.js';

class App {
  async play() {
    this.racingGame = new RacingGame(new CarModel(), new ResultModel());
    await this.racingGame.start();
  }
}

export default App;
