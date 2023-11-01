import { validateName, validateNumber } from '../src/validateInput';
describe('이름 입력값 유효성 테스트', () => {
	test('입력값이 없을 때', () => {
		const input = '';
		const result = input.split(',');
		expect(() => {
			validateName(result);
		}).rejects.toThrow();
	});
	test('이름이 하나일 때', () => {
		const input = '2';
		const result = input.split(',');
		expect(() => {
			validateName(result).toBe('2');
		});
	});
	test('입력값에 공백이 있는 경우', () => {
		const input = 'java, abvds';
		const result = input.split(',');
		expect(() => {
			validateName(result).rejects.toThrow();
		});
	});
	test('이름이 5자리 초과일 때', () => {
		const input = 'abcdefg,ab';
		const result = input.split(',');
		expect(() => {
			validateName(result).rejects.toThrow();
		});
	});
});
describe('숫자 입력값 유효성 테스트', () => {
	test('입력값이 없을 때', () => {
		const input = '';
		expect(() => {
			validateNumber(input);
		}).rejects.toThrow();
	});
	test('입력값에 특수문자가 포함됐을 경우', () => {
		const input = '3./';
		expect(() => {
			validateNumber(input);
		}).rejects.toThrow();
	});
	test('입력값에 string이 포함됐을 경우', () => {
		const input = 'java';
		expect(() => {
			validateNumber(input);
		}).rejects.toThrow();
	});
});
