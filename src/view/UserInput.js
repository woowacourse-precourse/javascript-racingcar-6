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

	#checkSameCarName(racingCarNames) {
		const uniqueNames = new Set(racingCarNames);
		if (uniqueNames.size !== racingCarNames.length)
			throw new Error(ERROR_MESSAGES.duplicate_car_name);
	}

	async inputRacingCarName(question = SYSTEM_MESSAGES.input_racingcar_name) {
		const userInput = await Console.readLineAsync(question);
		const racingCarNames = userInput.split(',').map((carName) => {
			this.#checkExceedMaximumDigits(carName.trim());
			this.#checkIncludeEscapeSequence(carName.trim());

			return carName.trim();
		});

		this.#checkSameCarName(racingCarNames);

		return racingCarNames;
	}
}

export default UserInput;
