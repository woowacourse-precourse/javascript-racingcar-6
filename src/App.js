import RacingcarGame from "./RacingcarGame/index.js";

class App {
	#racingcarGame;

	constructor() {
		this.#racingcarGame = new RacingcarGame();
	}

	async play() {
		await this.#racingcarGame.gameStart();
	}
}

export default App;
