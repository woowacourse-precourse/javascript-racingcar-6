import App from "../src/App";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  // jest.fn() : 가짜 함수를 생성하는 메서드.
  MissionUtils.Console.readLineAsync = jest.fn();

  // jeset.fn().mockImplementation() : 가짜로 구현된 코드.
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift(); // 배열의 첫 번째 값 input에 저장
    return Promise.resolve(input); // Promise 형태로 첫 번째 값 반환
  });
};

describe("사용자 입력 테스트", () => {
  test("자동차 이름이 다섯 글자를 초과한 예외에 대한 처리 확인", async () => {
    const inputs = ["abc,abcdef", "2"];

    mockQuestions(inputs);

    const app = new App();

    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("사용자가 이동할 횟수를 잘못 입력한 예외에 대한 처리 확인", async () => {
    const inputs = ["abc,abcd", "a"];

    mockQuestions(inputs);

    const app = new App();

    await expect(app.play()).rejects.toThrow("[ERROR]");
  });
});
