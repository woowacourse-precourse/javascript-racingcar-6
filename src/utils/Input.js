import { Console } from '@woowacourse/mission-utils';
import { validateNames, validatePlayCount } from './Validation.js';
import { promptCarNames, promptPlayCount } from './Output.js';

export async function getCarNamesList(carNames) {
	const carNamesList = carNames.split(',');

	validateNames(carNamesList);

	return carNamesList;
}

export async function getPlayCount(playCount) {
	validatePlayCount(playCount);

	Console.print('');

	return Number(playCount);
}
