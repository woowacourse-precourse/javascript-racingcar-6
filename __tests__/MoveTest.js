import { MissionUtils } from "@woowacourse/mission-utils";
import OutputView from "../src/view/OutputView.js";
import Cars from "../src/app/Cars.js";

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

// 기능 ➌ 자동차 전진 테스트
describe("자동차 전진", () => {
    test("전진 혹은 정지", () => {
        // given
        const carNames = ["poby", "seoro"];
        const tryNumber = 2;
        const randoms = [3, 4, 5, 6];
        const outputs = ["poby : ", "seoro : -", "poby : -", "seoro : --"];
        const logSpy = getLogSpy();

        mockRandoms([...randoms]); // 랜덤으로 숫자가 생성된 것처럼 테스트

        // when
        const cars = new Cars(carNames);

        for (var i = 0; i < tryNumber; i++) {
            cars.moveCars()
            OutputView.printCars(cars.names, cars.distances);
        }

        // then
        outputs.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(output);
        });
    })
})