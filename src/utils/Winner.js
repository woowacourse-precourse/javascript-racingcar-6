import { Console } from '@woowacourse/mission-utils';
import { myConstants } from '../constants/constants';
export function getWinner(carNameObj) {
	const max = findMaxValue(carNameObj);
	const maxKeys = findMaxKeys(carNameObj, max);

	printWinner(maxKeys);
}

export function findMaxValue(carNameObj) {
	return Math.max(...Object.values(carNameObj));
}

export function findMaxKeys(carNameObj, max) {
	return Object.keys(carNameObj).filter((key) => carNameObj[key] === max);
}

export function printWinner(maxKeys) {
	if (maxKeys.length > 1) {
		Console.print(`${myConstants.WINNER} : ${maxKeys.join(', ')}`);
	}

	if (maxKeys.length <= 1) {
		Console.print(`${myConstants.WINNER} : ${maxKeys[0]}`);
	}
}
