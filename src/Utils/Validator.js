import { CONSTANTS, ERROR_MESSAGE } from '../constants.js';

class Validator {
	// 자동차 이름 길이가 5 미만인지 확인
	static checkAllCarNameValidate(carNames) {
		const carNameArray = carNames.split(',');

		if (carNameArray.some((carName) => carName.length >= CONSTANTS.maxCarNameLength)) {
			throw new Error(ERROR_MESSAGE.nameLengthErrorMessage);
		}
	}

	// 전달받은 인자가 유효한 숫자인지 확인
	static isNumber(number) {
		if (Number.isNaN(number) && number > 0) {
			throw new Error(ERROR_MESSAGE.isNotNumberMessage);
		}
	}
}

export default Validator;
