import { MissionUtils } from "@woowacourse/mission-utils";
import CarManager from "../src/CarManager";
import ERROR_MESSAGES from "../src/constant/errorMessages";

const getLogSpy = () => {
	const logSpy = jest.spyOn(MissionUtils.Console, 'print');
	logSpy.mockClear();
	return logSpy;
}

const mockRandom = (numbers) => {
	MissionUtils.Random.pickNumberInRange = jest.fn();
	numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
}

describe('CarManager 클래스 테스트', () => {
	test('첫번째 매개변수가 배열인지 확인한다', () => {
		const names = 'test';
		const carCount = names.length;

		expect(() => new CarManager(names, carCount)).toThrow(ERROR_MESSAGES.arrayType);
	});
	test('두번째 매개변수가 숫자인지 확인한다', () => {
		const names = ['pobbi', 'woni'];
		const carCount = 'test';

		expect(() => new CarManager(names, carCount)).toThrow(ERROR_MESSAGES.numberType);
	});

	test('최종 우승자의 출력값을 확인한다', () => {
		const names = ['pobi', 'woni', 'jun'];
		const ATTEMPT_COUNT = 5;
		const MOVING = 4;
		const STOP = 0;
		const random = [
				MOVING, STOP, MOVING, 
				MOVING, MOVING, MOVING,		
				MOVING, MOVING, MOVING,		
				MOVING, MOVING, MOVING,		
				MOVING, MOVING, MOVING,		
			]
		const outputs = [
			'실행 결과',
			'pobi : -',
			'woni : ',
			'jun : -',
			'',
			'pobi : --',
			'woni : -',
			'jun : --',
			'',
			'pobi : ---',
			'woni : --',
			'jun : ---',
			'',
			'pobi : ----',
			'woni : ---',
			'jun : ----',
			'',
			'pobi : -----',
			'woni : ----',
			'jun : -----',
			'',
			'최종 우승자 : pobi, jun',
		];
		// const outputs = ['실행 결과', 'pobi : -', 'woni : '];
		const logSpy = getLogSpy();
		const cars = new CarManager(names, ATTEMPT_COUNT);
		
		// mockQuestions(inputs);
		mockRandom([...random]);
		cars.play();
		const consoleOutput = logSpy.mock.calls.map((node) => node[0]);
		expect(consoleOutput).toEqual(outputs);
	});
});
