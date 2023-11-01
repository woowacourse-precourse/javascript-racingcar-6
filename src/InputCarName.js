import { Console } from '@woowacourse/mission-utils';

export default async function InputCarName() {
	try {
		const answer = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
		const nameList = answer.split(',');
		const REGEX = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|]+$/;
		const filterName = nameList.filter((name) => name.length < 5 && REGEX.test(name));

		if (nameList.length === 1) {
			throw new Error('[ERROR] 이름은 2개 이상 작성해야 합니다.');
		}
		if (filterName.length !== nameList.length) {
			throw new Error('[ERROR] 공백없이 5글자 이하의 영어 및 한글만 입력해주세요.');
		}
		if (new Set(filterName).size !== filterName.length) {
			throw new Error('[ERROR] 중복된 이름이 존재합니다.');
		}
		nameList.forEach((car, idx) => {
			nameList[idx] = `${car} : `;
		});
		return nameList;
	} catch (error) {
		Console.print(`${error.message}`);
		throw error;
	}
}
