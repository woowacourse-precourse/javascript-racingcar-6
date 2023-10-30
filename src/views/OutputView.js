import { Console } from '@woowacourse/mission-utils'
import { GAME_MESSAGE, GAME_RULE } from '../constants/index.js'

const OutputView = {
  /**
   * 실행 결과를 출력한다.
   */
  printResult: () => {
    Console.print(GAME_MESSAGE.OUTPUT_RESULT)
  },

  /**
   * 한번의 시도 결과를 출력한다.
   * @param {string} carName - 자동차 이름
   * @param {number} distance - 이동한 거리
   */
  printCarResult: (carName, distance) => {
    Console.print(`${carName} : ${GAME_RULE.DELIMITER_FOR_FORWARD.repeat(distance)}`)
  },

  /**
   * 최종 우승자를 출력한다.
   * @param {string[]} winnerNameList - 최종 우승자 리스트
   */
  printWinner: (winnerNameList) => {
    Console.print(GAME_MESSAGE.OUTPUT_WINNER + winnerNameList.join(GAME_RULE.DELIMITER_FOR_WINNER))
  },

  /**
   * 줄바꿈을 한다.
   */
  printNewLine: () => {
    Console.print('')
  },
}

export default OutputView
