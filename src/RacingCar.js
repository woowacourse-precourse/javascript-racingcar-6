import { Console, Random } from '@woowacourse/mission-utils';
import strings from './constants.js';
import Referee from './Referee.js';

class RacingCar {
  constructor() {
    this.round = 0;
    this.carArray = [];
  }

  playRace(inputNumber, carArray) {
    const winner = new Referee();
    const attemptNumber = RacingCar.wrongNumber(inputNumber);
    this.carArray = carArray;

    Console.print(`\n ${strings.RESULT}`);

    while (this.round < attemptNumber) {
      this.carArray = this.playRound();

      this.carArray.forEach((carElement) => {
        Console.print(`${carElement.carName} : ${carElement.departureCount}`);
      });

      Console.print('\n');

      this.round += 1;
    }

    Console.print(
      `${strings.FINAL_WINNER} :${winner.compareWinner(this.carArray)}`,
    );
  }

  static wrongNumber(inputNumber) {
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

  static startOrStop(departureCount) {
    const randomNumber = Random.pickNumberInRange(0, 9);
    let foword = departureCount;

    if (randomNumber >= strings.CONDITION_NUMBER) {
      foword += strings.MOVE_FOWORD;
    }

    return foword;
  }

  playRound() {
    const newCarArray = this.carArray.map((carElement) => {
      const carElementCopy = { ...carElement };
      carElementCopy.departureCount = RacingCar.startOrStop(
        carElementCopy.departureCount,
      );

      return carElementCopy;
    });

    return newCarArray;
  }
}
export default RacingCar;
