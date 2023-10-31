import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockCarNameQuestions = (inputs) => {
    MissionUtils.Console.readLineAsync = jest.fn();

    MissionUtils.Console.readLineAsync.mockImplementation(() => {
        const input = inputs.shift();
        return Promise.resolve(input);
    });
};

const mockCountQuestions = (inputs) => {
    MissionUtils.Console.readLineAsync = jest.fn();

    MissionUtils.Console.readLineAsync.mockImplementation(() => {
        const input = inputs.pop();
        return Promise.resolve(input);
    });
};

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

describe("자동차 경주 게임", () => {
    test("전진-정지", async () => {
        // given
        const MOVING_FORWARD = 4;
        const STOP = 3;
        const inputs = ["pobi,suna", "2"];
        const outputs = [
            "pobi : -",
            "suna : ",
            "pobi : --",
            "suna : ",
        ];
        const randoms = [MOVING_FORWARD, STOP, MOVING_FORWARD, STOP];
        const logSpy = getLogSpy();

        mockCarNameQuestions(inputs);
        mockRandoms([...randoms]);

        // when
        const app = new App();
        await app.play();

        // then
        outputs.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
        });
    });


    test.each([
            [["pobi,javaji"]], // 이름 1개만 5글자 초과인 경우
            [["sunasuna,eastjun"]], // 이름이 모두 5글자 초과인 경우
            [["sunasuna,"]], // 이름이 0글자인 경우
            [["suna"]], // 자동차가 1대인 경우
            [[""]] // 자동차가 0대인 경우
        ])("자동차 이름에 대한 예외 처리", async (inputs) => {
        // given
        mockCarNameQuestions(inputs);

        // when
        const app = new App();

        // then
        await expect(app.play()).rejects.toThrow("[ERROR]");
    });

    test.each([
        [["pobi,suna", 'string']], // 숫자 검사
        [["pobi,suna", '-5']], // 음수 검사
        [["pobi,suna", '0']], // 0 검사
        [["pobi,suna", '1.2']], // 정수 검사
    ])("시도 횟수에 대한 예외 처리", async (inputs) => {
    // given
    mockCountQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow("[ERROR]");
});
});
