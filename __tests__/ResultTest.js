import App, { Car } from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

jest.mock('@woowacourse/mission-utils', () => {
    const original= jest.requireActual('@woowacourse/mission-utils');
    original.MissionUtils.Console.print = jest.fn();
    return original;
});

describe ('App class', () => {
    let app;

    beforeEach (() => {
        app = new App();
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    const testCar = (names, positions) => {
        app.cars = names.map((name, index) => {
            const car = new Car(name);
            car.position = positions[index];
            return car;
        })
    }

    test ('우승자가 한 명일 때', () => {
        testCar(['test'], [1]);
        app.printWinners();
        expect(MissionUtils.Console.print).toHaveBeenCalledWith('최종 우승자 : test');
    })

    test ('우승자가 한 명 이상일 때,', () => {
        testCar(['test', 'test2'], [2, 2]);
        app.printWinners();
        expect(MissionUtils.Console.print).toHaveBeenCalledWith('최종 우승자 : test, test2');
    })
});