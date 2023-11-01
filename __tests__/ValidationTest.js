import ERROR from '../src/constants/Error.js';
import driverNamesValidation from '../src/utils/validation/driverNamesValidation.js';
import tryCountValidation from '../src/utils/validation/tryCountValidation.js';

describe('게임 참여자들의 이름 유효성 테스트', () => {
	test('너무 짧거나 긴 이름', () => {
		const tooShortName = ['']; // 짧은 이름
		const tooLongName = ['안녕하세요안녕하세요안녕하세요']; // 짧은 이름

		expect(() => driverNamesValidation(tooShortName)).toThrow(
			`${ERROR.prefix} ${ERROR.nameLength}`
		);
		expect(() => driverNamesValidation(tooLongName)).toThrow(`${ERROR.prefix} ${ERROR.nameLength}`);
	});

	test('입력받은 이름의 개수가 max를 초과하는 경우', () => {
		const tooManyNames = new Array(100).fill().map(() => '이름');

		expect(() => driverNamesValidation(tooManyNames)).toThrow(
			`${ERROR.prefix} ${ERROR.namesCount}`
		);
	});
});

describe('총 시도 횟수의 유효성 테스트', () => {
	test('공백 입력', () => {
		const empty = '';

		expect(() => tryCountValidation(empty)).toThrow(`${ERROR.prefix} ${ERROR.empty}`);
	});

	test('숫자가 아닌 값의 입력', () => {
		const notNumber = 'aaa';

		expect(() => tryCountValidation(notNumber)).toThrow(`${ERROR.prefix} ${ERROR.isNan}`);
	});

	test('가능한 시도 횟수의 범위를 벗어난 입력', () => {
		const small = 0;
		const large = 100;

		expect(() => tryCountValidation(small)).toThrow(`${ERROR.prefix} ${ERROR.range}`);
		expect(() => tryCountValidation(large)).toThrow(`${ERROR.prefix} ${ERROR.range}`);
	});
});
