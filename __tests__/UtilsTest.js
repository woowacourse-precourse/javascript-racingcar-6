import isNan from '../src/utils/isNan.js';

describe('isNan 테스트', () => {
	test('isNan 함수가 숫자 배열에서도 잘 동작하는지 확인', () => {
		const input = [1, 2];

		expect(isNan(input)).toEqual(false);
	});

	test('isNan 함수가 Nan 배열에서도 잘 동작하는지 확인', () => {
		const input = ['a', 1];

		expect(isNan(input)).toEqual(true);
	});
});
