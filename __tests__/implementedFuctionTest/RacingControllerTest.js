import RacingController from '../../src/racing/RacingController.js';
import OutputView from '../../src/racing/view/OutputView.js';
import { MissionUtils } from "@woowacourse/mission-utils";

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


describe('RacingController 클래스 테스트', () => {
	test("전체 동작 확인", async () => {
		// given
		const inputs = ['A, B, C', '2'];
		const outputs = ['A :', 'B :', 'C : -', 'A :', 'B : -', 'C : --', '최종 우승자 : C'];
		const randoms = [3, 3, 4, 3, 4, 4];
		const logSpy = getLogSpy();
		mockQuestions(inputs);
		mockRandoms([...randoms]);

		// when
		const racingController = new RacingController();
		await racingController.start();

		// then
		outputs.forEach((output) => {
			expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
		});
	});
});
