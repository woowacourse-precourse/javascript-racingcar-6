import { Console } from '@woowacourse/mission-utils';

const ERROR_MESSAGE = '[ERROR]';
const ERROR_MESSAGES = {
  OVER_MAX_NAME: `${ERROR_MESSAGE} 자동차 이름이 5글자를 초과했습니다.`,
  NO_NAME: `${ERROR_MESSAGE} 이름이 입력되지 않았습니다.`,
};

class App {
  async getUserInput() {
    const userInput = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    return userInput.split(',');
  }

  checkInputValid(array) {
    for (let name of array) {
      if (name.length > 5) {
        throw new Error(ERROR_MESSAGES.OVER_MAX_NAME);
      } else if (name.length === 0) {
        throw new Error(ERROR_MESSAGES.NO_NAME);
      }
    }
  }

  async play() {
    const names = await this.getUserInput();
    this.checkInputValid(names);
  }
}

export default App;
