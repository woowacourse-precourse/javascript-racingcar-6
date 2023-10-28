// @ts-check
import { INPUT_REQUEST } from './constants';
import { Random, Console } from '@woowacourse/mission-utils';
import { validateName, validateNumber } from './validateInput';

/**	@type {function():Promise<string[]>} */
export async function getUserName() {
	Console.print(INPUT_REQUEST.NAME);
	/**	@type {string} */
	const input = await Console.readLineAsync(INPUT_REQUEST.NAME);
	/**	@type {string[]} */
	const inputArr = input.split(',');
	/**	@type {string[]} */
	const validNameArr = validateName(inputArr);
	return validNameArr;
}
/**	@type {function():Promise<number>} */
export async function getTrialFrequency() {
	Console.print(INPUT_REQUEST.FREQUENCY);
	/**	@type {string} */
	const input = await Console.readLineAsync(INPUT_REQUEST.FREQUENCY);

	const validNumber = validateNumber(input);
	return +validNumber;
}
/**	@type {function():number} */
export function getRandomNumber() {
	const randomNumber = Random.pickNumberInRange(0, 9);
	return +randomNumber;
}
