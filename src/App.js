import RacingGame from './Controller/RacingGame';
import CarModel from './Model/CarModel';
import ResultModel from './Model/ResultModel';
import WinnerModel from './Model/WinnerModel';

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
