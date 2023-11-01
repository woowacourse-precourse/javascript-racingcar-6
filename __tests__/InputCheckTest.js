import { checkLength, checkTryCount } from '../src/utils/CheckInput';

describe('입력값 테스트', () => {
	test('입력값의 길이 확인', async () => {
		expect(() => checkLength('kevin,james,charlie')).toThrow();
	});

	test('입력값이 숫자인지 확인', async () => {
		expect(() => checkTryCount('abc')).toThrow();
	});
});
