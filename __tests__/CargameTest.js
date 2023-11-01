import App, { Car } from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

jest.mock('@woowacourse/mission-utils', () => {
    const original = jest.requireActual('@woowacourse/mission-utils');
    original.MissionUtils.Random.pickNumberInRange = jest.fn();
    return original;
});

describe ('App class', () => {
    let app;

    beforeEach(() => {
        app = new App();
        app.cars = [new Car('cTest')];
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    const moveCarsMocked = (mockedValue, expectedPosition) => {
        MissionUtils.Random.pickNumberInRange.mockReturnValue(mockedValue);
        app.moveCars();
        expect(app.cars[0].position).toBe(expectedPosition);
    }

    test ('자동차는 4 이상의 숫자에서만 전진한다', () => {

        // 랜덤숫자가 4를 리턴할 때
        moveCarsMocked(4, 1);

        // 랜덤숫자가 3을 리턴할 때
        app.cars[0].position = 0; // 자동차 위치 초기화
        moveCarsMocked(3, 0);
    });
});