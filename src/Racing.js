import { Console } from '@woowacourse/mission-utils';
import { getCarNamesList, getPlayCount } from './Input.js';
import { validateForMove } from './Validation.js';
import { createRandomNum } from './Number.js';

function isGoForward(name, carNameObj) {
	const randomNum = createRandomNum();
	if (validateForMove(randomNum)) {
		carNameObj[name] += 1;
	}
	Console.print(`${name} :${'-'.repeat(carNameObj[name])}`);
}

async function carMove(carNames, carNameObj) {
	carNames.map((name, index) => {
		isGoForward(name, carNameObj);
	});
}

function getWinner(carNameObj) {
	let max = -Infinity;
	let maxKeys = [];
	let isDuplicate = false;

	Object.entries(carNameObj).forEach(([key, value]) => {
		if (value > max) {
			max = value;
			maxKeys = [key];
			isDuplicate = false;
		}
	});

	Object.entries(carNameObj).forEach(([key, value]) => {
		if (value === max && key !== maxKeys[0]) {
			maxKeys.push(key);
			isDuplicate = true;
		}
	});

	if (isDuplicate) {
		console.log(`최종 우승자 : ${maxKeys.join(', ')}`);
	} else {
		console.log(`최종 우승자 : ${maxKeys[0]}`);
	}
}

export async function startRacing() {
	const carNames = await getCarNamesList();
	const carNameObj = {};
	carNames.forEach((name) => {
		carNameObj[name] = 0;
	});
	const playCount = await getPlayCount();
	let count = 0;
	Console.print(`실행 결과`);
	while (count < playCount) {
		carMove(carNames, carNameObj);
		count += 1;
		Console.print('');
	}
	getWinner(carNameObj);
}
