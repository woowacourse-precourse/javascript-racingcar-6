import { Console } from '@woowacourse/mission-utils';
import printMessage from '../../constants/printMessage.js';

class InputView {
	static async inputCarsNameAsync() {
		return await Console.readLineAsync(printMessage.INPUT_NAMES);
	}
	static async inputTryCountAsync() {
		return await Console.readLineAsync(printMessage.INPUT_COUNT);
	}
}

export default InputView;