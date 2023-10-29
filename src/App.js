import RacingGame from './controller/RacingGame.js';
import CarModel from './model/CarModel.js';
import ResultModel from './model/ResultModel.js';

class App {
  async play() {
    this.racingGame = new RacingGame(new CarModel(), new ResultModel());
    await this.racingGame.run();
  }
}

export default App;
