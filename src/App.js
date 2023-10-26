import { Console, Random } from '@woowacourse/mission-utils'

class App {
	async play() {
		const carNameInput = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');

		const carNames = carNameInput.split(',').map(carNameInput => carNameInput.trim());

		for (const carName of carNames) {
			if (carName.length >= 6) {
				throw new Error('\x1b[31m[ERROR] 5글자 이하의 이름만 입력 가능합니다.\x1b[37m');
			}
			console.log(`${carName} :`);
		}
	}
}

export default App;
