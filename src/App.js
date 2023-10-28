import { Console, Random } from '@woowacourse/mission-utils';
import { START_MESSAGE, LIMIT_NAME_LENGTH, COUNT_MESSAGE, RESULT_MESSAGE, GO_NUMBER } from './Const';
import Car from './Car';

class App {
	async play() {}

	// 랜덤숫자
	randomNumber() {
		return Random.pickNumberInRange(0, 9);
	}
}

export default App;
