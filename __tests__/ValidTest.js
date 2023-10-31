import App from "../src/App.js";

describe('App 테스트', () => {
	let app;

	beforeEach(() => {
		app = new App();
	});

	test('입력 받은 자동차 이름을 배열 변환 테스트', () => {
		const input = 'abc,def';
		const result = app.validateCarNames(input.split(','));
		expect(result).toBeTruthy();
	});

	test('자동차 입력 유효성 검사 테스트', () => {
		const input = 'abcdefg,hijklmnop';
		expect(() => app.validateCarNames(input.split(',')));
	});

	test('시도 횟수 유효성 검사 테스트', () => {
		const invalidAttempts = ['abc', '-1', '0'];
		invalidAttempts.forEach(attempt => {
			expect(() => app.validateAttemptCount(parseInt(attempt)));
		});
	});
});