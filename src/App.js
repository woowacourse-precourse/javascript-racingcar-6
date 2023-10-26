import { Console, Random } from '@woowacourse/mission-utils'

class App {
	async play() {
		const carNameInput = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
		const carNames = carNameInput.split(',').map(carNameInput => carNameInput.trim());

		const cars = carNames.map(carName => ({
			name: carName,
			messages: [],
		  }));

		for (const carName of carNames) {
			if (carName.length >= 6) {
				throw new Error('\x1b[31m[ERROR] 5글자 이하의 이름만 입력 가능합니다.\x1b[37m');
			}
		}
		const raceTry = parseInt(await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n'));
		if (isNaN(raceTry) === true) {
			throw new Error('\x1b[31m[ERROR] 숫자만 입력 가능합니다.\x1b[37m');
		}
		if (raceTry <= 0) {
			throw new Error('\x1b[31m[ERROR] 1이상의 숫자만 입력 가능합니다.\x1b[37m');
		}

		Console.print('\n실행 결과');

		let newRaceTry = raceTry;
		while (newRaceTry > 0) {
			for (let i = 0; i < cars.length; i++) {
				const raceCarNumber = Random.pickNumberInRange(0, 9);
				if (raceCarNumber >= 4) {
					cars[i].messages.push('-');
				}
				if (raceCarNumber < 4) {
					cars[i].messages.push(' ');
				}
				Console.print(`${cars[i].name} : ${cars[i].messages.join('')} ${raceCarNumber}`);
			}
			Console.print('');
			newRaceTry--;
		}
	}
}

export default App;
