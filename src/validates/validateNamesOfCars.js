import { ERROR_MESSAGE } from "../constants/message.js";

const isOverFive = (namesOfCars) => namesOfCars.some((name) => name.length > 5);

const isExistDuplicateName = (namesOfCars) =>
	namesOfCars.some(
		(name, _, array) =>
			array.filter((compareName) => compareName === name).length > 1,
	);

/**
 * @description 5글자 초과, 중복 이름 존재 여부 검사
 * @param {string[]} namesOfCars
 */
const validateNamesOfCars = (namesOfCars) => {
	if (isOverFive(namesOfCars)) {
		throw new Error(ERROR_MESSAGE.lengthOfNameOverFive);
	}

	if (isExistDuplicateName(namesOfCars)) {
		throw new Error(ERROR_MESSAGE.existDuplicateName);
	}
};

export default validateNamesOfCars;
