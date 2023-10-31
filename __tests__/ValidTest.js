import App from "../src/App.js";

describe('App 테스트', () => {
	let app;
	app = new App();

	test('입력 받은 자동차 이름을 배열 변환 테스트', () => {
		const input = 'abc,def';
		const result = app.validateCarNames(input.split(','));
		expect(result).toBeTruthy();
	});
});