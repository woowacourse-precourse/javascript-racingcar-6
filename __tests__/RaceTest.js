import { MissionUtils } from "@woowacourse/mission-utils";
import App from '../src/App.js';
import { printForwardCar } from "../src/PrintMessage.js";

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

    jest.clearAllMocks();
});