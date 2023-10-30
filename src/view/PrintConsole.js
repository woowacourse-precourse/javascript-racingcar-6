import { Console } from '@woowacourse/mission-utils';

class PrintConsole {
	showRacingResult(carName, distance) {
		const message = `${carName} : ` + '-'.repeat(distance);
		this.showMessage(message);
	}

	showGameResult(carNames) {
		this.showMessage(carNames.join(', '));
	}

	showMessage(message) {
		Console.print(message);
	}
}

export default PrintConsole;
