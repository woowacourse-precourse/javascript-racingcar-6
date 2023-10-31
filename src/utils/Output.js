import { Console } from '@woowacourse/mission-utils';
import { myConstants } from '../constants/constants';

export const promptCarNames = async () => {
	return await Console.readLineAsync(`${myConstants.START}\n`);
};

export const promptPlayCount = async () => {
	return await Console.readLineAsync(`${myConstants.COUNT}?\n`);
};

export const printCarPosition = (name, position) => {
	Console.print(`${name} : ${'-'.repeat(position)}`);
};
