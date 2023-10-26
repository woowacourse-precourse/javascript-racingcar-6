import { Console, Random } from '@woowacourse/mission-utils'

class App {
	async play() {
		const carNameInput = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
		if (carNameInput.trim().endsWith(',')) {
			throw new Error('\x1b[31m[ERROR] 쉼표로 끝나면 안됩니다.\x1b[37m');
		}
		const carNames = carNameInput.split(',').map((carNameInput) => carNameInput.trim());

		const cars = carNames.map(carName => ({
			name: carName,
			messages: [],
			maxDash: 0,
		}));

		carNames.forEach((carName) => {
			if (carName.length >= 6) {
				throw new Error('\x1b[31m[ERROR] 5글자 이하의 이름만 입력 가능합니다.\x1b[37m');
			}
		});
		const raceTry = parseInt(await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n'));
		if (isNaN(raceTry)) {
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
				const dashCount = cars[i].messages.filter((message) => message === '-').length;
				if (dashCount > cars[i].maxDash) {
					cars[i].maxDash = dashCount;
				}
				Console.print(`${cars[i].name} : ${cars[i].messages.join('')}`);
			}
			Console.print('');
			newRaceTry--;
		}
		const maxDashCount = Math.max(...cars.map(car => car.maxDash));
		const winner = cars.filter(car => car.maxDash === maxDashCount);
		const winnerName = winner.map(winner => winner.name);
		Console.print(`최종 우승자 : ${winnerName.join(', ')}`);
	}
}

export default App;
