import { Console } from '@woowacourse/mission-utils';
import MoveForward from './MoveForward.js';

export const executionResult = function forwardRunResultsOutput(carList) {
	const FORWARD = true;
	carList.forEach((car, idx) => {
		const forwardResult = MoveForward();
		if (forwardResult === FORWARD) {
			carList[idx] += '-';
		}
		Console.print(carList[idx]);
	});
	Console.print('');
};
