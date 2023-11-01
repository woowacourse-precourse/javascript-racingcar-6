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

    test ('우승자가 한 명일 때', () => {
        app.cars = [new Car('test')];
        app.cars[0].position = 1;

        MissionUtils.Console.print = jest.fn();
        app.printWinners();
        expect(MissionUtils.Console.print).toHaveBeenCalledWith('최종 우승자 : test');
    })

    test ('우승자가 한 명 이상일 때,', () => {
        app.cars = [new Car('test'), new Car('test2')];
        app.cars[0].position = 2;
        app.cars[1].position = 2;

        MissionUtils.Console.print = jest.fn();
        app.printWinners();
        expect(MissionUtils.Console.print).toHaveBeenCalledWith('최종 우승자 : test, test2');
    })
});