import InputView from './views/InputView.js';
import ErrorHandler from './utils/ErrorHandler.js';
import { validateCarName } from './Validator.js';

class App {
  constructor() {}

  async play() {
    const carName = await InputView.readCarName();

    this.validate(carName);
  }

  validate(carName) {
    ErrorHandler(validateCarName, carName);
  }
}

export default App;
