import { Console } from '@woowacourse/mission-utils';
import Cars from './app/Cars.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class App {
	async play() {
		// 기능 ➊ 사용자에게 경주할 자동차 이름을 입력받는다.
		const carNames = await InputView.getCarNames();
		// 기능 ➋ 사용자에게 시도할 횟수를 입력받는다.
		const tryNumber = await InputView.getTryNumber();

		// 기능 ➌ 시도 횟수만큼 자동차를 전진시킨다.
		const cars = new Cars(carNames);
		
		Console.print("\n실행 결과");
		for (var i = 0; i < tryNumber; i++) {
			cars.moveCars()
			OutputView.printCars(cars.names, cars.distances);
		}

		// 기능 ➍ 최종 우승자를 출력한다.
		const winners = cars.getWinners()
		OutputView.printWinners(winners);
	}
}

export default App;
