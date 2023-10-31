import { Console, Random } from '@woowacourse/mission-utils';
import InputView from './view/inputView';

function checkValidation(input) {
  input.forEach((element) => {
    if (element.length < 1 || element.length > 5) {
      throw new Error('[ERROR] 자동차 이름이 1자 이상 5자 이하여야 합니다.');
    }
  });

  const set = new Set(input);
  if (input.length !== set.size()) {
    throw new Error('[ERROR] 자동차 이름이 중복되었습니다.');
  }
}

class App {
  constructor() {
    this.cars = [];
  }

  async play() {
    await this.getCarName();
  }

  async getCarName() {
    const playerInput = await InputView.readCarName();
    checkValidation(playerInput.split(','));
    await this.getAttemptNumber();
  }

  async getAttemptNumber() {
    const playerInput = await InputView.readAttemptNumber();
  }
}

export default App;
