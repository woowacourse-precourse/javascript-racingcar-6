import App from "../src/App.js";

describe('App 테스트', () => {
	let app;

	app = new App();

	test('에러 발생 시 애플리케이션을 종료 테스트', () => {
		const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => { });
		expect(() => {
			app.validateCarNames(['VeryLongCarName']);
		}).toThrowError("[ERROR] 자동차 이름은 5자 이하여야 합니다.");
		consoleErrorSpy.mockRestore();
	});
});
