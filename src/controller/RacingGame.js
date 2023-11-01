import Io from '../io/Io.js';

class RacingGame {
	#racingTrack;
	#racingJudge;
	#tryCounter;

	constructor(racingTrack, racingJudge, tryCounter) {
		this.#racingTrack = racingTrack;
		this.#racingJudge = racingJudge;
		this.#tryCounter = tryCounter;
	}

	async play() {
		await this.#readDrivers();
	}

	async #readDrivers() {
		const drivers = await Io.readDrivers();

		this.#racingTrack.initDrivers(drivers);

		await this.#readTryCount();
	}

	async #readTryCount() {
		const tryCount = await Io.readTryCount();

		this.#tryCounter.initTryCount(tryCount);

		this.#roundTurn();
	}

	/**
	 * 모든 차량이 한번 움직인다.
	 */
	#allDriverMoves() {
		this.#tryCounter.singleTry();

		const curTrack = this.#racingTrack.allDriverMoves();
		Io.printAllLocations(curTrack);
	}

	/**
	 * 주어진 시도 횟수만큼 움직인다.
	 */
	#roundTurn() {
		Io.printResultHeader();

		while (!this.#tryCounter.isEnd()) this.#allDriverMoves();

		this.#printWinnerNames();
	}

	#printWinnerNames() {
		const finalTrack = this.#racingTrack.getFinalTrack();
		const winnerNames = this.#racingJudge.getWinnerNames(finalTrack);

		Io.printWinnerNames(winnerNames);

		this.#finish();
	}

	#finish() {
		//끗
	}
}

export default RacingGame;
