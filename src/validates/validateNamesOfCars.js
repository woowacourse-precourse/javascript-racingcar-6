import { ERROR_MESSAGE } from "../constants/message.js";

/**
 *
 * @param {string[]} namesOfCars
 */
const validateNamesOfCars = (namesOfCars) => {
	// 5자 초과
	const isOverFive = namesOfCars.some((name) => name.length > 5);
	if (isOverFive) {
		throw new Error(ERROR_MESSAGE.lengthOfNameOverFive);
	}

	// 중복 존재
	const isExistDuplicateName = namesOfCars.some(
		(name, _, array) =>
			array.filter((compareName) => compareName === name).length > 1,
	);
	if (isExistDuplicateName) {
		throw new Error(ERROR_MESSAGE.existDuplicateName);
	}
};

export default validateNamesOfCars;
