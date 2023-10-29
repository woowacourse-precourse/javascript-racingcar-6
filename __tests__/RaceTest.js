import { MissionUtils } from "@woowacourse/mission-utils";
import App from '../src/App.js';

const app = new App();

describe("자동차 경주 테스트", () => {
    test("주어진 횟수 동안 n대의 자동차 전진", () => {
        const carNames = ['car1', 'car2'];
        const raceCount = 3;
        MissionUtils.Random.pickNumberInRange = jest.fn();
        MissionUtils.Random.pickNumberInRange.mockReturnValue(5);
        expect(app.startRace(carNames, raceCount)).toEqual({ "car1": 3, "car2": 3 });
        jest.clearAllMocks();
    });
});