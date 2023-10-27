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

describe("이름 입력 테스트", () => {
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
    
});