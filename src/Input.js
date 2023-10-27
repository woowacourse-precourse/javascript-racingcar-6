import { Console } from '@woowacourse/mission-utils';

// 5자 이하,
async function getCarNamesList() {
	const carNames = await Console.readLineAsync(
		'경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분'
	);
	const carNamesList = carNames.split(',');
	carNamesList.map((name) => {
		//차후 검증 함수로 바꿀 것.
		if (name.length > 5) {
			throw new Error('[ERROR] 특정 자동차의 이름이 5자를 초과하였습니다.');
		}
	});
	return carNamesList;
}
