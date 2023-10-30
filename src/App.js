import RacingGame from './controller/RacingGame.js';
import CarModel from './model/CarModel.js';
import ResultModel from './model/ResultModel.js';
import WinnerModel from './model/WinnerModel.js';

class App {
  async play() {
    this.racingGame = new RacingGame(
      new CarModel(),
      new ResultModel(),
      new WinnerModel(),
    );
    await this.racingGame.run();
  }
}

export default App;
