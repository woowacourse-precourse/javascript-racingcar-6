import { Console } from '@woowacourse/mission-utils';
class RacingCar {
  playRace(inputNumber) {
    const attemptNumber = this.wrongNumber(inputNumber);
    Console.print(attemptNumber);
  }

  wrongNumber(inputNumber) {
    if (inputNumber === '') {
      throw new Error('[ERROR] 시도할 횟수를 입력해주세요.');
    }

    if (Number(inputNumber) <= 0) {
      throw new Error('[ERROR] 0보다 큰 값을 입력해주세요.');
    }

    if (/[^0-9]/.test(inputNumber)) {
      throw new Error('[ERROR] 숫자를 입력해주세요.');
    }

    return Number(inputNumber);
  }
}
export default RacingCar;
