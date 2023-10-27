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
});
