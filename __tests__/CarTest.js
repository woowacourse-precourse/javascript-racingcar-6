import Car from "../src/Car"

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
})