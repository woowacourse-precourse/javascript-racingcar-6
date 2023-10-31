import { Console, Random } from '@woowacourse/mission-utils';
import InputView from './view/inputView';
import checkValidation from './utils/validation';

class App {
  constructor() {
    this.cars = [];
  }

  async play() {
    await this.getCarName();
  }

  async getCarName() {
    const playerInput = await InputView.readCarName();
    checkValidation.nameInput(playerInput.split(','));
    await this.getAttemptNumber();
  }

  async getAttemptNumber() {
    const playerInput = await InputView.readAttemptNumber();
    checkValidation.attemptInput(playerInput);
  }
}

export default App;
