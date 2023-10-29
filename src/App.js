import Cars from './Cars.js';
import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';
import { Console } from '@woowacourse/mission-utils';

class App {
	async play() {
		const carNames = await InputView.getCarNames();
		const tryNumber = await InputView.getTryNumber();

		const cars = new Cars(carNames);

		Console.print("\n실행 결과");
		for (var i = 0; i < tryNumber; i++) {
			cars.moveCars()
			OutputView.printCars(cars.names, cars.distances);
		}

		const winners = cars.getWinners()
		OutputView.printWinners(winners);
	}
}

export default App;
