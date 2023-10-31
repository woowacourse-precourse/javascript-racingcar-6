import User from '../Model/User'
import Race from '../Model/Race'
import ScoreBoard from '../Model/ScoreBoard';

export default class Controller {
	constructor() {
		this.carsObj = {};
		this.attempts = '';
		this.user = new User();
		this.race = new Race();
		this.board = new ScoreBoard();
	}

	async readyGame() {
		this.carsObj = await this.user.getCarNames();
		this.attempts = await this.user.getNumberOfAttempts();
	}

	startGame() {
		let isPlaying = Number(this.attempts);

		while (isPlaying > 0) {
			this.race.rollDiceAndGoForward(this.carsObj);
			this.board.showCurrentRace(this.carsObj)

			isPlaying -= 1;
		}
	}
}
