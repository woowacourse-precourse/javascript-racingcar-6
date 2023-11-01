import App from '../src/App.js';
import { mockQuestions } from './ApplicationTest.js';

describe('자동차 이름 입력 예외 테스트', () => {
	test('5글자 이상의 이름 입력', async () => {
		const app = new App();
		const inputs = ['일이삼사오,일이삼'];
		mockQuestions(inputs);

		await expect(app.play()).rejects.toThrow('[ERROR]');
	});

	test('공백을 포함하여 입력', async () => {
		const app = new App();
		const inputs = ['일이  ,일이삼'];
		mockQuestions(inputs);

		await expect(app.play()).rejects.toThrow('[ERROR]');
	});

	test('특수문자를 포함하여 입력', async () => {
		const app = new App();
		const inputs = ['일이!,일이삼'];
		mockQuestions(inputs);

		await expect(app.play()).rejects.toThrow('[ERROR]');
	});

	test('숫자를 포함하여 입력', async () => {
		const app = new App();
		const inputs = ['일이삼4,일이삼'];
		mockQuestions(inputs);

		await expect(app.play()).rejects.toThrow('[ERROR]');
	});

	test('이름을 하나만 입력', async () => {
		const app = new App();
		const inputs = ['일이'];
		mockQuestions(inputs);

		await expect(app.play()).rejects.toThrow('[ERROR]');
	});

	test('중복된 이름 입력', async () => {
		const app = new App();
		const inputs = ['일이삼,일이삼'];
		mockQuestions(inputs);

		await expect(app.play()).rejects.toThrow('[ERROR]');
	});
});
