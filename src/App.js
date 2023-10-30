import { Console } from '@woowacourse/mission-utils';
import { CarNameValidator } from './validator.js';
class App {
  async play() {
    try {
      const carNamesString = await this.getUserInputCarNames();

      const isCarNamesValid = CarNameValidator.isValid(carNamesString);
      if (!isCarNamesValid) {
        throw new Error('[ERROR] 자동차 이름은 5자 이하만 가능합니다. ');
        return;
      }
    } catch (error) {
      console.error(error);
    }
  }

  async getUserInputCarNames() {
    return await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분'
    );
  }
}

export default App;
