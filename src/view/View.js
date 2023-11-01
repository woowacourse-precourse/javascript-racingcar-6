import { Console } from '@woowacourse/mission-utils';
import MSG from '../utils/message.js';
import Validation from '../utils/validation.js';

class View {
  async userInputCar() {
    const inputCar = await Console.readLineAsync(MSG.WHAT_ARE_NAMES_OF_CARS);
    const inputCarList = inputCar.split(',');
    Validation.strSize(inputCarList);
    return inputCarList;
  }

  async userInputTimes() {
    const inputTimes = await Console.readLineAsync(MSG.HOW_MANY_TIMES);
    Validation.isItNumber(inputTimes);
    return inputTimes;
  }

  printCarListAsTimes(cars) {
    cars.forEach((car) => {
      Console.print(`${car.name} : ${car.distance}`);
    });
    Console.print('');
  }

  printWinner(winnerList) {
    Console.print(`최종 우승자 : ${winnerList.join(', ')}`);
  }
}

export default View;
