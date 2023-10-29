import InputView from './InputView.js';
import OutputView from './OutputView.js';
import Validator from '../utils/Validator.js';
import MESSAGE from '../constants/message.js';
import CAR from '../constants/car.js';

class View {
  #inputView = InputView;

  #outputView = OutputView;

  #validator = Validator;

  async readCarName() {
    const userInput = await this.#inputView.readLineAsync(MESSAGE.read.carName);
    const carNames = userInput.split(CAR.name.separator);

    carNames.forEach(this.#validator.validateCarName.bind(this.#validator));

    return carNames;
  }

  print(message) {
    this.#outputView.print(message);
  }
}

export default View;
