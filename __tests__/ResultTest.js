import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
    MissionUtils.Console.readLineAsync = jest.fn();

    MissionUtils.Console.readLineAsync.mockImplementation(() => {
        const input = inputs.shift();
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

describe("우승자", () => {
    test("공동 우승", async () => {
        // given
        const MOVING_FORWARD = 4;
        const STOP = 3;
        const inputs = ["lose1,lose2,win1,win2", "3"];
        const outputs = ["최종 우승자 : win1, win2"];
        const randoms = [STOP, STOP, MOVING_FORWARD, MOVING_FORWARD];
        const logSpy = getLogSpy();

        mockQuestions(inputs);
        mockRandoms([...randoms]);

        // when
        const app = new App();
        await app.play();

        // then
        outputs.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
        });
    });

});

describe("실행결과", () => {
    test("실행 결과 테스트", async () => {
        // given
        const MOVING_FORWARD = 4;
        const STOP = 3;
        const inputs = ["lose1,lose2,win1,win2", "3"];
        const outputs = ["lose1 : -", "lose2 : -", "win1 : --", "win2 : --"];
        const randoms = [
            STOP, STOP, MOVING_FORWARD, MOVING_FORWARD,
            STOP, STOP, MOVING_FORWARD, MOVING_FORWARD,
            MOVING_FORWARD, MOVING_FORWARD, STOP, STOP
        ];
        const logSpy = getLogSpy();

        mockQuestions(inputs);
        mockRandoms([...randoms]);

        // when
        const app = new App();
        await app.play();

        // then
        outputs.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
        });
    });


})

describe("사용자 입력", () => {
    test.each([
        [["pobi,pobi"]],
        [["pobi, pobi"]]
    ])("이름 중복에 대한 예외 처리", async (inputs) => {
        // given
        mockQuestions(inputs);

        // when
        const app = new App();

        // then
        await expect(app.play()).rejects.toThrow("[ERROR]");
    });
    test.each([
        [["car,car2", "d"]],
        [["car,car2", " "]]
    ])("도전 횟수 예외 처리 (문자열,공백)", async (inputs) => {
        // given
        mockQuestions(inputs);

        // when
        const app = new App();

        // then
        await expect(app.play()).rejects.toThrow("[ERROR]");
    });
})
