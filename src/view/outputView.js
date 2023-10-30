import { Console } from '@woowacourse/mission-utils';
import { RACING_MESSAGE } from '../constants/constants.js';

const outputView = {
  /** 공백 출력 */
  printSpace() {
    Console.print(RACING_MESSAGE.SPACE);
  },
  /** 실행 결과 코멘트 출력 */
  printRacingComment() {
    Console.print(RACING_MESSAGE.RACING_RESULT);
  },
  /**
   * 레이싱 결과 출력하는 함수
   * @param {{carName:string, carPosition:number}}
   */
  printRacing({ carName, carPosition }) {
    Console.print(`${carName} : ${'-'.repeat(carPosition)}`);
  },
  /**
   * 승자 출력하는 함수
   * @param {string} winner
   */
  printWinner(winner) {
    Console.print(RACING_MESSAGE.WINNER + winner);
  },
};

export default outputView;
