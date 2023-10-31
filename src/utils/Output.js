import { Console } from '@woowacourse/mission-utils';
import { myConstants } from '../constants/constants';
export async function promptCarNames() {
	return await Console.readLineAsync(`${myConstants.START}\n`);
}

export async function promptPlayCount() {
	return await Console.readLineAsync(`${myConstants.COUNT}?\n`);
}

export function printCarPosition(name, position) {
	Console.print(`${name} : ${'-'.repeat(position)}`);
}
