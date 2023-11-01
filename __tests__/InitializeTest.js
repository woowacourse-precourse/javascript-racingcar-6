import App from '../src/App.js';
import Initialize from '../src/Initialize.js'
import { MissionUtils } from '@woowacourse/mission-utils';
import ERROR_MESSAGES from '../src/constant/errorMessages';

const mockQuestions = (inputs) => {
	MissionUtils.Console.readLineAsync = jest.fn();

	MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockQuestion = (input) => {
	MissionUtils.Console.readLineAsync = jest.fn();

	MissionUtils.Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(input);
  });
};

describe('초기화 클래스', () => {
	test('자동차들의 이름이 정상적인 경우', async () => {
		const input = 'pobi,woni';
		const test = new Initialize();
		mockQuestion(input);
		await expect(test.inputNamesCheckType()).resolves.toEqual(undefined);
	});

	test('자동차들의 이름이 문자열이 아닐 경우', async () => {
		const input = 2;
		const test = new Initialize();
		
		mockQuestion(input);		
		await expect(test.inputNamesCheckType()).rejects.toThrow(ERROR_MESSAGES.stringType);
	});
	
	test('시도하는 횟수가 문자열이 아닐 경우', async () => {
		const input = 2;
		const test = new Initialize();

		mockQuestion(input);
		await expect(test.inputAttemptCountCheckType()).rejects.toThrow(ERROR_MESSAGES.stringType);
	});
	
	test('시도하는 횟수의 문자열에 숫자가 아닌 다른 값이 포함된 경우', async () => {
		const input = '1234a';
		const test = new Initialize();

		mockQuestion(input);
		await expect(test.inputAttemptCountCheckType()).rejects.toThrow(ERROR_MESSAGES.outOfRange);
	});
	test('문자열을 쉼표로 구분하여 이름을 만들때 빈 문자열이 존재하는 경우', async () => {
		const test = new Initialize();
		test.inputNames = 'pobbi,jeny,woni,';

		expect(() => test.pushNames()).toThrow(ERROR_MESSAGES.stringMinLength);
	});
	test('5글자를 초과하는 이름이 존재할 경우', () => {
		const test = new Initialize();
		test.inputNames = 'beyonce'

		expect(() => test.pushNames()).toThrow(ERROR_MESSAGES.nameMaxLength);
	});
	test.each([
		{inputs: ['pobbi,woni,jun', '5'], expectedValue: {names:['pobbi', 'woni', 'jun'], attemptCount: 5}},
		{inputs: ['pobbi', '2'], expectedValue: {names:['pobbi'], attemptCount: 2}}
	])	
	('통합테스트', async ({inputs, expectedValue}) => {
		const test = new Initialize();
		mockQuestions(inputs);
		await expect(test.initializeCarArrayAndNumber()).resolves.toEqual(expectedValue);
	})
});
