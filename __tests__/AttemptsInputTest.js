import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE } from '../src/constants/constants.js';

// @note - 테스트 케이스

const carNameValidTestCases = [
	{
		name: '빈 문자열 입력에 대한 테스트',
		input: [''],
		expectedError: ERROR_MESSAGE.no_input,
	},
	{
		name: '공백 입력에 대한 테스트',
		input: ['1    '],
		expectedError: ERROR_MESSAGE.invalid_attempts_pattern,
	},
	{
		name: '입력이 0일 경우 테스트',
		input: ['0'],
		expectedError: ERROR_MESSAGE.number_under_zero,
	},
	{
		name: '숫자 외의 문자가 포함된 경우',
		input: ['-1'],
		expectedError: ERROR_MESSAGE.invalid_attempts_pattern,
	},
];

// @note - 입력값을 받아올 수 있는 mockQuestions

const mockQuestions = (inputs) => {
	MissionUtils.Console.readLineAsync = jest.fn().mockImplementation(() => {
		const input = inputs.shift();
		return Promise.resolve(input);
	});
};

// @note - 테스트

describe('횟수 입력 테스트', () => {
	let app, defaultValue;
	beforeEach(() => {
    app = new App();
    defaultValue = 'bwv,tesla'
  });

	carNameValidTestCases.forEach((testCase) => {
		test(testCase.name, async () => {
			mockQuestions([defaultValue, ...testCase.input]);
			await expect(app.play()).rejects.toThrow(testCase.expectedError);
		});
	});
});
