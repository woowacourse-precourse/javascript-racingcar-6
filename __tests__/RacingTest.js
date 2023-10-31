
import Car from "../src/Game/Car.js";
import Racing from "../src/Game/Racing.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockRandoms = (numbers) => {
    MissionUtils.Random.pickNumberInRange = jest.fn();
    numbers.reduce((acc, number) => {
        return acc.mockReturnValueOnce(number);
    }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();
    return logSpy;
};

describe("Racing 클래스 테스트", () => {
    let racing;
    racing = new Racing();
    test("registCar() 테스트", () => {
        racing.registCar('Car1,Car2,Car3');

        const answer = [
            { name: 'Car1', distance: '' },
            { name: 'Car2', distance: '' },
            { name: 'Car3', distance: '' },
        ]
        expect(racing.cars).toEqual(answer);
    });

    test("moveCycle() 테스트", () => {
        const MOVE_FORWARD = 4;
        const STOP = 3;
        const randoms = [
            STOP, STOP, MOVE_FORWARD,
        ]
        mockRandoms(randoms);
        racing.moveCycle();
        const cars = [
            { name: 'Car1', distance: '' },
            { name: 'Car2', distance: '' },
            { name: 'Car3', distance: '-' },
        ];

        expect(racing.cars).toEqual(cars);
    })
    test("oneMoveCycleResult() 테스트", () => {
        const logSpy = getLogSpy();
        const outputs = ["Car1 : ", "Car2 : ", "Car3 : -"];
        racing.oneMoveCycleResult();
        outputs.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
          });
    })


    test("getMaxDistance() 테스트", () => {
        const maxDistance = racing.getMaxDistance();
        expect(maxDistance).toEqual(1);
    });

    test("getWinner() 테스트", () => {
        const winner = racing.getWinner();
        expect(winner).toBe("Car3");
    })
})