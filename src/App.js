import { Console, Random } from '@woowacourse/mission-utils';
import { CarNameValidator } from './validator.js';
import { Car } from './car.js';
import { Race } from './race.js';

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

      const finalWinner = this.getWinners(raceResult);

      this.printFinalWinner(finalWinner);
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
  getWinners(carArray) {
    const finalCarStatus = this.getFinalCarStatus(carArray);
    const maxForwardCount = Math.max(
      ...finalCarStatus.map((car) => car.forwardCount)
    );
    const winnerStatus = finalCarStatus.filter(
      (car) => car.forwardCount === maxForwardCount
    );
    Console.print(winnerStatus);
    const winner = this.getWinnerName(winnerStatus);

    return winner;
  }
  getFinalCarStatus(carArray) {
    return carArray.map((car) => {
      return {
        name: car.getCarName(),
        forwardCount: car.getCarStatus().length,
      };
    });
  }
  getWinnerName(winnerArray) {
    return winnerArray.map((winner) => winner.name);
  }
  printFinalWinner(array) {
    Console.print(`최종 우승자 : ${array.join(', ')}`);
  }
}

export default App;
