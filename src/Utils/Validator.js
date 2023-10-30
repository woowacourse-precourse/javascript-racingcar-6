import { CONSTANTS_NUMBER, ERROR_MESSAGE } from '../constants.js';

class Validator {
	static checkAllCarNameValidate(carNames) {
		const carNameArray = carNames.split(',');

		if (carNameArray.some((carName) => carName.length >= CONSTANTS_NUMBER.MAX_CAR_NAME_LENGTH)) {
			throw new Error(ERROR_MESSAGE.CAR_NAME_LENGTH_OVER_FIVE);
		}
	}
}

export default Validator;
