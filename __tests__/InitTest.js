import {MissionUtils} from "@woowacourse/mission-utils";
import Init from "../src/game/init.js";

const mockQuestions = (inputs) => {
    MissionUtils.Console.readLineAsync = jest.fn();

    MissionUtils.Console.readLineAsync.mockImplementation(() => {
        const input = inputs.shift();
        return Promise.resolve(input);
    });
};

const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();
    return logSpy;
};

describe("Init 클래스 기능 단위테스트", () => {
    test.each([
        [["pobi/woni"]],
        [["pobi jun"]]
    ])("자동차 이름 입력 기능 테스트 - 쉼표로 구분되어있지 않은 입력에 대한 예외처리", async (inputs) => {
        mockQuestions(inputs);

        const expectedResult = "[ERROR] 자동차 이름을 쉼표로 구분하여 입력해주세요.";

        const init = new Init();

        await expect(init.inputCarNames()).rejects.toThrow(expectedResult);
    });

    test.each([
        [["-1"]],
        [["0"]],
        [["twice"]]
    ])("자동차 이름 입력 기능 테스트 - 잘못된 형식의 실행 횟수 입력에 대한 예외처리", async (inputs) => {
        mockQuestions(inputs);

        const expectedResult = "[ERROR] 횟수는 1이상의 정수로 입력해주세요.";
        const init = new Init();

        await expect(init.inputPlayCount()).rejects.toThrow(expectedResult);
    });

    test.each([
        ["car1, car2, car3", ["car1", "car2", "car3"]],
        ["car1,car2,car3", ["car1", "car2", "car3"]],
        [" car1, car2, car3 ", ["car1", "car2", "car3"]],
    ])("자동차 배열 생성 기능 테스트", (carNames, expectedResult) => {
        const init = new Init();
        const carList = init.makeCarsList(carNames);

        expect(carList).toEqual(expectedResult);
    });

    test("자동차 배열 생성 기능 테스트 - 유효하지 않은 자동차 이름에 대한 예외처리", () => {
        const carNames = "car123, , car3";
        const expectedResult = "[ERROR] 자동차 이름은 1자 이상, 5자 이하로 입력해주세요.";
        const init = new Init();

        expect(() => init.makeCarsList(carNames)).toThrow(expectedResult);
    });

    test("자동차 배열 생성 기능 테스트 - 중복된 자동차 이름에 대한 예외처리", () => {
        const carNames = "car1, car2, car1";
        const expectedResult = "[ERROR] 중복된 자동차가 있습니다. 서로 다른 자동차들을 입력해주세요.";
        const init = new Init();

        expect(() => init.makeCarsList(carNames)).toThrow(expectedResult);
    });
});
