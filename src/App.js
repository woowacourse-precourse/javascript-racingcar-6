import InputView from './views/InputView.js';
import ErrorHandler from './utils/ErrorHandler.js';
import { validateCarName } from './Validator.js';

class App {
  constructor() {}

  async play() {
    await this.readCarName();
  }

  async readCarName() {
    const carName = await InputView.readCarName();

    this.validate(carName);
    await this.readTryNumber();
  }

  validate(carName) {
    ErrorHandler(validateCarName, carName);
  }

  async readTryNumber() {
    const tryNumber = await InputView.readTryNumber();
  }
}

export default App;
