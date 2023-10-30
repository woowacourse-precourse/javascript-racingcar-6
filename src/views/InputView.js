import { Console } from '@woowacourse/mission-utils';
import { strToArrByComma } from '../utils/strToArrByComma.js';
import { validateCarNames, validateTryNumber } from '../utils/inputValidator.js';

class InputView {

	static async getCarNames() {
		const carInput = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
		validateCarNames(carInput);
		const carNames = strToArrByComma(carInput);
		return carNames;
	}

	static async getTryNumber() {
		const tryNumber = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
		validateTryNumber(tryNumber);
		return +tryNumber;
	}
}

export default InputView;