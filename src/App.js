import Controller from './Controller/Controller';

class App {
	constructor() {
		this.control = new Controller();
	}

	async play() {
		await this.control.readyGame();
		this.control.startGame();
	}
}

export default App;
