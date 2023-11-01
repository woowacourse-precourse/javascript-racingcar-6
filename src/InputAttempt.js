import { Console } from '@woowacourse/mission-utils';

export default async function InputAttempt() {
	try {
		const answer = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

		if (Number(answer) === 0) {
			throw new Error('[ERROR] 0은 입력할 수 없습니다.');
		}
		if (!Boolean(Number(answer))) {
			throw new Error('[ERROR] 숫자를 입력해주세요.');
		}
		if (!Number.isInteger(Number(answer)) || Number(answer) < 0) {
			throw new Error('[ERROR] 양의 정수를 입력해주세요.');
		}
		return Number(answer);
	} catch (error) {
		Console.print(`${error.message}`);
		throw error;
	}
}
