import { Console } from '@woowacourse/mission-utils';
import { validateCarNameLength } from './Validation.js';
// 5자 이하,
export async function getCarNamesList() {
	const carNames = await Console.readLineAsync(
		'경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분\n'
	);
	const carNamesList = carNames.split(',');
	carNamesList.map((name) => {
		validateCarNameLength(name);
	});
	return carNamesList;
}
export async function getPlayCount() {
	const playCount = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
	return Number(playCount);
}
