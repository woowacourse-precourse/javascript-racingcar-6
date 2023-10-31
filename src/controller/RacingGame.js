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
}

export default RacingGame;
