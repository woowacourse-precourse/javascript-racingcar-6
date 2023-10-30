import { Console } from '@woowacourse/mission-utils';
import { getCarNamesList, getPlayCount } from './Input.js';
import { validateForMove } from './Validation.js';
import { createRandomNum } from './Number.js';

async function startRacing() {
	const carNames = await getCarNamesList();
	const countObject = {};
	carNames.forEach((name) => {
		countObject[name] = 0;
	});
	const playCount = await getPlayCount();
	let count = 0;
	Console.print(`실행 결과`);
	while (count < playCount) {
		carMove(carNames, countObject);
		count += 1;
	}
}
function isGoForward(name, countObject) {
	const randomNum = createRandomNum();
	if (validateForMove(randomNum)) {
		countObject[name] += 1;
	}
	Console.print(`${name} :${'-'.repeat(countObject[name])}`);
}

async function carMove(carNames, countObject) {
	carNames.map((name, index) => {
		isGoForward(name, countObject);
	});
}
startRacing();
