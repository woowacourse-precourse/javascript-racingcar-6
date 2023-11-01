import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App";
import MESSEGE from '../src/constants/messeges';

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

      await expect(app.play()).rejects.toThrow(MESSEGE.errorCarName);
    }
  );

  test.each([[["jay, jay, qwe", 3]]])(
    "중복된 자동차 이름 예외 처리",
    async (input) => {
      const app = new App();

      mockQuestions(input);

      await expect(app.play()).rejects.toThrow(MESSEGE.errorDuplicatedCarName);
    }
  );
});

describe("시도 횟수 입력값 테스트", () => {
  test.each([[["qd,fd", "q"]], [["qd,as", "!"]]])(
    "숫자가 아닌 것 확인",
    async (input) => {
      const app = new App();

      mockQuestions(input);

      await expect(app.play()).rejects.toThrow(MESSEGE.errorRoundNumIsNumber);
    }
  );

  test.each([[["qd,as", "0"]], [["qd,as", "-1"]], [["qd,as", "13"]]])(
    "1 ~ 9 범위의 유효한 숫자 확인",
    async (input) => {
      const app = new App();

      mockQuestions(input);

      await expect(app.play()).rejects.toThrow(MESSEGE.errorRoundNumIsInteger);
    }
  );
});
