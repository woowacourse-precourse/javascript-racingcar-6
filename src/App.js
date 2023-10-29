import RacingController from './racing/RacingController.js';

class App {
	async play() {
		const racingController = new RacingController();
		await racingController.start();
	}
}

export default App;
