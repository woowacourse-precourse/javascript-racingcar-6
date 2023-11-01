import InputView from "../src/view/InputView.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
    MissionUtils.Console.readLineAsync = jest.fn();

    MissionUtils.Console.readLineAsync.mockImplementation(() => {
        const input = inputs.shift();
        return Promise.resolve(input);
    });
};

// 기능 ➊ 자동차 이름 입력 테스트
describe("자동차 이름", () => {
    test("자동차 이름은 1~5글자", async () => {
        // given
        const inputs = ["안녕, p0by,반가wo"];
        const outputs = ["안녕", "p0by", "반가wo"];

        mockQuestions(inputs); // 사용자가 입력한 것처럼 테스트

        // when
        const carNames = await InputView.getCarNames();

        // then
        expect(carNames).toEqual(outputs);
    })

    test.each([
        [[""]], // 빈 값 불가
        [["pobi,okxooxoo"]], // 5글자 초과 불가
        [["poby"]], // 자동차 1개 불가
        [["p$by,poby"]], // 특수문자 불가
        [["pobi,poby,"]], // 마지막 문자 쉼표 불가
    ])("자동차 이름에 대한 예외 처리", async (inputs) => {
        // given
        mockQuestions(inputs);

        // when & then
        await expect(InputView.getCarNames()).rejects.toThrow("[ERROR] 자동차 이름이 잘못된 형식입니다.");
    });
});

// 기능 ➋ 시도할 횟수 입력 테스트
describe("시도할 횟수", () => {
    test("시도할 횟수는 1 이상의 정수", async () => {
        // given
        const inputs = ["1"];
        const output = 1;

        mockQuestions(inputs); // 사용자가 입력한 것처럼 테스트

        // when
        const tryNumber = await InputView.getTryNumber();

        // then
        expect(tryNumber).toBe(output);
    });

    test.each([
        [[""]],
        [["0"]],
        [["ok"]]
    ])("시도할 횟수에 대한 예외 처리", async (inputs) => {
        // given
        mockQuestions(inputs);

        // when & then
        await expect(InputView.getTryNumber()).rejects.toThrow("[ERROR] 시도할 횟수는 1 이상의 정수입니다.");
    });
});