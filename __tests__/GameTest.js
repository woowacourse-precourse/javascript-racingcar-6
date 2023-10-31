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

	test('자동차 상태 업데이트 테스트', () => {
		const carStatus = [0, 0, 0];
		app.updateCarStatus(carStatus, 0);
		expect(carStatus[0]).toBeGreaterThanOrEqual(0);
		expect(carStatus[0]).toBeLessThanOrEqual(1);
	});

	test('자동차 위치 문자열 생성 테스트', () => {
		const carStatus = 3;
		const carPosition = app.showCarPosition(carStatus);
		expect(carPosition).toBe('---');
	});

	test('자동차 이름 위치 출력 테스트', () => {
		const carName = 'Car1';
		const carPosition = '---';
		const consoleSpy = jest.spyOn(MissionUtils.Console, 'print').mockImplementation(() => { });
		app.showRaceProgress(carName, carPosition);
		expect(consoleSpy).toHaveBeenCalledWith('Car1 : ---');
		consoleSpy.mockRestore();
	});

	test('경주 진행 테스트', () => {
		const carNames = ['Car1', 'Car2', 'Car3'];
		const carStatus = [0, 0, 0];
		const consoleSpy = jest.spyOn(MissionUtils.Console, 'print').mockImplementation(() => { });
		app.simulateCarRace(carNames, carStatus);
		expect(consoleSpy).toHaveBeenCalledTimes(3);
		consoleSpy.mockRestore();
	});

	test('최종 우승자 출력 테스트', () => {
		const carNames = ['Car1', 'Car2', 'Car3'];
		const carStatus = [3, 2, 4]; // Car3가 우승
		const consoleSpy = jest.spyOn(MissionUtils.Console, 'print').mockImplementation(() => { });
		app.showWinners(carNames, carStatus);
		const expectedOutput = '최종 우승자: Car3';
		expect(consoleSpy.mock.calls[0][0].trim()).toBe(expectedOutput);
		consoleSpy.mockRestore();
	});
});
