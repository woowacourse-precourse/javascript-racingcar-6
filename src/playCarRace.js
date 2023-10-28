import { RESULT } from './constants';
import { getRandomNumber } from './getValue';
import { Console } from '@woowacourse/mission-utils';

export function playCarRace(userNameArr, userTrialFrequency) {
	Console.print(RESULT.GAME_PROGRESS);
	const playerScore = {};
	setPlayerScore(userNameArr, playerScore);
	repeatCycle(userNameArr, userTrialFrequency, playerScore);
	const gameResult = setGameResult(playerScore);
	return gameResult;
}

function setPlayerScore(userNameArr, playerScore) {
	userNameArr.forEach(async (userName) => {
		Object.defineProperty(playerScore, `${userName}`, {
			value: '',
			writable: true,
		});
	});
}
function repeatCycle(userTrialFrequency, userNameArr, score) {
	for (let i = 0; i < userTrialFrequency; i++) {
		userNameArr.forEach(async (userName) => {
			const randomNumber = await getRandomNumber();
			if (moveForward(randomNumber)) {
				score[userName] += '-';
			}
			Console.print(`${userName} : ${score[userName]}`);
		});
	}
}
function moveForward(randomNumber) {
	if (randomNumber >= 4) {
		return true;
	}
	return false;
}
function setGameResult(playerScore) {
	const gameResult = {};
	for (const userName in playerScore) {
		Object.defineProperty(gameResult, userName, {
			value: playerScore[userName].length,
			writable: true,
		});
	}
	return gameResult;
}
