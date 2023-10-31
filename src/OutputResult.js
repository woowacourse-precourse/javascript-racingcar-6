import { Console } from '@woowacourse/mission-utils';
import MoveForward from './MoveForward.js';

export const executionResult = function forwardRunResultsOutput(carList, forwardCount) {
	const FORWARD = true;
	carList.forEach((car, idx) => {
		const forwardResult = MoveForward();
		if (forwardResult === FORWARD) {
			carList[idx] += '-';
			forwardCount[idx] += 1;
		}
		Console.print(carList[idx]);
	});
	Console.print('');
};

export const winnerResult = function printWinner(winner) {
	const winnerNumber = winner.length;
	if (winnerNumber > 1) {
		Console.print(`최종 우승자 : ${winner.join(', ')}`);
	} else {
		Console.print(`최종 우승자 : ${winner[0]}`);
	}
};
