import { Console } from '@woowacourse/mission-utils';
import { validateForMove } from './Validation.js';
import { createRandomNum } from './Number.js';
import { printCarPosition } from './Output.js';

// 자동차의 전진 현황을 나타내줌

export const isGoForward = (name, carNameObj, randomNum) => {
	if (validateForMove(randomNum)) {
		carNameObj[name] += 1;
	}
	printCarPosition(name, carNameObj[name]);
};

export const carMove = (carNames, carNameObj, randomNum) => {
	carNames.map((name) => {
		isGoForward(name, carNameObj, randomNum);
	});
};

export const runRaces = async (carNames, carNameObj, playCount) => {
	let count = 0;
	const randomNum = createRandomNum();

	while (count < playCount) {
		carMove(carNames, carNameObj, randomNum);
		count += 1;
		Console.print('');
	}
};
