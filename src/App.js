import { Console, Random } from '@woowacourse/mission-utils';
import { CarNameValidator } from './validator.js';

class App {
  async play() {
    try {
      const carNamesString = await this.getUserInputCarNames();
      const validationErrorMessage = CarNameValidator.validate(carNamesString);
      if (validationErrorMessage) {
        throw new Error(validationErrorMessage);
      }

      const carNameArray = carNamesString.split(',');
      const attemptForwardCount = await this.getUsetInputForwardCount();
      Console.print(attemptForwardCount);
      Console.print(carNameArray);

      const carStatus = {};
      carNameArray.forEach((car, idx) => {
        const forwardCount =
          this.generateForwardCountByAttempts(attemptForwardCount);
        carStatus[carNameArray[idx]] = forwardCount;
      });
      Console.print(carStatus);
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
  generateForwardCountByAttempts(number) {
    const randomNumberArray = this.makeRandomNumberArray(number);
    const forwardCount = this.countNumberOverFour(randomNumberArray);
    return forwardCount;
  }
  makeRandomNumberArray(number) {
    return Array(number)
      .fill(0)
      .map((value) => value + Random.pickNumberInRange(0, 9));
  }
  countNumberOverFour(array) {
    return array.filter((value) => value >= 4).length;
  }
}

export default App;
