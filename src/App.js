import { Console, Random } from '@woowacourse/mission-utils';
import { START_MESSAGE, LIMIT_NAME_LENGTH, COUNT_MESSAGE, RESULT_MESSAGE, GO_NUMBER } from './Const';
import Car from './Car';

class App {
	async play() {
		const result = [];
		const champion = [];
		let max = 0;
		const userInputCar = await Console.readLineAsync(START_MESSAGE);
		const cars = userInputCar.split(',');
		cars.map((car) => (car.length > LIMIT_NAME_LENGTH ? this.error() : result.push(new Car(car))));
		Console.print(userInputCar);
		const userInputCount = await Console.readLineAsync(COUNT_MESSAGE);
		Console.print(userInputCount);
		Console.print(RESULT_MESSAGE);
		for (let i = 0; i < userInputCount; i++) {
			for (let j = 0; j < result.length; j++) {
				let dash = result[j].getCount();
				const go = this.randomNumber();
				if (go >= GO_NUMBER) {
					dash++;
					result[j].setCount(dash);
				}
				Console.print(`${result[j].getName()} : ${'-'.repeat(dash)}`);
			}
		}
		for (let k = 0; k < result.length; k++) {
			max = Math.max(max, result[k].getCount());
		}
		[...result].map((result) => result.getCount() === max && champion.push(result.getName()));
		Console.print(`최종 우승자 : ${champion}`);
	}
	// 에러메시지
	error() {
		throw new Error('[ERROR] 입력된 값이 숫자가 아닙니다.');
	}
	// 랜덤숫자
	randomNumber() {
		return Random.pickNumberInRange(0, 9);
	}
}

export default App;
