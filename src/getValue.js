import { INPUT_REQUEST } from './constants';
import { Random, Console } from '@woowacourse/mission-utils';
import { validateName, validateNumber } from './validateInput';

async function getUserName() {
	Console.print(INPUT_REQUEST.NAME);
	const input = await Console.readLineAsync(INPUT_REQUEST.NAME);
	const inputArr = input.split(',');
	const validNameArr = validateName(inputArr);
	Console.print(...validNameArr);
	return validNameArr;
}

async function getTrialFrequency() {
	Console.print(INPUT_REQUEST.FREQUENCY);
	const input = await Console.readLineAsync(INPUT_REQUEST.FREQUENCY);
	const validNumber = validateNumber(input);
	Console.print(validNumber);
	return +validNumber;
}

async function getRandomNumber() {
	const randomNumber = await Random.pickNumberInRange(0, 9);
	return +randomNumber;
}
export { getUserName, getTrialFrequency, getRandomNumber };
