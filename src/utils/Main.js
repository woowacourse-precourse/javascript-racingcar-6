import { Console } from '@woowacourse/mission-utils';
import { getCarNamesList, getPlayCount } from './Input.js';
import { initializeCarNameObj } from './initializeObj.js';
import { promptCarNames, promptPlayCount } from './Output.js';
import { runRaces } from './Race.js';
import { getWinner } from './Winner.js';

export async function startRacing() {
	const carNames = await promptCarNames();
	const carNamesList = await getCarNamesList(carNames);
	const carNameObj = initializeCarNameObj(carNamesList);
	const playCount = await promptPlayCount();
	const numPlayCount = await getPlayCount(playCount);

	Console.print(`실행 결과`);

	await runRaces(carNamesList, carNameObj, numPlayCount);
	getWinner(carNameObj);
}
