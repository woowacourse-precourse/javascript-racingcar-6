import { Console } from '@woowacourse/mission-utils';

const ERROR_MESSAGE = '[ERROR]';
const ERROR_MESSAGES = {
  OVER_MAX_NAME: `${ERROR_MESSAGE} 자동차 이름이 5글자를 초과했습니다.`,
  NO_NAME: `${ERROR_MESSAGE} 이름이 입력되지 않았습니다.`,
  INVALID_NUMBER: `${ERROR_MESSAGE} 숫자가 잘못된 형식입니다.`,
  NO_INTEGER: `${ERROR_MESSAGE} 1 이상의 정수를 입력해주세요.`,
};

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }
}

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

  async getCounts() {
    return parseInt(
      await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n')
    );
  }

  checkCountValid(number) {
    if (isNaN(number)) {
      console.log('여기');
      throw new Error(ERROR_MESSAGES.INVALID_NUMBER);
    } else if (!Number.isInteger(number) || number <= 0) {
      throw new Error(ERROR_MESSAGES.NO_INTEGER);
    } else {
      return number;
    }
  }

  createCars(names) {
    return names.map(name => new Car(name));
  }

  async play() {
    const names = await this.getUserInput();
    this.checkInputValid(names);
    const count = await this.getCounts();
    this.checkCountValid(count);
    const cars = this.createCars(names);
  }
}

export default App;
