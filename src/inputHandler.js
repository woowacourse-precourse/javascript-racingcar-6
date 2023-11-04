import { Console } from '@woowacourse/mission-utils';
import { Car } from './car.js';

export class InputHandler {
  static async getUserInputCarNames() {
    return await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
    );
  }

  static async getUserInputForwardCount() {
    const input = await Console.readLineAsync('시도할 횟수는 몇 회인가요?');
    return parseInt(input, 10);
  }
}
