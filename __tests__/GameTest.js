import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

describe('App 테스트', () => {
	let app;

	beforeEach(() => {
		app = new App();
	});

	test('랜덤 숫자 생성 테스트', () => {
		const randomNumber = app.generateRandomNumber();
		expect(randomNumber).toBeGreaterThanOrEqual(0);
		expect(randomNumber).toBeLessThanOrEqual(9);
	});
});
