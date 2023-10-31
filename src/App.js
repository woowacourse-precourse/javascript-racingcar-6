import InputView from "./view/InputView.js";
import OutputView from './view/OutputView.js';

import Racing from './Racing.js';
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
    const manager = new Racing(refinedCarNames, count, this.data);
  
    OutputView.printProgress(refinedCarNames, manager.result());
    OutputView.printWinner(manager.determineWinner());
  }
  
}

export default App;

let a = new App();
a.play();