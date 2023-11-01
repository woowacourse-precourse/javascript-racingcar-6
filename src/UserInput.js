import { Console } from '@woowacourse/mission-utils';
import ValidateAttempt from './ValidateAttempt';
import ValidateCarName from './ValidateCarName';

class UserInput {
  constructor() {
    this.validateCarName = new ValidateCarName();
    this.validateAttempt = new ValidateAttempt();
  }

  getCarName = async () => {
    const input = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );

    const cars = input.split(',').map((v) => v.trim());
    this.validateCarName.isValid(cars);

    return cars;
  };

  getAttempts = async () => {
    const input = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    this.validateAttempt.isValidAttempt(input);

    return input;
  };
}

export default UserInput;
