import { CONSTANTS, ERROR_MESSAGE } from '../constants.js';

class Validator {
	// 자동차 이름 길이가 5 미만인지 확인
	static checkAllCarNameValidate(carNames) {
		const carNameArray = carNames.split(',');

		if (carNameArray.some((carName) => carName.length >= CONSTANTS.MAX_CAR_NAME_LENGTH)) {
			throw new Error(ERROR_MESSAGE.CAR_NAME_LENGTH_OVER_FIVE);
		}
	}

	// 전달받은 인자가 숫자인지 확인
	static isNumber(number) {
		if (Number.isNaN(number)) {
			throw new Error(ERROR_MESSAGE.IS_NOT_NUMBER);
		}
	}
}

export default Validator;
