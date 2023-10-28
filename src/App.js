import { Console, Random } from '@woowacourse/mission-utils';
import { START_MESSAGE, LIMIT_NAME_LENGTH, COUNT_MESSAGE, RESULT_MESSAGE, GO_NUMBER, NAME_ERROR_MESSAGE, NOT_A_NUMBER } from './Constant';
import Car from './Car';

class App {
	async play() {
		try {
			const result = [];
			const champion = [];
			let max = 0;
			// 시작 자동차 이름 입력
			const userInputCar = await Console.readLineAsync(START_MESSAGE);
			const cars = userInputCar.split(',');
			cars.map((car) => (car.length > LIMIT_NAME_LENGTH ? this.error(NAME_ERROR_MESSAGE) : result.push(new Car(car))));
			Console.print(userInputCar);
			// 횟수입력
			const userInputCount = await Console.readLineAsync(COUNT_MESSAGE);
			if (isNaN(userInputCount)) this.error(NOT_A_NUMBER);
			Console.print(userInputCount);
			// 결과
			Console.print(RESULT_MESSAGE);
			for (let i = 0; i < parseInt(userInputCount); i++) {
				for (let j = 0; j < result.length; j++) {
					this.createDash(result, j);
				}
			}
			for (let k = 0; k < result.length; k++) {
				max = Math.max(max, result[k].getCount());
			}
			[...result].map((result) => result.getCount() === max && champion.push(result.getName()));
			Console.print(`최종 우승자 : ${champion}`);
		} catch (e) {
			throw e;
		}
	}
	// 대쉬 생성
	createDash(array, index) {
		let dash = array[index].getCount();
		const go = this.randomNumber();
		if (go >= GO_NUMBER) {
			dash++;
			array[index].setCount(dash);
		}
		return Console.print(`${array[index].getName()} : ${'-'.repeat(array[index].getCount())}`);
	}
	// 에러메시지
	error(msg) {
		throw new Error(`[ERROR] ${msg}`);
	}
	// 랜덤숫자
	randomNumber() {
		return Random.pickNumberInRange(0, 9);
	}
}

export default App;
