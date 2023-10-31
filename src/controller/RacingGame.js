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

		this.#moves();
	}

	/**
	 * 모든 차량이 한번 움직인다.
	 */
	#move() {
		this.#tryCounter.singleTry();

		const currentLocations = this.#racingTrack.allMoves();
		Io.printAllLocations(currentLocations);
	}

	/**
	 * 주어진 시도 횟수만큼 움직인다.
	 */
	#moves() {
		Io.printResultHeader();

		while (!this.#tryCounter.isEnd()) this.#move();

		this.#printWinnerNames();
	}

	#printWinnerNames() {
		const finalLocations = this.#racingTrack.getFinalLocations();
		const winnerNames = this.#racingJudge.getWinnerNames(finalLocations);

		Io.printWinnerNames(winnerNames);

		this.#finish();
	}

	#finish() {
		//끗
	}
}

export default RacingGame;
