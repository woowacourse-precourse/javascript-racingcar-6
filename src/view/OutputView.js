import { Console } from "@woowacourse/mission-utils";

import { OUTPUT_MESSAGE } from "../constants/io-message.js";

const OutputView = {
  /**
   * Racing의 시작과 함께 실행 결과 안내 메시지를 출력하는 함수
   */
  printRacingStart: () => {
    Console.print(OUTPUT_MESSAGE.ROUND_RESULT);
  },

  /**
   * 현재 Racing 중인 자동차의 전진 거리를 출력하는 함수
   * @param {string} carName 자동차의 이름
   * @param {number} carDistance 자동차의 전진 거리
   */
  printCurrentRacingCar: (carName, carDistance) => {
    Console.print(`${carName} : ${"-".repeat(carDistance)}`);
  },

  /**
   * 줄띄움 함수
   */
  printSpacing: () => {
    Console.print("");
  },

  /**
   * 우승자들을 출력하는 함수
   * @param {string[]} winners 우승자들의 이름이 담긴 배열
   */
  printRacingFinalWinners: (winners) => {
    Console.print(`${OUTPUT_MESSAGE.FINAL_WINNERS} : ${winners}`);
  },
};

export default OutputView;
