import User from '../Model/User'
import Race from '../Model/Race'
import ScoreBoard from '../Model/ScoreBoard';
import Output from '../View/Output'
import { GUIDE_MESSAGE } from '../constants/constants';

export default class Controller {
	constructor() {
		this.carsObj = {};
		this.attempts = '';
		this.user = new User();
		this.race = new Race();
		this.board = new ScoreBoard();
		this.output = new Output();
	}

	async readyGame() {
		this.carsObj = await this.user.getCarNames();
		this.attempts = await this.user.getNumberOfAttempts();
	}

	startGame() {
		let isPlaying = Number(this.attempts);

		this.output.printStartGame()

		while (isPlaying > 0) {
			this.race.rollDiceAndGoForward(this.carsObj);
			this.board.showCurrentRace(this.carsObj);

			isPlaying -= 1;
		}
	}

	endGame() {
		const MAX_VALUE = Math.max(...Object.values(this.carsObj));
		const CHAMPIONS = Object.keys(this.carsObj).filter(
			(name) => this.carsObj[name] >= MAX_VALUE
		);
		this.output.print(
			`${GUIDE_MESSAGE.winners} ${CHAMPIONS.join(', ')}`
		);
	}
}
