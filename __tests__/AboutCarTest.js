import AboutCar from "../src/AboutCar.js";
import {MissionUtils} from "@woowacourse/mission-utils";

describe("전진테스트", () => {
    let car;

    beforeEach(() => {
        car = new AboutCar('testCar');
    });

    test('AboutCar 객체 생성 테스트', () => {
        expect(car).toBeInstanceOf(AboutCar);
        expect(car.name).toBe('testCar');
        expect(car.position).toBe(0);
    });

    test('decideMotion 테스트', () => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0.5);

        car.decideMotion();
        expect(car.position).toBe(1);

        jest.spyOn(global.Math, 'random').mockRestore();
    });

    test('displayPosition 테스트', () => {
        car.position = 5;
        expect(car.displayPosition()).toBe('testCar : -----');
    });
});
