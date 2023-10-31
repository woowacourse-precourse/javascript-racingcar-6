// @ts-check

import { Console } from '@woowacourse/mission-utils';
import { RESULT } from './constants';

/**
 * @param {Object.<string,number>} gameResult
 */
export default function endGame(gameResult) {
	const winnerArr = compareGameResult(gameResult);
	reportWinner(winnerArr);
}

/**
 * @param {Object.<string,number>} gameResult
 * @return {string[]}
 */
function compareGameResult(gameResult) {
	const winnerArr = [];
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
/**
 * @param {string[]} winnerArr
 */
function reportWinner(winnerArr) {
	const winner = winnerArr.join(', ');
	Console.print(RESULT.FINAL_WINNER + winner);
}
