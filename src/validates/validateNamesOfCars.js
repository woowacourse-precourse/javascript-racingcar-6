import { ERROR_MESSAGE } from "../constants/message.js";

const isOverFive = (namesOfCars) => namesOfCars.some((name) => name.length > 5);

const isExistDuplicateName = (namesOfCars) =>
	namesOfCars.some(
		(name, _, array) =>
			array.filter((compareName) => compareName === name).length > 1,
	);

/**
 *
 * @param {string[]} namesOfCars
 */
const validateNamesOfCars = (namesOfCars) => {
	// 5자 초과
	if (isOverFive(namesOfCars)) {
		throw new Error(ERROR_MESSAGE.lengthOfNameOverFive);
	}

	// 중복 존재
	if (isExistDuplicateName(namesOfCars)) {
		throw new Error(ERROR_MESSAGE.existDuplicateName);
	}
};

export default validateNamesOfCars;
