import { Console } from '@woowacourse/mission-utils';
import { validateNames, validatePlayCount } from './Validation.js';
import { promptCarNames, promptPlayCount } from './Output.js';

export const getCarNamesList = async (carNames) => {
	const carNamesList = carNames.split(',');

	validateNames(carNamesList);

	return carNamesList;
};

export const getPlayCount = async (playCount) => {
	validatePlayCount(playCount);

	Console.print('');

	return Number(playCount);
};
