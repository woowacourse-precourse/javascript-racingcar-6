import { Console } from '@woowacourse/mission-utils';
import { validateForMove } from './Validation.js';
import { createRandomNum } from './Number.js';
import { printCarPosition } from './Output.js';

// 자동차의 전진 현황을 나타내줌

function isGoForward(name, carNameObj) {
	const randomNum = createRandomNum();

	if (validateForMove(randomNum)) {
		carNameObj[name] += 1;
	}

	printCarPosition(name, carNameObj[name]);
}

function carMove(carNames, carNameObj) {
	carNames.map((name) => {
		isGoForward(name, carNameObj);
	});
}

export async function runRaces(carNames, carNameObj, playCount) {
	let count = 0;

	while (count < playCount) {
		carMove(carNames, carNameObj);
		count += 1;
		Console.print('');
	}
}
