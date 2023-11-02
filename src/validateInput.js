//@ts-check
import { ERROR } from './constants';
import CustomError from './CustomError';

/**
 * @param {string[]} inputArr
 * @return {string[]}
 * */
export function validateName(inputArr) {
	if (inputArr.length === 1) {
		if (inputArr[0] === '') {
			throw new CustomError(ERROR.NAME, ERROR.NO_INPUT);
		}
		throw new CustomError(ERROR.NAME, ERROR.NO_ALONE);
	}
	const validNameArr = inputArr.map((name) => {
		if (name.length > 5) {
			throw new CustomError(ERROR.NAME, ERROR.ONLY_UNDER_FIVE);
		} else {
			return name;
		}
	});
	return validNameArr;
}

/**
 * @param {string} str
 * @return {boolean}}
 * */
function doesOtherThanDigitsExists(str) {
	if (str.replace(/\d/g, '').length > 0) {
		return true;
	} else {
		return false;
	}
}

/**	@type {function(string):string} */
export function validateNumber(input) {
	if (input === '') {
		throw new CustomError(ERROR.NAME, ERROR.NO_INPUT);
	}
	if (input === '0') {
		throw new CustomError(ERROR.NAME, ERROR.NO_ZERO);
	}
	if (doesOtherThanDigitsExists(input)) {
		throw new CustomError(ERROR.NAME, ERROR.ONLY_NUMBER);
	}
	return input;
}
