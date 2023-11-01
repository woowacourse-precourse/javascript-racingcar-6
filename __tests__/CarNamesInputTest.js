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
		input: ['b        wv'],
		expectedError: ERROR_MESSAGE.invalid_car_names_pattern,
	},
	{
		name: '특수문자 입력에 대한 테스트',
		input: ['bwv!@,b  wv'],
		expectedError: ERROR_MESSAGE.invalid_car_names_pattern,
	},
	{
		name: '주어진 길이보다 초과된 입력에 대한 테스트',
		input: ['ford,porsche'],
		expectedError: ERROR_MESSAGE.invalid_car_name_length,
	},
	{
		name: '중복된 이름 입력에 대한 테스트',
		input: ['volvo,jeep,volvo'],
		expectedError: ERROR_MESSAGE.duplicate_name_found,
	},
];

const mockQuestions = (inputs) => {
	MissionUtils.Console.readLineAsync = jest.fn().mockImplementation(() => {
		const input = inputs.shift();
		return Promise.resolve(input);
	});
};

describe('자동차 이름 테스트', () => {
	let app;
	beforeEach(() => (app = new App()));

	carNameValidTestCases.forEach((testCase) => {
		test(testCase.name, async () => {
			mockQuestions(testCase.input);
			await expect(app.play()).rejects.toThrow(testCase.expectedError);
		});
	});
});
