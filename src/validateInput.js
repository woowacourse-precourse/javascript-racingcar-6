import { ERROR, REG_EXP } from './constants';
import CustomError from './CustomError';

export function validateName(inputArr) {
	//input이 없는 경우
	if (inputArr.length === 0) {
		console.log(new CustomError(ERROR.NAME, ERROR.NO_INPUT));
		throw new CustomError(ERROR.NAME, ERROR.NO_INPUT);
	}
	//input이 하나인 경우
	if (inputArr.length === 1) {
		console.log(new CustomError(ERROR.NAME, ERROR.NO_ALONE));
		throw new CustomError(ERROR.NAME, ERROR.NO_ALONE);
	}
	//input.length가 5 초과인 경우
	const validNameArr = inputArr.map((name) => {
		if (name.length > 5) {
			console.log(new CustomError(ERROR.NAME, ERROR.ONLY_UNDER_FIVE));
			throw new CustomError(ERROR.NAME, ERROR.ONLY_UNDER_FIVE);
		} else {
			return name;
		}
	});
	console.log('valid name Arr:', validNameArr);
	return validNameArr;
}

export function validateNumber(input) {
	if (containsSpecialCharacter(input)) {
		console.log(new CustomError(ERROR.NAME, ERROR.ONLY_NUMBER));
		throw new CustomError(ERROR.NAME, ERROR.ONLY_NUMBER);
	}
	if (containsCharacters(input)) {
		console.log(new CustomError(ERROR.NAME, ERROR.ONLY_NUMBER));
		throw new CustomError(ERROR.NAME, ERROR.ONLY_NUMBER);
	}
	if (input === 0) {
		console.log(new CustomError(ERROR.NAME, ERROR.NO_ZERO));
		throw new CustomError(ERROR.NAME, ERROR.NO_ZERO);
	}
	return input;
}
function containsSpecialCharacter(str) {
	const regex = new RegExp(REG_EXP.SPECIAL_CHARACTER);
	return regex.test(str);
}
function containsCharacters(str) {
	const regex = new RegExp(REG_EXP.STRING_CHARACTER);
	return regex.test(str);
}
