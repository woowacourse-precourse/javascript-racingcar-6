import App from '../src/App.js';
import { Console, Random } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
	Console.readLineAsync = jest.fn();

	Console.readLineAsync.mockImplementation(() => {
		const input = inputs.shift();
		return Promise.resolve(input);
	});
};

const mockRandoms = (numbers) => {
	Random.pickNumberInRange = jest.fn();
	numbers.reduce((acc, number) => {
		return acc.mockReturnValueOnce(number);
	}, Random.pickNumberInRange);
};

const mockPrintLog = () => {
	const logSpy = jest.spyOn(Console, 'print');
	logSpy.mockClear();
	return logSpy;
};

describe('App 테스트', () => {
	test('입력 받은 레이싱 카의 이름이 5자가 넘을 경우 에러를 표시한다.', async () => {
		// given
		const inputs = ['a,bb,ccccc'];

		mockQuestions(inputs);

		// when
		const app = new App();

		// then
		await expect(app.play()).rejects.toThrow('[ERROR]');
	});

	test('입력 받은 레이싱 카의 이름에 따라 레이싱 카 인스턴스 배열이 생성된다.', () => {
		// given
		const inputs = 'car1,car2';
		const resultSample = inputs.split(',');

		// when
		const app = new App();
		app.enrollRacingCar(inputs);

		// then
		app.carArray.forEach((car, index) => {
			expect(car.name).toEqual(resultSample[index]);
		});
	});

	test('입력 받은 이동 횟수가 숫자가 이닌 경우, 에러를 표시한다.', async () => {
		// given
		const inputs = ['a,bb,ccccc', 'a'];
		mockQuestions(inputs);

		// when
		const app = new App();

		// then
		await expect(app.play()).rejects.toThrow('[ERROR]');
	});

	test('결과 출력시 "실행 결과" 안내 문구가 나온다.', async () => {
		// given
		const MOVING_FORWARD = 4;
		const STOP = 3;
		const inputs = ['pobi,woni', '1'];
		const randoms = [MOVING_FORWARD, STOP];
		const logSpy = mockPrintLog();

		mockQuestions(inputs);
		mockRandoms([...randoms]);

		// when
		const app = new App();
		await app.play();

		// then
		expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('실행 결과'));
	});

	test('결과 출력시 레이싱 과정을 로그로 보여준다.', async () => {
		// given
		const MOVING_FORWARD = 4;
		const STOP = 3;
		const inputs = ['pobi,woni', '2'];
		const outputs = ['\n실행 결과', 'pobi : -', 'woni : -', 'pobi : -', 'woni : --'];
		const randoms = [MOVING_FORWARD, MOVING_FORWARD, STOP, MOVING_FORWARD];
		const logSpy = mockPrintLog();

		mockQuestions(inputs);
		mockRandoms([...randoms]);

		// when
		const app = new App();
		await app.play();

		// then
		outputs.forEach((output) => {
			expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
		});
	});

	test('우승한 레이싱 카의 이름을 출력한다.', async () => {
		// given
		const MOVING_FORWARD = 4;
		const STOP = 3;
		const inputs = ['pobi,woni', '2'];
		const outputs = ['최종 우승자 : woni'];
		const randoms = [MOVING_FORWARD, MOVING_FORWARD, STOP, MOVING_FORWARD];
		const logSpy = mockPrintLog();

		mockQuestions(inputs);
		mockRandoms([...randoms]);

		// when
		const app = new App();
		await app.play();

		// then
		outputs.forEach((output) => {
			expect(logSpy).toHaveBeenCalledWith(expect.stringMatching(output));
		});
	});
});
