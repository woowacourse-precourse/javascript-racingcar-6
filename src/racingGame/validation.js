import { ERROR } from '../constants/constants.js';

const validation = {
	carsNameValid(cars) {
		const carLength = cars.length < 2;
		const nameLength = cars.some((car) => car.length < 0 || car.length > 5);
		const gap = cars.some((car) => !/^[가-힣a-zA-Z0-9]+$/.test(car));
		const deduplicateObj = new Set(cars);
		const duplicate = deduplicateObj.size !== cars.length;

		if (carLength || nameLength || gap || duplicate) {
			throw new Error(ERROR.CAR_NAME);
		}
	},
	tryNumberValid(number) {
		const notNumber = isNaN(number);
		const negative = number < 1;

		if (notNumber || negative) {
			throw new Error(ERROR.TRY_NUMBER);
		}
	},
};

export default validation;
