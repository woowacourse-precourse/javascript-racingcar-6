import { Console } from '@woowacourse/mission-utils'
import Car from './Car.js'

class App {
	async play() {
		const carNames = await this.inputvalidName();

		const cars = carNames.map((carName) => new Car(carName));

		const raceTry = await this.inputvalidRaceTry();

		Console.print('\n실행 결과');

		this.racingStart(cars, raceTry);

		this.winnerPrint(cars);
	}

	async inputvalidName() {
		const carNameInput = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');

		if (!carNameInput.trim()) {
			throw new Error('\x1b[31m[ERROR] 자동차 이름을 입력해야 합니다.\x1b[37m');
		}
		if (carNameInput.trim().endsWith(',')) {
			throw new Error('\x1b[31m[ERROR] 쉼표로 끝나면 안됩니다.\x1b[37m');
		}
		const carNames = carNameInput.split(',').map((carNameInput) => carNameInput.trim());

		const duplicateNames = carNames.filter((name, index) => carNames.indexOf(name) !== index);

		if (duplicateNames.length > 0) {
			throw new Error('\x1b[31m[ERROR] 중복된 자동차 이름이 있습니다.\x1b[37m');
		}
		if (carNames < 2) {
			throw new Error('\x1b[31m[ERROR] 2명 이상의 이름을 입력해야합니다.\x1b[37m');
		}

		carNames.forEach((carName) => {
			if (!carName) {
				throw new Error('\x1b[31m[ERROR] 빈 자동차 이름은 입력할 수 없습니다.\x1b[37m');
			}
			if (carName.length >= 6) {
				throw new Error('\x1b[31m[ERROR] 5글자 이하의 이름만 입력 가능합니다.\x1b[37m');
			}
		});
		return carNames;
	}

	async inputvalidRaceTry() {
		const raceTry = parseInt(await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n'));

		if (isNaN(raceTry)) {
			throw new Error('\x1b[31m[ERROR] 숫자만 입력 가능합니다.\x1b[37m');
		}
		if (raceTry <= 0) {
			throw new Error('\x1b[31m[ERROR] 1이상의 숫자만 입력 가능합니다.\x1b[37m');
		}
		return raceTry;
	}

	racingStart(cars, raceTry) {
		while (raceTry > 0) {
			cars.forEach((car) => car.updateDash());
			cars.forEach((car) => {
				Console.print(`${car.name} : ${car.message.join('')}`);
			});

			Console.print('');
			raceTry--;
		}
	}

	winnerPrint(cars) {
		const maxDashCount = Math.max(...cars.map(car => car.maxDash));
		const winner = cars.filter(car => car.maxDash === maxDashCount);
		const winnerName = winner.map(winner => winner.name);
		Console.print(`최종 우승자 : ${winnerName.join(', ')}`);
	}
}

export default App;