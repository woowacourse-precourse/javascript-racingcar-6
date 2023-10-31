// @ts-check

import { Console } from '@woowacourse/mission-utils';
import { RESULT } from './constants';
import { getRandomNumber } from './getValue';

/**
 * @param {string[]} userNameArr
 * @param {number} userTrialFrequency
 * @return {Object.<string,number>|{}}}
 */
export default function playCarRace(userNameArr, userTrialFrequency) {
	Console.print(RESULT.GAME_PROGRESS);
	const playerScore = {};
	const gameResult = {};
	setPlayerScore(userNameArr, playerScore);
	repeatCycle(userNameArr, userTrialFrequency, playerScore);
	setGameResult(playerScore, gameResult);
	return gameResult;
}
/**	@type {function(string[],Object.<string,string>|{}):void} */
function setPlayerScore(userNameArr, playerScore) {
	userNameArr.forEach(userName => {
		playerScore[userName] = '';
	});
}
/**	@type {function(string[],number,Object.<string,string>|{}):void} */
function repeatCycle(userNameArr, userTrialFrequency, playerScore) {
	for (let i = 1; i <= userTrialFrequency; i += 1) {
		playOneCycle(userNameArr, playerScore);
	}
}
/**	@type {function(string[],Object.<string,string>|{}):void} */
function playOneCycle(userNameArr, playerScore) {
	userNameArr.forEach(userName => {
		const randomNumber = getRandomNumber();
		if (moveForward(randomNumber)) {
			playerScore[userName] += '-';
		}
		Console.print(`${userName} : ${playerScore[userName]}`);
	});
}
/**	@type {function(number):boolean} */
function moveForward(randomNumber) {
	if (randomNumber >= 4) {
		return true;
	}
	return false;
}
/**	@type {function(Object.<string,string>|{},Object.<string,number>|{}):void} */
function setGameResult(playerScore, gameResult) {
	for (let userName in playerScore) {
		gameResult[userName] = playerScore[userName].length;
	}
}
