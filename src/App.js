import { RacingGame } from '../src/racingGame/RacingGame.js';

class App {
	async play() {
		try {
			const game = new RacingGame();
			await game.start();
		} catch (error) {
			throw error;
		}
	}
}
export default App;
