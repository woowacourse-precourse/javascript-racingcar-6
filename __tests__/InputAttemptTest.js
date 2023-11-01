import App from '../src/App.js';
import { mockQuestions } from './ApplicationTest.js';

describe('시도할 횟수 입력 예외 테스트', () => {
	test('0 입력', async () => {
		const inputs = ['pobi,soha', '0'];
		mockQuestions(inputs);

		const app = new App();

		await expect(app.play()).rejects.toThrow('[ERROR]');
	});

	test('음수 입력', async () => {
		const inputs = ['pobi,soha', '-4'];
		mockQuestions(inputs);

		const app = new App();

		await expect(app.play()).rejects.toThrow('[ERROR]');
	});

	test('유리수 입력', async () => {
		const inputs = ['pobi,soha', '4.7'];
		mockQuestions(inputs);

		const app = new App();

		await expect(app.play()).rejects.toThrow('[ERROR]');
	});
});
