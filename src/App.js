import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './utils/Constants';
import getCarsNumber from './utils/Random';

// 자동차의 갯수만큼 랜덤값 받아오기
class App {
	// 게임 시작
	async start() {
		const inputCars = await Console.readLineAsync(MESSAGE.start);
		// const inputCars = 'pobi,woni';
		this.getCars(inputCars);
	}

	// 자동차 이름 받고 분리하기
	getCars(input) {
		const cars = input.split(',').map((element) => ({
			name: element,
			count: '',
		}));
		this.racing(cars);
	}

	// 입력받은 시도횟수만큼 전진/정지
	async racing(cars) {
		const tryCount = await Console.readLineAsync(MESSAGE.race);
		// const tryCount = '10';
		console.log('시도횟수: ', tryCount);
		Console.print('실행 결과');
		for (let i = 0; i < tryCount; i++) {
			const carsNumber = getCarsNumber(cars.length);
			this.addReps(cars, carsNumber);
			this.printCars(cars);
		}
		this.winner(cars);
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
			// Console.print(`${element.name} : ${element.count}\n`);
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

		const winner = cars
			.filter((element) => element.count.length === winnerScore)
			.map((car) => car.name)
			.join(', ');
		// console.log(winner);
		Console.print(MESSAGE.end + winner);
	}

	async play() {
		this.start();
	}
}

export default App;
