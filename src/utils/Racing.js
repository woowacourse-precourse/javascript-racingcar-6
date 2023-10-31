import { Console } from '@woowacourse/mission-utils';
import { checkTryCount } from './CheckInput';
import { getWinner } from './DataProcessing';
import { MESSAGE, ADVANCE_STANDARD } from './Constants';
import getCarsNumber from './Random';

// 경주 시작
const startRacing = async (cars) => {
	const tryCount = await Console.readLineAsync(MESSAGE.race);

	checkTryCount(tryCount);

	Console.print(MESSAGE.result);

	for (let i = 0; i < tryCount; i++) {
		const carsNumber = getCarsNumber(cars.length);

		addReps(cars, carsNumber);

		printCars(cars);
	}

	getWinner(cars);
};

// 점수증가 판단
const addReps = (cars, carsNumber) => {
	cars.map((car, index) => {
		if (carsNumber[index] >= ADVANCE_STANDARD) car.count += '-';
	});
};

//단계별 진행상황 출력
const printCars = (cars) => {
	let result = '';

	cars.forEach((element) => {
		result += `${element.name} : ${element.count}\n`;
	});

	Console.print(result);
};

export default startRacing;
