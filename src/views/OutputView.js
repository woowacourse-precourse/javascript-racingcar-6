import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE_METHOD, OUTPUT_MESSAGE_TEXT } from '../constants/messages.js';

const OutputView = {
  /**
   * 주어진 메시지를 출력하기 위한 추상화 된 메서드
   * @param {string} message - 출력할 메시지
   */
  print(message) {
    Console.print(message);
  },

  /**
   * @public
   * @param {import('../utils/jsDoc.js').RacingGameResult} racingGameResult - 자동차 경주 게임의 결과 객체
   * @returns {void}
   */
  printRacingGameResult({ racingResult, racingWinners }) {
    this.print(OUTPUT_MESSAGE_TEXT.gameResultTitle);
    this.print(OUTPUT_MESSAGE_METHOD.racingResult(racingResult));
    this.print(OUTPUT_MESSAGE_METHOD.racingWinners(racingWinners));
  },
};

export default OutputView;
