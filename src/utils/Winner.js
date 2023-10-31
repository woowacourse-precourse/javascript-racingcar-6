import { Console } from '@woowacourse/mission-utils';

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
		Console.print(`최종 우승자 : ${maxKeys.join(', ')}`);
	}

	if (maxKeys.length <= 1) {
		Console.print(`최종 우승자 : ${maxKeys[0]}`);
	}
}
