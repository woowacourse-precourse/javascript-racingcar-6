import { myConstants } from '../constants/constants';
export function validateCarNameLength(name) {
	if (name.length > 5) {
		throw new Error(`${myConstants.CARNAME_ERROR}`);
	}
}

export const validateNames = (names) => {
	names.forEach((name) => {
		validateCarNameLength(name);
	});
};

export const validatePlayCount = (str) => {
	const checkStyle = /\d/;
	if (!checkStyle.test(str)) {
		throw new Error(`${myConstants.PLAYCOUNT_ERROR}`);
	}
};

export const validateRandomNum = (num) => {
	if (typeof num !== 'number') {
		throw new Error(`${myConstants.RANDOMNUM_ERROR_TYPE}`);
	}
	if (num < 0 || num > 9) {
		throw new Error(`${myConstants.RANDOMNUM_ERROR_NUM}`);
	}
};

export const validateForMove = (num) => {
	return num > 3;
};
