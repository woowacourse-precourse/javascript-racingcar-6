import RacingGame from './controller/RacingGame.js';
import RacingJudge from './model/RacingJudge.js';
import RacingTrack from './model/RacingTrack.js';
import TryCounter from './model/TryCounter.js';

class App {
	#gameTrack;
	#judge;
	#tryCounter;
	#controller;

	// REFACTOR
	constructor() {
		this.#gameTrack = new RacingTrack();
		this.#judge = new RacingJudge();
		this.#tryCounter = new TryCounter();
		this.#controller = new RacingGame(this.#gameTrack, this.#judge, this.#tryCounter);
	}

	async play() {
		await this.#controller.play();
	}
}

// const a = new App();
// a.play();

export default App;
