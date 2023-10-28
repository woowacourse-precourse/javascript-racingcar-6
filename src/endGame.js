// @ts-check
import { Console } from '@woowacourse/mission-utils';
import { RESULT } from './constants';

/**	@type {function(Object.<string,number>):void} */
export default function endGame(gameResult) {
  /** @type {string[]} */
  const winnerArr = compareGameResult(gameResult);
  reportWinner(winnerArr);
}

/**	@type {function(Object.<string,number>):string[]} */
function compareGameResult(gameResult) {
  /** @type {string[]} */
  const winnerArr = [];
  /** @type {number} */
  let maxScore = 0;
  for (let user in gameResult) {
    winnerArr.push(user);
    if (gameResult[user] >= maxScore) {
      maxScore = gameResult[user];
    } else {
      winnerArr.pop();
    }
  }
  return winnerArr;
}
/**	@type {function(string[]):void} */
function reportWinner(winnerArr) {
  const winner = winnerArr.join(', ');
  Console.print(RESULT.FINAL_WINNER + winner);
}
