import { Console } from '@woowacourse/mission-utils';
import Participant from './Participant.js';
import Validate from './Validate.js';

class Input {
  /**
   * 참가자를 입력받고 검증 후 입력값을 리턴하는 함수
   * @returns {Participant[]}
   */
  static async getJoinList() {
    const joinString = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const joinList = joinString.split(',');

    return joinList.map((name) => new Participant(name));
  }

  /**
   * 반복 횟수를 입력받고 검증 후 입력값을 리턴하는 함수
   * @returns {string}
   */
  static async getRepeatNumber() {
    const repeatNumber = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    if (!Validate.isPositiveInteger(this.repeatNumber)) {
      throw new Error('[ERROR]');
    }

    return repeatNumber;
  }
}

export default Input;
