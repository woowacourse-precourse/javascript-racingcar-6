import { Console } from '@woowacourse/mission-utils';
import Participant from './Participant.js';
import Validate from './Validate.js';
import { PROMPT } from './constant.js';

class Input {
  /**
   * 참가자를 입력받고 검증 후 입력값을 리턴하는 함수
   * @returns {Participant[]}
   */
  static async getJoinList() {
    const joinString = await Console.readLineAsync(PROMPT.joinList);
    const joinList = joinString.split(',').map((string) => string.trim());
    joinList.forEach((joinItem) => Validate.checkJoinItem(joinItem));

    return joinList.map((name) => new Participant(name));
  }

  /**
   * 반복 횟수를 입력받고 검증 후 입력값을 리턴하는 함수
   * @returns {string}
   */
  static async getRepeatNumber() {
    const repeatNumber = await Console.readLineAsync(PROMPT.repeatNumber);
    Validate.checkRepeatNumber(repeatNumber);

    return repeatNumber;
  }
}

export default Input;
