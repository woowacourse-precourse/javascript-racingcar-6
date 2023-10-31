import { Console, Random } from '@woowacourse/mission-utils';
import InputCarName from './InputCarName.js';
import InputAttempt from './InputAttempt.js';

class App {
	async play() {
		// const carList = InputCarName();
		// InputAttempt();
		Random.pickNumberInRange(0, 9);
	}
}

export default App;
