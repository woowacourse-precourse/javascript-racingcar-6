import User from '../Model/User'
import Race from '../Model/Race'

export default class Controller {
	constructor() {
		this.carsObj = {};
		this.attempts = '';
		this.user = new User();
		this.race = new Race();
	}

	async readyGame() {
		this.carsObj = await this.user.getCarNames();
		this.attempts = await this.user.getNumberOfAttempts();
	}

	startGame() {
		let isPlaying = Number(this.attempts);

		while (isPlaying > 0) {
			this.race.rollDiceAndGoForward(this.carsObj);

			isPlaying -= 1;
		}
	}
}
