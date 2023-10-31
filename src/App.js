import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './utils/Constants';
import { getCarsName, getWinner } from './utils/DataProcessing';
import startRacing from './utils/Racing';

class App {
	async play() {
		const inputCars = await Console.readLineAsync(MESSAGE.start);
		const cars = getCarsName(inputCars);

		startRacing(cars);

		getWinner(cars);
	}
}

export default App;
