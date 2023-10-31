import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App';
import { ERROR_MESSAGE } from '../src/constants/constants';

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

const mockQuestions = (inputs) => {
	MissionUtils.Console.readLineAsync = jest.fn().mockImplementation(() => {
		const input = inputs.shift();
		return Promise.resolve(input);
	});
};


describe('횟수 입력 테스트', () => {
	let app, defaultValue;
	beforeEach(() => {
		app = new App();
		defaultValue = 'bwv,tesla';
	});

	carNameValidTestCases.forEach((testCase) => {
		test(testCase.name, async () => {
			mockQuestions([defaultValue, ...testCase.input]);
			await expect(app.play()).rejects.toThrow(testCase.expectedError);
		});
	});
});
