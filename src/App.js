import { Console } from '@woowacourse/mission-utils';

class App {
  async play() {
    try {
      const carArr = await this.getCarName();
      Console.print(carArr);
    } catch (error) {
      console.error(error.message);
    }
  }

  async getCarName() {
    try {
      const userInput = await Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) : ',
      );
      const carArr = userInput.split(',').map(carName => carName.trim());
      this.validateGetCarName(carArr);
      return carArr;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  validateGetCarName(carArr) {
    if (carArr.length === 0 || carArr.some(carName => carName.length === 0)) {
      throw new Error(
        '[ERROR] 자동차 이름이 입력되지 않았거나 빈 공백이 포함되어 있습니다.',
      );
    }
    if (carArr.some(carName => carName.length > 5)) {
      throw new Error('[ERROR] 자동차 이름이 5글자를 초과했습니다.');
    }
  }
}

export default App;
