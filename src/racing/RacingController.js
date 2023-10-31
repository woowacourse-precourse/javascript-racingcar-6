import Util from '../util/Util.js';
import Racing from './Racing.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import CarsNameValidator from '../validator/CarsNameValidator.js';
import RoundsCountValidator from '../validator/RoundsCountValidator.js';

class RacingController {
	#racing;
	#roundsCount;

	async #setupCars() {
		const carsName = await InputView.inputCarsNameAsync();
		CarsNameValidator.validate(carsName);
		this.#racing = new Racing(Util.trimStringInArray(carsName.split(',')));
	}

	async #setupRoundsCount() {
		const roundsCount = await InputView.inputTryCountAsync();
		RoundsCountValidator.validate(roundsCount);
		this.#roundsCount = roundsCount;
		OutputView.printNewLine();
	}

	#runRound() {
		this.#racing.tryCarsMove();
		this.#racing.getCarStateArray().forEach(carState => {
			OutputView.printRoundResult(carState.name, carState.forwardCount);
		});
		OutputView.printNewLine();
	}
	
	#startRacing() {
		OutputView.printRacingStart();
		for (let _ = 0; _ < this.#roundsCount; _++) {
			this.#runRound();
		}
	}

	#finishRacing() {
		const carStateArray = this.#racing.getCarStateArray();
		const winners = Util.getWinners(carStateArray);
		OutputView.printWinners(winners);
	}

	async start() {
		await this.#setupCars();
		await this.#setupRoundsCount();
		this.#startRacing();
		this.#finishRacing();
	}
}

export default RacingController;