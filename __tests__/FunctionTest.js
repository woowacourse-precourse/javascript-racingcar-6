import { Console, Random } from '@woowacourse/mission-utils';
import App from '../src/App.js';

describe('함수 기능 유닛 테스트', () => {
	const app = new App();
	const CARS_NAME = ['car1', 'car2', 'car3'];

	describe('getInput', () => {
		test('car 이름을 제대로 입력한 경우', async () => {
			Console.readLineAsync = jest.fn().mockResolvedValueOnce('a,b,ccccc').mockResolvedValueOnce('5');
			await expect(app.getInput()).resolves.toEqual([{ a: 0, b: 0, ccccc: 0 }, 5]);
		});
		test('car 이름이 5자가 넘어간 경우', async () => {
			Console.readLineAsync = jest.fn().mockResolvedValueOnce('a,b,gggggg').mockResolvedValueOnce('5');
			await expect(app.getInput()).rejects.toThrow('[ERROR]');
		});
		test('car 이름을 입력하지 않은 경우', async () => {
			Console.readLineAsync = jest.fn().mockResolvedValueOnce('a,,c').mockResolvedValueOnce('5');
			await expect(app.getInput()).rejects.toThrow('[ERROR]');
		});
		test('레이싱 횟수로 숫자를 입력하지 않은 경우', async () => {
			Console.readLineAsync = jest.fn().mockResolvedValueOnce('a,b,c').mockResolvedValueOnce('a');
			await expect(app.getInput()).rejects.toThrow('[ERROR]');
		});
		test('레이싱 횟수로 양수를 입력하지 않은 경우', async () => {
			Console.readLineAsync = jest.fn().mockResolvedValueOnce('a,b,c').mockResolvedValueOnce('-1');
			await expect(app.getInput()).rejects.toThrow('[ERROR]');
		});
	});

	describe('doRace', () => {
		let INITIAL_CARS_STATE;

		beforeEach(() => {
			INITIAL_CARS_STATE = Object.fromEntries(Array.from(Array(3), (_, i) => [CARS_NAME[i], 0]));
		});

		test.each([
			{ num: [4, 0, 0], values: [1, 0, 0] },
			{ num: [0, 4, 0], values: [0, 1, 0] },
			{ num: [0, 0, 4], values: [0, 0, 1] },
		])('1개의 자동차가 전진하는 경우', ({ num, values }) => {
			Random.pickNumberInRange = jest
				.fn()
				.mockReturnValueOnce(num[0])
				.mockReturnValueOnce(num[1])
				.mockReturnValueOnce(num[2]);

			const expectedResult = Object.fromEntries(Array.from(Array(3), (_, i) => [CARS_NAME[i], values[i]]));
			const realResult = app.doRace(INITIAL_CARS_STATE);

			expect(realResult).toEqual(expectedResult);
		});

		test.each([
			{ num: [4, 4, 0], values: [1, 1, 0] },
			{ num: [4, 0, 4], values: [1, 0, 1] },
			{ num: [0, 4, 4], values: [0, 1, 1] },
		])('2개의 자동차가 전진하는 경우', ({ num, values }) => {
			Random.pickNumberInRange = jest
				.fn()
				.mockReturnValueOnce(num[0])
				.mockReturnValueOnce(num[1])
				.mockReturnValueOnce(num[2]);

			const expectedResult = Object.fromEntries(Array.from(Array(3), (_, i) => [CARS_NAME[i], values[i]]));
			const realResult = app.doRace(INITIAL_CARS_STATE);

			expect(realResult).toEqual(expectedResult);
		});

		test.each([
			{ num: [4, 4, 4], values: [1, 1, 1] },
			{ num: [4, 4, 4], values: [1, 1, 1] },
			{ num: [4, 4, 4], values: [1, 1, 1] },
		])('3개의 자동차가 전진하는 경우', ({ num, values }) => {
			Random.pickNumberInRange = jest
				.fn()
				.mockReturnValueOnce(num[0])
				.mockReturnValueOnce(num[1])
				.mockReturnValueOnce(num[2]);

			const expectedResult = Object.fromEntries(Array.from(Array(3), (_, i) => [CARS_NAME[i], values[i]]));
			const realResult = app.doRace(INITIAL_CARS_STATE);

			expect(realResult).toEqual(expectedResult);
		});

		test.each([0, 1, 2, 3])('자동차가 전진하지 않는 경우', (num) => {
			Random.pickNumberInRange = jest.fn().mockReturnValue(num);
			const expectedResult = INITIAL_CARS_STATE;
			const realResult = app.doRace(INITIAL_CARS_STATE);
			expect(realResult).toEqual(expectedResult);
		});

		test.each([4, 5, 6, 7, 8, 9])('자동차가 전진하는 경우', (num) => {
			Random.pickNumberInRange = jest.fn().mockReturnValue(num);
			const expectedResult = Object.fromEntries(Array.from(Array(3), (_, i) => [CARS_NAME[i], 1]));
			const realResult = app.doRace(INITIAL_CARS_STATE);
			expect(realResult).toEqual(expectedResult);
		});
	});

	describe('getMax', () => {
		test.each([{ values: [1, 0, 0] }, { values: [0, 1, 0] }, { values: [0, 0, 1] }])(
			'최댓값이 1개인 경우',
			({ values }) => {
				const input = Object.fromEntries(Array.from(Array(3), (_, i) => [CARS_NAME[i], values[i]]));
				const expectedResult = 1;
				const realResult = app.getMax(input);
				expect(realResult).toEqual(expectedResult);
			},
		);

		test.each([{ values: [1, 1, 0] }, { values: [1, 0, 1] }, { values: [0, 1, 1] }])(
			'최댓값이 2개인 경우',
			({ values }) => {
				const input = Object.fromEntries(Array.from(Array(3), (_, i) => [CARS_NAME[i], values[i]]));
				const expectedResult = 1;
				const realResult = app.getMax(input);
				expect(realResult).toEqual(expectedResult);
			},
		);

		test.each([{ values: [1, 1, 1] }])('최댓값이 3개인 경우', ({ values }) => {
			const input = Object.fromEntries(Array.from(Array(3), (_, i) => [CARS_NAME[i], values[i]]));
			const expectedResult = 1;
			const realResult = app.getMax(input);
			expect(realResult).toEqual(expectedResult);
		});
	});

	describe('getWinner', () => {
		test.each([
			{ wonCarNum: [0], values: [1, 0, 0] },
			{ wonCarNum: [1], values: [0, 1, 0] },
			{ wonCarNum: [2], values: [0, 0, 1] },
		])('우승자가 1명인 경우', ({ wonCarNum, values }) => {
			const input = Object.fromEntries(Array.from(Array(3), (_, i) => [CARS_NAME[i], values[i]]));
			const expectedResult = wonCarNum.map((e) => CARS_NAME[e]);
			const realResult = app.getWinner(input, 1);
			expect(realResult).toEqual(expectedResult);
		});

		test.each([
			{ wonCarNum: [0, 1], values: [1, 1, 0] },
			{ wonCarNum: [0, 2], values: [1, 0, 1] },
			{ wonCarNum: [1, 2], values: [0, 1, 1] },
		])('우승자가 2명인 경우', ({ wonCarNum, values }) => {
			const input = Object.fromEntries(Array.from(Array(3), (_, i) => [CARS_NAME[i], values[i]]));
			const expectedResult = wonCarNum.map((e) => CARS_NAME[e]);
			const realResult = app.getWinner(input, 1);
			expect(realResult).toEqual(expectedResult);
		});

		test.each([{ wonCarNum: [0, 1, 2], values: [1, 1, 1] }])('우승자가 3명인 경우', ({ wonCarNum, values }) => {
			const input = Object.fromEntries(Array.from(Array(3), (_, i) => [CARS_NAME[i], values[i]]));
			const expectedResult = wonCarNum.map((e) => CARS_NAME[e]);
			const realResult = app.getWinner(input, 1);
			expect(realResult).toEqual(expectedResult);
		});
	});
});
