import { MissionUtils } from '@woowacourse/mission-utils';
import validation from '../src/racingGame/validation.js';

// 원본 함수 export 대신 복사해서 사용.
export const mockQuestions = (inputs) => {
	MissionUtils.Console.readLineAsync = jest.fn();

	MissionUtils.Console.readLineAsync.mockImplementation(() => {
		const input = inputs.shift();
		return Promise.resolve(input);
	});
};

const mockRandoms = (numbers) => {
	MissionUtils.Random.pickNumberInRange = jest.fn();
	numbers.reduce((acc, number) => {
		return acc.mockReturnValueOnce(number);
	}, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
	const logSpy = jest.spyOn(MissionUtils.Console, 'print');
	logSpy.mockClear();
	return logSpy;
};

describe('자동차 이름 입력 받기', () => {
	test('자동차 이름은 각각 5자 이하만 가능', () => {
		const carsName = ['a', 'bb', 'cccccc', 'ddd', 'e'];
		mockQuestions(carsName);

		expect(() => validation.carsNameValid(carsName)).toThrow('[ERROR]');
	});

	test('자동차 이름은 ,쉼표를 기준으로 구분', () => {
		const input = 'a,b';
		const result = input.split(',');

		expect(result).toContain('a', 'b');
		expect(result).toContainEqual('a', 'b');
	});
});
