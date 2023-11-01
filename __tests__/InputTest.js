import App from "../src/App";
import { Console } from "@woowacourse/mission-utils";

jest.mock('@woowacourse/mission-utils');

describe("자동차 이름 입력 테스트", () => {
    const input = "djun,pobi,woni";
    const app = new App();

    beforeAll(() => {
      // Console.readLineAsync 함수가 호출될 때마다 위에서 정의한 input 값을 반환하도록 모킹
      Console.readLineAsync.mockResolvedValue(input);
    });

    test("자동차 이름들을 입력하면 배열을 반환", async () => {
        const result = await app.getCarNames();
        expect(result).toEqual(["djun", "pobi", "woni"]);
    });
});

describe("반복할 횟수 입력 테스트", () => {
    const input = "5";
    const app = new App();

    beforeAll(() => {
      // Console.readLineAsync 함수가 호출될 때마다 위에서 정의한 input 값을 반환하도록 모킹
      Console.readLineAsync.mockResolvedValue(input);
    });

    test("5를 입력하면 정수 5를 반환", async () => {
        const result = await app.getTotalRound();
        expect(result).toEqual(5);
    });
});