import RacingGame from './Controller/RacingGame.js';
import CarModel from './Model/CarModel.js';
import ResultModel from './Model/ResultModel.js';
import WinnerModel from './Model/WinnerModel.js';

class App {
  async play() {
    this.racingGame = new RacingGame(new CarModel(), new ResultModel(), new WinnerModel());
    await this.racingGame.run();
  }
}

export default App;
