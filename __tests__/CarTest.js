import { MissionUtils } from "@woowacourse/mission-utils";
import Car from "../src/Car"

const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();
    return logSpy;
};

describe("Car 클래스 테스트", () => {
    test("자동차 객체 생성", () => {
        const car = new Car("soyoung125");
        const result = car.getName;
        expect(result).toEqual("soyoung125");
    });
    test("자동차 전진", () => {
        const car = new Car("soyoung125");

        car.goForward();

        const result = car.getForwardCount;
        expect(result).toEqual(1);
    });
    test("자동차의 전진 상태 출력", () => {
        const output = "soyoung125 : ---"
        const logSpy = getLogSpy();
        const car = new Car("soyoung125");

        car.goForward();
        car.goForward();
        car.goForward();

        car.printState();

        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
})