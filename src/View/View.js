import InputView from './InputView.js';
import OutputView from './OutputView.js';
import Validator from '../utils/Validator.js';

class View {
  #inputView = InputView;

  #outputView = OutputView;

  #validator = Validator;

  /**
   * 사용자의 입력을 받는 메서드들의 공통된 로직을 처리하는 메서드
   * @param {string} message
   * @param {() => void} validator
   * @returns {Promise<string>}
   */
  async readUserInput(message, validator) {
    const userInput = await this.#inputView.readLineAsync(message);
    validator(userInput);

    return userInput;
  }
}

export default View;
