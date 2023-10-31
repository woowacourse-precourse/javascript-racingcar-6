import InputView from "./view/InputView.js";
import OutputView from './view/OutputView.js';

import RacingManager from './RacingManager.js';
import Data from './Data.js';
import ErrorHandler from './ErrorHandler.js';

class App {
  constructor() {
    this.data = new Data();
  }

  async play() {
    const carNames = await InputView.getCarNames();
    ErrorHandler.carNamesType(carNames);
    const count = await InputView.getAttemptsCount();
    ErrorHandler.countType(count);
  
    const refinedCarNames = this.data.carNamesTypeConversion(carNames);
    const manager = new RacingManager(refinedCarNames, count, this.data);
  
    OutputView.racingProgress(refinedCarNames, manager.racingResult());
    OutputView.printWinner(manager.determineWinner());
  }
  
}

export default App;

let a = new App();
a.play();