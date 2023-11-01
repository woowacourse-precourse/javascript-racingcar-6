import App from "../src/App.js";
import makeAndFilter from "../src/Random.js";
import {MissionUtils} from "@woowacourse/mission-utils";
import {Input_First, Input_Second} from "../src/InputScreen.js";
import {GAME_RESULT} from "../src/OutScreen.js";

jest.mock("@woowacourse/mission-utils", () => ({
    MissionUtils: {
        Console: {
            readLineAsync: jest.fn(),
            print: jest.fn(),
        },
        Random: {
            pickNumberInRange: jest.fn(),
        },
    },
}));
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
describe("문자열 테스트", () => {
    test("split 메서드로 주어진 값을 구분", () => {
        const input = "1,2";
        const result = input.split(",");

        expect(result).toContain("2", "1");
        expect(result).toContainEqual("1", "2");
    });

    test("split 메서드로 구분자가 포함되지 않은 경우 값을 그대로 반환", () => {
        const input = "1";
        const result = input.split(",");

        expect(result).toContain("1");
    });

    test("substring 메서드로 특정 구간 값을 반환", () => {
        const input = "(1,2)";
        const result = input.substring(1, 4);

        expect(result).toEqual("1,2");
    });

    test("at 메서드로 특정 위치의 문자 찾기", () => {
        const input = "abc";
        const result = input.at(0)

        expect(result).toEqual("a");
    });

    test("질문 문구가 잘 나오는가", async () => {
        const input = "car1,car2,car3";
        const MOVING_FORWORD = 4;
        MissionUtils.Console.readLineAsync
            .mockReturnValueOnce(input) // 경주할 자동차 이름
            .mockReturnValueOnce(MOVING_FORWORD) // 시도할 횟수
        const app = new App();
        await app.play();
        expect(MissionUtils.Console.readLineAsync).toHaveBeenCalledWith(
            "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
        );
        expect(MissionUtils.Console.readLineAsync).toHaveBeenCalledWith("시도할 횟수는 몇 회인가요?\n");
        expect(MissionUtils.Console.print).toHaveBeenCalledWith("\n실행 결과");
    });

    test("주어진 사이즈의 배열만 ", () => {
        const input = 4;
        expect(makeAndFilter(input).length).toBe(input);
    });

    test.each([
        [["pobi,javaji"]],
        [["pobi,eastjun"]],
        [["dannysir"]]
    ])("예외처리 - 5자리 초과 입력", async (inputs) => {
        mockQuestions(inputs);
        await expect(Input_First()).rejects.toThrow("[ERROR]");
    });

    test.each([
        [["san,san"]],
        [["Seo,san,wow,san"]]
    ])("예외처리 - 중복 이름 입력", async (inputs) => {
        mockQuestions(inputs);
        await expect(Input_First()).rejects.toThrow("[ERROR]");
    });

    test.each([
        [["1 2"]],
        [["dannysir"]]
    ])("예외처리 - 횟수 입력 예외 처리", async (inputs) => {
        mockRandoms(inputs);
        await expect(Input_Second()).rejects.toThrow("[ERROR]");
    });

    test("결과 값 출력 확인", async () => {
        // given
        const MOVING_FORWARD = 4;
        const STOP = 3;
        const inputs = ["pobi,woni", "1"];
        const outputs = ["pobi : -"];
        const randoms = [MOVING_FORWARD, STOP];
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
