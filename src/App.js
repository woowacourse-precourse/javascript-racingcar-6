import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './utils/Constants';
import getCarsNumber from './utils/Random';
import { checkLength, checkTryCount } from './utils/CheckInput';

class App {
	// 자동차 이름 받고 분리하기
	getCars(input) {
		const carList = input.split(',').map((element) => {
			checkLength(element);

			return {
				name: element,
				count: '',
			};
		});
		return carList;
	}

	// 입력받은 시도횟수만큼 전진/정지
	async racing(cars) {
		const tryCount = await Console.readLineAsync(MESSAGE.race);

		checkTryCount(tryCount);

		Console.print('실행 결과');
		for (let i = 0; i < tryCount; i++) {
			const carsNumber = getCarsNumber(cars.length);
			this.addReps(cars, carsNumber);
			this.printCars(cars);
		}
	}

	//전진/정지 판단
	addReps(cars, carsNumber) {
		cars.map((car, index) => {
			if (carsNumber[index] >= 4) car.count += '-';
		});
	}

	//단계별 진행상황 출력
	printCars(cars) {
		let result = '';
		cars.forEach((element) => {
			result += `${element.name} : ${element.count}\n`;
		});
		Console.print(result);
	}

	// 우승자 출력
	winner(cars) {
		const winnerScore = Math.max(
			...cars.map((element) => {
				return element.count.length;
			})
		);

		const winnerList = cars
			.filter((element) => element.count.length === winnerScore)
			.map((car) => car.name)
			.join(', ');

		Console.print(MESSAGE.end + winnerList);
	}

	async play() {
		const inputCars = await Console.readLineAsync(MESSAGE.start);
		const cars = this.getCars(inputCars);

		this.racing(cars);

		this.winner(cars);
	}
}

export default App;
