//@ts-check
import { ERROR, REG_EXP } from './constants';
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

function containsSpecialCharacter(str) {
	const regex = new RegExp(REG_EXP.SPECIAL_CHARACTER);
	//return regex.test(str);
	return str.match(REG_EXP.SPECIAL_CHARACTER);
}

function containsCharacters(str) {
	const regex = new RegExp(REG_EXP.STRING_CHARACTER);
	//return regex.test(str);
	return str.match(REG_EXP.STRING_CHARACTER);
}

/**	@type {function(string):string} */
export function validateNumber(input) {
	if (input === '') {
		throw new CustomError(ERROR.NAME, ERROR.NO_INPUT);
	}
	if (containsSpecialCharacter(input)) {
		console.log(containsSpecialCharacter(input))
		throw new CustomError(ERROR.NAME, ERROR.ONLY_NUMBER);
	}
	if (containsCharacters(input)) {
		console.log(containsCharacters(input))
		throw new CustomError(ERROR.NAME, ERROR.ONLY_NUMBER);
	}
	if (input === '0') {
		throw new CustomError(ERROR.NAME, ERROR.NO_ZERO);
	}
	return input;
}
