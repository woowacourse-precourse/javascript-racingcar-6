import Racing from '../../src/racing/Racing.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockRandoms = (numbers) => {
	MissionUtils.Random.pickNumberInRange = jest.fn();
	numbers.reduce((acc, number) => {
		return acc.mockReturnValueOnce(number);
	}, MissionUtils.Random.pickNumberInRange);
};

describe('Racing 클래스 테스트', () => {
	test('생성한 인스턴스 어레이를 확인', () => {
		// given
		const racing = new Racing(['A', 'B', 'C']);
		const result = [
			{ name: 'A', forwardCount: 0 },
			{ name: 'B', forwardCount: 0 },
			{ name: 'C', forwardCount: 0 },
		];

		// then
		expect(racing.getCarStateArray()).toEqual(result);
	});

	test('생성한 인스턴스들을 2번씩 전진시켰을 때 값 확인', () => {
		// given
		mockRandoms([4, 5, 6, 7, 8, 9]);
		const racing = new Racing(['A', 'B', 'C']);
		const result = [
			{ name: 'A', forwardCount: 2 },
			{ name: 'B', forwardCount: 2 },
			{ name: 'C', forwardCount: 2 },
		];

		// when
		racing.tryCarsMove();
		racing.tryCarsMove();

		// then
		expect(racing.getCarStateArray()).toEqual(result);
	});

});
