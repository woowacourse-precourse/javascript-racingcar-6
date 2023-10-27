import { Random, Console } from '@woowacourse/mission-utils';

class App {
	constructor() {
		this.ERROR = '[ERROR]';
	}

	async getInput() {
		Console.print('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
		const cars = (await Console.readLineAsync('')).split(',');
		if (cars.some((e) => e.length === 0 || e.length > 5)) {
			throw new Error(`${this.ERROR} 자동차 이름을 입력하지 않았거나 5자를 초과하여 입력하셨습니다!`);
		}

		Console.print('시도할 횟수는 몇 회인가요?');
		const limit = +(await Console.readLineAsync(''));
		if (isNaN(limit) || limit <= 0) {
			throw new Error(`${this.ERROR} 자연수를 입력하지 않으셨습니다.`);
		}

		return [Object.fromEntries(cars.map((e) => [e, 0])), limit];
	}

	doRace(cars = {}) {
		for (const car of Object.keys(cars)) {
			const rand = Random.pickNumberInRange(0, 9);
			rand >= 4 && cars[car]++;
			Console.print(`${car} : ${'-'.repeat(cars[car])}`);
		}
		Console.print('');

		return cars;
	}

	async play() {}
}

export default App;
