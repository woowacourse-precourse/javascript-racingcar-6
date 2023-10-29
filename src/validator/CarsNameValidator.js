import errorMessage from '../constants/errorMessage.js';
import Util from '../util/Util.js';

class CarsNameValidator {
	validateEmptyString(carsName) {
		if (carsName === '') {
			throw new Error(errorMessage.EMPTY_STRING);
		}
	}

	validateNotSetCarName(carsName) {
		Util.trimStringInArray(carsName.split(',')).forEach(carName => {
			if (carName === '') {
				throw new Error(errorMessage.CAR_NAME_NOT_SET);
			}
		});
	}

	validateNameLength(carsName) {
		Util.trimStringInArray(carsName.split(',')).forEach(carName => {
			if (carName.length > 5) {
				throw new Error(errorMessage.EXCEEDED_LENGTH);
			}
		});
	}

	validateDuplicatedName(carsName) {
		const carNameArray = Util.trimStringInArray(carsName.split(','));
		if (carNameArray.length !== (new Set(carNameArray)).size) {
			throw new Error(errorMessage.DUPLICATED_NAME);
		}
	}

	static validateCarsName(carsName) {
		const carsNameValidator = new CarsNameValidator();
		carsNameValidator.validateEmptyString(carsName);
		carsNameValidator.validateNotSetCarName(carsName);
		carsNameValidator.validateNameLength(carsName);
		carsNameValidator.validateDuplicatedName(carsName);
	}
}

export default CarsNameValidator;