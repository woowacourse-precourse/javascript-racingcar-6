import { Console } from '@woowacourse/mission-utils';
import SYSTEM_MESSAGES from '../constants/SystemMessages.js';

class PrintConsole {
	showRacingResult(carName, distance) {
		const message = `${carName} : ` + '-'.repeat(distance);
		this.showMessage(message);
	}

	showGameResult(carNames) {
		this.showMessage(SYSTEM_MESSAGES.final_winner + carNames.join(', '));
	}

	showMessage(message) {
		Console.print(message);
	}
}

export default PrintConsole;
