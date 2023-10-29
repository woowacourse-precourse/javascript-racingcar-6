import { Console } from '@woowacourse/mission-utils';
import printMessage from '../../constants/printMessage.js';

class OutputView {
	static printRacingStart() {
		Console.print(printMessage.RACING_RESULT);
	}
	static printRoundResult() {

	}
	static printWinners(winners) {
		Console.print(winners);
	}
}

export default OutputView;