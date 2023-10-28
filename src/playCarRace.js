// @ts-check
import { RESULT } from './constants';
import { getRandomNumber } from './getValue';
import { Console } from '@woowacourse/mission-utils';

/**@type {function(string[],number):object} */
export function playCarRace(userNameArr, userTrialFrequency) {
	Console.print(RESULT.GAME_PROGRESS);
	const playerScore = {};
	const gameResult = {};
	setPlayerScore(userNameArr, playerScore);
	repeatCycle(userNameArr, userTrialFrequency, playerScore);
	setGameResult(playerScore, gameResult);
	return gameResult;
}
/**@type {function(string[],object):object} */
function setPlayerScore(userNameArr, playerScore) {
	userNameArr.forEach((userName) => {
		playerScore[userName] = '';
	});
	return;
}
/**@type {function(string[],number,object):void} */
function repeatCycle(userNameArr, userTrialFrequency, playerScore) {
	for (let i = 1; i <= userTrialFrequency; i++) {
		playOneCycle(userNameArr, playerScore);
	}
}
/**@type {function(string[],object):void} */
function playOneCycle(userNameArr, playerScore) {
	userNameArr.forEach((userName) => {
		const randomNumber = getRandomNumber();
		if (moveForward(randomNumber)) {
			playerScore[userName] += '-';
		}
		Console.print(`${userName} : ${playerScore[userName]}`);
	});
}
/**@type {function(number):boolean} */
function moveForward(randomNumber) {
	if (randomNumber >= 4) {
		return true;
	}
	return false;
}
/**@type {function(object,object):void} */
function setGameResult(playerScore, gameResult) {
	for (let userName in playerScore) {
		gameResult[userName] = playerScore[userName].length;
	}
}
