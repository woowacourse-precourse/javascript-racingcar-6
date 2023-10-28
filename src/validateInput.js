import { ERROR, REG_EXP } from './constants';
import CustomError from './CustomError';
import {Console} from '@woowacourse/mission-utils'

function validateName(inputArr) {
	//input이 없는 경우
	if (inputArr.length === 1 && inputArr[0] === '') {
		Console.print(ERROR.NO_INPUT);
		throw new CustomError(ERROR.NAME, ERROR.NO_INPUT);
	}
	//input이 하나인 경우
	if (inputArr.length === 1) {
		Console.print(ERROR.NO_ALONE);
		throw new CustomError(ERROR.NAME, ERROR.NO_ALONE);
	}
	//input.length가 5 초과인 경우
	const validNameArr = inputArr.map((name) => {
		if (name.length > 5) {
			Console.print(ERROR.ONLY_UNDER_FIVE);
			throw new CustomError(ERROR.NAME, ERROR.ONLY_UNDER_FIVE);
		}
		return name;
	});
	return validNameArr;
}

function validateNumber(input) {
	if (containsSpecialCharacter(input)) {
		Console.print(ERROR.ONLY_NUMBER);
		throw new CustomError(ERROR.NAME, ERROR.ONLY_NUMBER);
	}
	if (containsCharacters(input)) {
		Console.print(ERROR.ONLY_NUMBER);
		throw new CustomError(ERROR.NAME, ERROR.ONLY_NUMBER);
	}
	if(input === '0'){
		Console.print(ERROR.NO_ZERO)
		throw new CustomError(ERROR.NAME, ERROR.NO_ZERO)
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

export { validateName, validateNumber };
