import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("자동차 입력값 테스트", () => {
  test.each([[["jay, ", 3]]])(
    "쉼표(,)후 빈 문자열 예외 처리",
    async (input) => {
      const app = new App();

      mockQuestions(input);

      await expect(app.play()).rejects.toThrow(
        "[ERROR] 자동차의 이름은 쉼표(,)로 구분하며 5자 이하만 가능합니다."
      );
    }
  );
});

describe("시도 횟수 입력값 테스트", () => {
  test.each([[["qd,fd", "q"]], [["qd,as", "!"]]])(
    "숫자가 아닌 것 확인",
    async (input) => {
      const app = new App();

      mockQuestions(input);

      await expect(app.play()).rejects.toThrow(
        "[ERROR] 시도할 횟수는 숫자여야 합니다."
      );
    }
  );

  test.each([[["qd,as", "0"]], [["qd,as", "-1"]], [["qd,as", "13"]]])(
    "1 ~ 9 범위의 유효한 숫자 확인",
    async (input) => {
      const app = new App();

      mockQuestions(input);

      await expect(app.play()).rejects.toThrow(
        "[ERROR] 시도할 횟수는 1~9 사이의 정수여야 합니다."
      );
    }
  );
});
