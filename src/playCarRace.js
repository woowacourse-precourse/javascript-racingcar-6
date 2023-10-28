import { RESULT } from './constants';
import { getRandomNumber } from './getValue';
import { Console } from '@woowacourse/mission-utils';

export function playCarRace(userNameArr, userTrialFrequency) {
	Console.print(RESULT.GAME_PROGRESS);
	const playerScore = {};
	const gameResult = {};
	setPlayerScore(userNameArr, playerScore);
	repeatCycle(userNameArr, userTrialFrequency, playerScore);
	setGameResult(playerScore, gameResult);
	return gameResult;
}

function setPlayerScore(userNameArr, playerScore) {
	userNameArr.forEach((userName) => {
		playerScore[userName] = '';
	});
	return;
}
function repeatCycle(userNameArr, userTrialFrequency, playerScore) {
	for (let i = 1; i <= userTrialFrequency; i++) {
		userNameArr.forEach((userName) => {
			const randomNumber = getRandomNumber();
			if (moveForward(randomNumber)) {
				playerScore[userName] += '-';
			} 
			Console.print(`${userName} : ${playerScore[userName]}`);
		});
	}
}
function moveForward(randomNumber) {
	if (randomNumber >= 4) {
		return true;
	}
	return false;
}
function setGameResult(playerScore, gameResult) {
	for (let userName in playerScore) {
		gameResult[userName] = playerScore[userName].length;
	}
}
