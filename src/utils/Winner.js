import { Console } from '@woowacourse/mission-utils';
import { myConstants } from '../constants/constants';
export const getWinner = (carNameObj) => {
	const max = findMaxValue(carNameObj);
	const maxKeys = findMaxKeys(carNameObj, max);

	printWinner(maxKeys);
};

export const findMaxValue = (carNameObj) => {
	return Math.max(...Object.values(carNameObj));
};

export const findMaxKeys = (carNameObj, max) => {
	return Object.keys(carNameObj).filter((key) => carNameObj[key] === max);
};

export const printWinner = (maxKeys) => {
	if (maxKeys.length > 1) {
		Console.print(`${myConstants.WINNER} : ${maxKeys.join(', ')}`);
	}

	if (maxKeys.length <= 1) {
		Console.print(`${myConstants.WINNER} : ${maxKeys[0]}`);
	}
};
