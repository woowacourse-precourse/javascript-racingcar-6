import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import getCarsNumber from '../src/utils/Random.js';

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

describe('데이터 무결성 테스트', () => {
	test('랜덤값 범위 확인', async () => {
		const outputs = getCarsNumber(10);

		outputs.forEach((output) => {
			expect(output).toBeGreaterThanOrEqual(0);
			expect(output).toBeLessThanOrEqual(9);
		});
	});

	test('전진 조건 테스트', async () => {
		const inputs = ['pobi,woni', '3'];
		const outputs = ['pobi : -'];
		const randoms = [1, 2, 3, 4, 5, 6];
		const logSpy = getLogSpy();

		mockQuestions(inputs);
		mockRandoms([...randoms]);

		const app = new App();
		await app.play();

		outputs.forEach((output) => {
			expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
		});
	});

	test('다수의 우승자', async () => {
		const MOVING_FORWARD = 4;
		const STOP = 3;
		const inputs = ['pobi,woni,paul', '3'];
		const outputs = ['pobi, woni, paul'];
		const randoms = [
			MOVING_FORWARD,
			STOP,
			STOP,
			STOP,
			MOVING_FORWARD,
			MOVING_FORWARD,
			MOVING_FORWARD,
			MOVING_FORWARD,
			MOVING_FORWARD,
		];
		const logSpy = getLogSpy();

		mockQuestions(inputs);
		mockRandoms([...randoms]);

		const app = new App();
		await app.play();

		outputs.forEach((output) => {
			expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
		});
	});
});
