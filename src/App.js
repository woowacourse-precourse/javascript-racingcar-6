import InputView from './views/InputView.js';
import ErrorHandler from './utils/ErrorHandler.js';
import { validateCarName, validateTryNumber } from './Validator.js';

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

  validate(input) {
    if (Array.isArray(input)) {
      ErrorHandler(validateCarName, input);
      return;
    }

    ErrorHandler(validateTryNumber, input);
  }

  async readTryNumber() {
    const tryNumber = await InputView.readTryNumber();

    this.validate(tryNumber);
  }
}

export default App;
