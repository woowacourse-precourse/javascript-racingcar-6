import { MissionUtils } from "@woowacourse/mission-utils";
import { printForwardCar, printWinner } from "../src/PrintMessage.js";
import App from "../src/App.js";

const app = new App();

describe("자동차 경주 테스트", () => {
	test("전진하는 자동차들의 정보 저장할 객체 초기화", () => {
		const carNames = ['car1', 'car2', 'car3'];
		expect(app.setForwardCarData(carNames)).toStrictEqual({ "car1": 0, "car2": 0, "car3": 0 });
	});

	test("전진하는 자동차 이름과 전진한 만큼 대시(-) 출력", () => {
		const carName = 'car1';
		const forwardCount = 5;
		MissionUtils.Console.print = jest.fn();
		printForwardCar(carName, forwardCount);
		expect(MissionUtils.Console.print).toHaveBeenCalledWith("car1 : -----");
	});

	test("자동차 경주 게임을 완료한 후 최종 우승자 출력", () => {
		const forwardCarData = { 'car1': 4, 'car2': 4, 'car3': 2 };
		MissionUtils.Console.print = jest.fn();
		printWinner(forwardCarData);
		expect(MissionUtils.Console.print).toHaveBeenCalledWith("최종 우승자 : car1, car2");
	});

	jest.clearAllMocks();
});