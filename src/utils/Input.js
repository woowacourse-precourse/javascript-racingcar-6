import { Console } from '@woowacourse/mission-utils';
import { validateNames, validatePlayCount } from './Validation.js';
import { promptCarNames, promptPlayCount } from './Output.js';

export async function getCarNamesList() {
	const carNames = await promptCarNames();
	const carNamesList = carNames.split(',');

	validateNames(carNamesList);

	return carNamesList;
}

export async function getPlayCount() {
	const playCount = await promptPlayCount();

	validatePlayCount(playCount);

	Console.print('');

	return Number(playCount);
}
