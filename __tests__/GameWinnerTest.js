import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
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

describe('우승자 출력 테스트', () => {
	let app, logSpy;

	beforeEach(() => {
		app = new App();
		logSpy = getLogSpy();
	});

	test('단독 우승 테스트', async () => {
		const inputs = ['crong,eddy', '1'];
		const outputs = ['eddy : -'];
		const randoms = [1, 8];

		mockQuestions(inputs);
		mockRandoms([...randoms]);

		await app.play();

		outputs.forEach((output) => {
			expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(...output));
		});
	});

	test('공동 우승 테스트', async () => {
		const inputs = ['crong,eddy', '2'];
		const outputs = [['crong : -'], ['eddy : -']];
		const randoms = [
			[3, 4],
			[8, 1],
		];

		mockQuestions(inputs);
		mockRandoms([...randoms]);

		await app.play();

		for (let i = 0; i < Number(inputs[1]); i += 1) {
			outputs.forEach((output) => {
				expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(...output));
			});
		}
	});
});
