import { Console } from '@woowacourse/mission-utils';
import { CarNameValidator } from './validator.js';

class App {
  async play() {
    try {
      const carNamesString = await this.getUserInputCarNames();

      const isCarNameLengthValid =
        CarNameValidator.isValidLength(carNamesString);
      const isCarNameUnique = CarNameValidator.isUnique(carNamesString);
      if (!isCarNameLengthValid) {
        throw new Error(
          '[ERROR] 자동차 이름은 1자 이상 5자 이하만 가능합니다.'
        );
      }
      if (!isCarNameUnique) {
        throw new Error('[ERROR] 자동차 이름은 중복이 없어야 합니다.');
      }
      const attemptForwardCount = await this.getUsetInputForwardCount();
      Console.print(attemptForwardCount);
    } catch (error) {
      console.error(error);
    }
  }

  async getUserInputCarNames() {
    return await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분'
    );
  }
  async getUsetInputForwardCount() {
    return await Console.readLineAsync('시도할 횟수는 몇 회인가요?');
  }
}

export default App;
