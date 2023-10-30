import InputView from '../view/InputView.js';

export default class Controller {
  async run() {
    const carNames = await InputView.carName();
    const carNameList = carNames.split(',');
  }
}
