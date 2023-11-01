import { ERROR_MESSAGE } from "../constants/message.js";

const isExistNotNumberChar = (numberOfAttempts) =>
	numberOfAttempts.split("").some((char) => char < "0" || char > "9");

const isZero = (numberOfAttempts) => parseInt(numberOfAttempts, 10) === 0;

/**
 * @description 문자열이 숫자인지 검사 (아라비아 숫자로 이루어진 값만 인정, 자연수만 인정)
 * @param {string} numberOfAttempts
 */
const validateNumberOfAttempts = (numberOfAttempts) => {
	if (isExistNotNumberChar(numberOfAttempts)) {
		throw new Error(ERROR_MESSAGE.onlyNaturalNumber);
	}

	if (isZero(numberOfAttempts)) {
		throw new Error(ERROR_MESSAGE.onlyNaturalNumber);
	}
};

export default validateNumberOfAttempts;
