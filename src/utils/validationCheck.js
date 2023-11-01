import { CAR, ERROR_MESSAGE } from "../Constants.js";

export const carNameCheck = (inputList) => {
	if (inputList.length < 2) throw new Error(ERROR_MESSAGE.nameNum);

	inputList.forEach((input) => {
		if (!input.length) throw new Error(ERROR_MESSAGE.nameForm);
		else if (input.length > CAR.nameMaxLength)
			throw new Error(ERROR_MESSAGE.nameLength);
	});
};

export const tryNumCheck = (input) => {
	if (isNaN(input)) throw new Error(ERROR_MESSAGE.tryNum);
	else if (!Number.isInteger(+input)) throw new Error(ERROR_MESSAGE.tryNum);
	else if (input <= 0) throw new Error(ERROR_MESSAGE.tryNum);
};
