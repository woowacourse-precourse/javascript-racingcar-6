import Util from '../../src/util/Util.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockRandoms = (numbers) => {
	MissionUtils.Random.pickNumberInRange = jest.fn();
	numbers.reduce((acc, number) => {
		return acc.mockReturnValueOnce(number);
	}, MissionUtils.Random.pickNumberInRange);
};

describe('유틸 클래스 테스트', () => {
	test('isForward에서 4미만일 때 false 리턴', () => {
		mockRandoms([0, 1, 2, 3]);
		const result = Util.isForward();
		expect(result).toBe(false);
	});

	test('isForward에서 4이상일 때 true 리턴', () => {
		mockRandoms([4, 5, 6, 7, 8, 9]);
		const result = Util.isForward();
		expect(result).toBe(true);
	});

	test('어레이 안의 공백이 포함된 문자를 trim하여 반환', () => {
		const input = [' A ', ' B', 'C '];
		const result = ['A', 'B', 'C'];
		expect(Util.trimStringInArray(input)).toEqual(result);
	})

	test('어레이 안의 공백 포함 문자가 없다면 그대로 반환', () => {
		const input = ['A', 'B', 'C'];
		const result = ['A', 'B', 'C'];
		expect(Util.trimStringInArray(input)).toEqual(result);
	});

	test('getWinners를 통해 1명의 우승자 반환', () => {
		const input = [
			{ name: 'A', forwardCount: 1 },
			{ name: 'B', forwardCount: 2 },
			{ name: 'C', forwardCount: 3 },
		];
		const result = 'C';
		expect(Util.getWinners(input)).toEqual(result);
	});

	test('getWinners를 통해 여러명의 우승자 반환', () => {
		const input = [
			{ name: 'A', forwardCount: 1 },
			{ name: 'B', forwardCount: 3 },
			{ name: 'C', forwardCount: 3 },
		];
		const result = 'B, C';
		expect(Util.getWinners(input)).toEqual(result);
	});
});
