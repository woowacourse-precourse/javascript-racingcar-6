import Validator from './Validator';
import Input from '../View/Input';
import Output from '../View/Output';
import { GUIDE_MESSAGE } from '../constants/constants';

export default class User {
	constructor() {
		this.validator = new Validator();
		this.input = new Input();
		this.output = new Output();
	}

	async getCarNames() {
		const INPUT = await this.input.readInput(GUIDE_MESSAGE.enter_car_names);
		this.output.printCarNames(INPUT);
		return this.validator.checkCarNamesValid(String(INPUT));
	}

	async getNumberOfAttempts() {
		const INPUT = await this.input.readInput(
			GUIDE_MESSAGE.enter_number_of_attempts
		);
		this.output.printAttempts(INPUT);
		return this.validator.checkAttemptsValid(String(INPUT));
	}
}
