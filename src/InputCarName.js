import { Console } from '@woowacourse/mission-utils';

export default async function InputCarName() {
	try {
		const answer = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
		const nameList = answer.split(',');
		const REGEX = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|]+$/;
		const filterName = nameList.filter((name) => name.length < 5 && REGEX.test(name));
		if (filterName.length !== nameList.length) {
			throw new Error('[ERROR] 공백없이 5글자 이하의 영어 및 한글만 입력해주세요.');
		}
		return nameList;
	} catch (error) {
		Console.print(`${error.message}`);
	}
}
