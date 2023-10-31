import { Console } from '@woowacourse/mission-utils';
import { getCarNamesList, getPlayCount } from './Input.js';
import { initializeCarNameObj } from './initializeObj.js';
import { runRaces } from './Race.js';
import { getWinner } from './Winner.js';

export async function startRacing() {
	const carNames = await getCarNamesList();
	const carNameObj = initializeCarNameObj(carNames);
	const playCount = await getPlayCount();

	Console.print(`실행 결과`);

	await runRaces(carNames, carNameObj, playCount);
	getWinner(carNameObj);
}
