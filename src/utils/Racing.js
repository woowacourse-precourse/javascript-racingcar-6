import { Console } from '@woowacourse/mission-utils';
import { checkTryCount } from './CheckInput';
import { getCarsName, getWinner } from './DataProcessing';
import { MESSAGE } from './Constants';
import getCarsNumber from './Random';

const startRacing = async (cars) => {
	const tryCount = await Console.readLineAsync(MESSAGE.race);

	checkTryCount(tryCount);

	Console.print('실행 결과');
	for (let i = 0; i < tryCount; i++) {
		const carsNumber = getCarsNumber(cars.length);
		addReps(cars, carsNumber);
		printCars(cars);
	}

	getWinner(cars);
};

const addReps = (cars, carsNumber) => {
	cars.map((car, index) => {
		if (carsNumber[index] >= 4) car.count += '-';
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
