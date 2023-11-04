import { Console, Random } from '@woowacourse/mission-utils';
import { CarNameValidator } from './validator.js';
import { Car } from './car.js';
import { Race } from './race.js';
import { Winner } from './winner.js';

class App {
  async play() {
    try {
      const carNamesString = await this.getUserInputCarNames();
      const validationErrorMessage = CarNameValidator.validate(carNamesString);
      if (validationErrorMessage) {
        throw new Error(validationErrorMessage);
      }

      const carNameArray = carNamesString.split(',');
      const cars = carNameArray.map((name) => new Car(name));

      const attemptForwardCount = await this.getUsetInputForwardCount();

      const race = new Race(cars, attemptForwardCount);
      const raceResult = race.start();

      const winner = new Winner(raceResult);
      const finalWinner = winner.getWinners();

      winner.printFinalWinner(finalWinner);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getUserInputCarNames() {
    return await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
    );
  }
  async getUsetInputForwardCount() {
    const input = await Console.readLineAsync('시도할 횟수는 몇 회인가요?');
    return parseInt(input, 10);
  }
}

export default App;
