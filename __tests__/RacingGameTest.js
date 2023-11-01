import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App';

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

describe('게임 진행 테스트', () => {
	let app, logSpy;

	beforeEach(() => {
		app = new App();
		logSpy = getLogSpy();
	});

	test.each([[[0, 1, 5]], [[1, 2, 7]], [[3, 3, 4]]])(
		'자동차 전진 테스트 - 1회',
		async (randoms) => {
			const inputs = ['bwv,tesla,jeep', '1'];
			const outputs = [['bwv : '], ['tesla : '], ['jeep : -']];

			mockQuestions(inputs);
			mockRandoms([...randoms]);

			await app.play();

			outputs.forEach((output) => {
				expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(...output));
			});
		}
	);

	test('자동차 전진 테스트 - 2회 이상', async () => {
		const inputs = ['crong,eddy,loopy', '3'];
		const outputs = [['crong : --'], ['eddy : ---'], ['loopy : -']];
		const randoms = [4, 7, 2, 1, 5, 3, 6, 9, 6];

		mockQuestions(inputs);
		mockRandoms([...randoms]);

		await app.play();

		outputs.forEach((output) => {
			expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(...output));
		});
	});
});
