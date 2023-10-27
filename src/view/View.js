import { Console } from '@woowacourse/mission-utils';
import Validation from './validation.js';

export default class View extends Validation {
  static async readCarNames() {
    const carNames = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요(이름은 쉼표(,) 기준으로 구분)\n'
    );
    const carNamesToArray = carNames.split(',');
    /**
     * validation 체크 내용 추가
     * ex) 이름이 5자 이상인 경우, 이름에 특수문자가 포함된 경우
     */
    return carNamesToArray;
  }

  static async readRepeatTime() {
    const repeatTime =
      await Console.readLineAsync('시도할 회수는 몇회인가요?\n');
    /**
     * validation 체크 내용 추가
     * ex) 0 이하의 숫자가 입력된 경우, 숫자가 아닌 문자가 입력된 경우
     */
    return parseInt(repeatTime, 10);
  }

  static print(message) {
    Console.print(message);
  }
}
