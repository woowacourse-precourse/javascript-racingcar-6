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

      let carStatus = carNameArray.map((name) => {
        return { name, status: '' };
      });
      Console.print(carStatus);

      for (let i = 0; i < parseInt(attemptForwardCount); i++) {
        carStatus = carStatus.map((car) => {
          return {
            name: car.name,
            status: this.attepmtMove(car.status),
          };
        });
        Console.print(carStatus);
        carStatus.forEach((car) => {
          Console.print(`${car.name} : ${car.status}`);
        });
        Console.print('\n');
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
  async getUsetInputForwardCount() {
    return await Console.readLineAsync('시도할 횟수는 몇 회인가요?');
  }
  attepmtMove(status) {
    const randomNumber = Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      return status + '-';
    }
    return status;
  }
}

export default App;
