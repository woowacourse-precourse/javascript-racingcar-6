import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGE } from '../constants/messages';

/**
 * @description 가장 높은 이동 횟수를 가진 자동차를 우승자로 출력하는 함수
 * @param {Array} carNameArr 자동차 이름 배열
 * @param {Array} moveCount 자동차 별 이동 횟수
 */
export default async function printWinner(carNameArr, moveCounts) {
  const maxMoveCount = Math.max(...moveCounts);

  const maxMoveCountIdx = moveCounts
    .map((moveCount, index) => moveCount === maxMoveCount ? index : -1)
    .filter((index) => index !== -1);

  const winnerName = maxMoveCountIdx.map((idx) => carNameArr[idx]).join(', ');
  Console.print(`${GAME_MESSAGE.gameWinner} ${winnerName}`)
}