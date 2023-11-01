import { CAR_NAME_MIN_LENGTH, ERROR_MESSAGE } from '../constants/constants';
import ScoreBoard from './ScoreBoard';

export default class Validator {
	constructor() {
		this.names = [];
		this.board = new ScoreBoard();
	}

	checkDuplicatedNames() {
		const STACK = [];

		this.names.forEach((name) => {
			if (!STACK.includes(name)) {
				STACK.push(name);
			} else {
				throw new Error(ERROR_MESSAGE.duplicate_name_found);
			}
		});
	}

	checkSpace() {
		this.names.forEach((name) => {
			if (name.includes(' ')) {
				throw new Error(ERROR_MESSAGE.invalid_car_names_pattern);
			}
		});
	}

	checkInvalidPattern() {
		this.names.forEach((name) => {
			if (!/^[0-9A-Za-z,ㄱ-힣]*$/.test(name)) {
				throw new Error(ERROR_MESSAGE.invalid_car_names_pattern);
			}
		});
	}

	checkInvalidLength() {
		this.names.forEach((name) => {
			if (name.length > CAR_NAME_MIN_LENGTH) {
				throw new Error(ERROR_MESSAGE.invalid_car_name_length);
			}
		});
	}

	checkCarNamesValid(userInput) {
		if (!userInput) {
			throw new Error(ERROR_MESSAGE.no_input);
		}

		this.names = userInput.split(',');

		this.checkSpace();
		this.checkInvalidPattern();
		this.checkInvalidLength();
		this.checkDuplicatedNames();

		return this.board.getScoreBoard(this.names);
	}

	checkAttemptsValid(attempts) {
		if (!attempts) {
			throw new Error(ERROR_MESSAGE.no_input);
		}

		if (/\s/.test(attempts)) {
			throw new Error(ERROR_MESSAGE.invalid_attempts_pattern);
		}

		if (Number(attempts) === 0) {
			throw new Error(ERROR_MESSAGE.number_under_zero);
		}

		if (!/^\d+$/.test(attempts)) {
			throw new Error(ERROR_MESSAGE.invalid_attempts_pattern);
		}

		return attempts;
	}
}
