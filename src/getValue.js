// @ts-check

import { INPUT_REQUEST } from './constants';
import { Random, Console } from '@woowacourse/mission-utils';
import { validateName, validateNumber } from './validateInput';

/** @return {Promise<string[]>} */
export async function getUserName() {
	Console.print(INPUT_REQUEST.NAME);
	const input = await Console.readLineAsync(INPUT_REQUEST.NAME);
	const inputArr = input.split(',');
	const validNameArr = validateName(inputArr);
	return validNameArr;
}
/**	@return {Promise<number>} */
export async function getTrialFrequency() {
	Console.print(INPUT_REQUEST.FREQUENCY);
	const input = await Console.readLineAsync(INPUT_REQUEST.FREQUENCY);
	const validNumber = validateNumber(input);
	return +validNumber;
}
/**	@return {number} */
export function getRandomNumber() {
	const randomNumber = Random.pickNumberInRange(0, 9);
	return +randomNumber;
}
