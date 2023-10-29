import errorMessage from '../constants/errorMessage.js';

class RoundsCountValidator {
	validateZero(roundsCount) {
		if (roundsCount === '0') {
			throw new Error(errorMessage.WRONG_ROUNDS_COUNT);
		}
	}

	validateNaturalNumber(roundsCount) {
		if (!Number.isInteger(Number(roundsCount)) || Number(roundsCount) < 1) {
			throw new Error(errorMessage.WRONG_ROUNDS_COUNT);
		}
	}

	validateNotNumber(roundsCount) {
		if (Number.isNaN(roundsCount)) {
			throw new Error(errorMessage.WRONG_ROUNDS_COUNT);
		}
	}

	static validate(roundsCount) {
		const roundsCountValidator = new RoundsCountValidator();
		roundsCountValidator.validateZero(roundsCount);
		roundsCountValidator.validateNaturalNumber(roundsCount);
		roundsCountValidator.validateNotNumber(roundsCount);
	}
}

export default RoundsCountValidator;