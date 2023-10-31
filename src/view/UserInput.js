import { Console } from '@woowacourse/mission-utils';
import SYSTEM_MESSAGES from '../constants/SystemMessages.js';
import CONDITIONS from '../constants/Conditions.js';
import ERROR_MESSAGES from '../constants/ErrorMessages.js';

class UserInput {
	#checkExceedMaximumDigits(carName) {
		if (carName.length > CONDITIONS.car_name_max_digits)
			throw new Error(ERROR_MESSAGES.car_name_exceeds_maximum_digits);
	}

	#checkIncludeEscapeSequence(carName) {
		if (carName.includes('\\')) throw new Error(ERROR_MESSAGES.use_escape_sequence);
	}

	#checkHasCarName(carName) {
		if (carName.length === 0) throw new Error(ERROR_MESSAGES.car_has_no_name);
	}

	#checkSameCarName(racingCarNames) {
		const uniqueNames = new Set(racingCarNames);
		if (uniqueNames.size !== racingCarNames.length)
			throw new Error(ERROR_MESSAGES.duplicate_car_name);
	}

	#checkMaximumCarNumber(racingCarNames) {
		if (racingCarNames.length > CONDITIONS.car_maximum_number)
			throw new Error(ERROR_MESSAGES.exceed_maximum_car_number);
	}

	#checkIsNumber(userInput) {
		if (isNaN(userInput)) throw new Error(ERROR_MESSAGES.value_is_not_a_number);
	}

	#checkIsNegative(userInput) {
		if (userInput < 0) throw new Error(ERROR_MESSAGES.value_is_negative_number);
	}

	#checkAttemptExceedMaximum(userInput) {
		if (userInput > CONDITIONS.value_maximum_length)
			throw new Error(ERROR_MESSAGES.value_is_exceeds_maximum_length);
	}

	async inputRacingCarName(question = SYSTEM_MESSAGES.input_racingcar_name) {
		const userInput = await Console.readLineAsync(question);
		const racingCarNames = userInput.split(',').map((carName) => {
			this.#checkExceedMaximumDigits(carName.trim());
			this.#checkIncludeEscapeSequence(carName.trim());
			this.#checkHasCarName(carName.trim());

			return carName.trim();
		});

		this.#checkSameCarName(racingCarNames);
		this.#checkMaximumCarNumber(racingCarNames);

		return racingCarNames;
	}

	async inputAttemptsNum(question = SYSTEM_MESSAGES.number_of_attempts) {
		const userInput = await Console.readLineAsync(question);

		this.#checkIsNumber(userInput);
		this.#checkIsNegative(userInput);
		this.#checkAttemptExceedMaximum(userInput);

		return userInput;
	}
}

export default UserInput;
