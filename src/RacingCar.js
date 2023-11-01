import { Console, Random } from '@woowacourse/mission-utils';
import strings from './constants.js';
import Referee from './Referee.js';
class RacingCar {
  playRace(inputNumber, carArr) {
    let round = 0;
    const winner = new Referee();
    const attemptNumber = this.wrongNumber(inputNumber);

    Console.print('\n' + strings.RESULT);

    while (round < attemptNumber) {
      carArr.forEach((element) => {
        element.departureCount = this.startOrStop(element.departureCount);
        Console.print(`${element.carName} : ${element.departureCount}`);
      });
      Console.print('\n');
      round += 1;
    }

    Console.print(`${strings.FINAL_WINNER} : ${winner.compareWinner(carArr)}`);
  }

  wrongNumber(inputNumber) {
    if (inputNumber === '') {
      throw new Error(strings.ERROR_MESSAGE_NUMBER_NULL);
    }

    if (Number(inputNumber) <= 0) {
      throw new Error(strings.ERROR_MESSAGE_NUMBER_POSITIVE_NUMBER);
    }

    if (/[^0-9]/.test(inputNumber)) {
      throw new Error(strings.ERROR_MESSAGE_NUMBER_NUMBER);
    }

    Console.print(inputNumber);

    return Number(inputNumber);
  }

  startOrStop(departureCount) {
    const randomNumber = Random.pickNumberInRange(0, 9);

    if (randomNumber >= strings.CONDITION_NUMBER) {
      departureCount += strings.MOVE_FOWORD;
    }

    return departureCount;
  }
}
export default RacingCar;
