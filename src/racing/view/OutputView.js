import { Console } from '@woowacourse/mission-utils';
import printMessage from '../../constants/printMessage.js';

class OutputView {
	static printRacingStart() {
		Console.print(printMessage.RACING_RESULT);
	}

	static printRoundResult(name, forwardCount) {
		Console.print(`${name} : ${'-'.repeat(forwardCount)}`);
	}

	static printWinners(winners) {
		Console.print(`최종 우승자 : ${winners}`);
	}

	static printNewLine() {
		Console.print('');
	}
}

export default OutputView;