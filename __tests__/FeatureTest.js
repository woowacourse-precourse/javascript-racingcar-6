import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import OutputView from "../src/view/OutputView.js";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const getPrintRoundResultSpy = () => {
  const printSpy = jest.spyOn(OutputView, "printCarDistanceRecord");
  printSpy.mockClear();
  return printSpy;
};

describe("세부 기능 테스트", () => {
  describe("자동차 이름 입력 기능에 대한 테스트", () => {
    test("6자 이상의 이름에 대해 예외 처리를 하는가", async () => {
      const app = new App();

      const inputs = ["자동차, 멋있는자동차"];

      mockQuestions(inputs);

      await expect(app.play()).rejects.toThrow("[ERROR]");
    });
  });

  describe("자동차 등록 기능에 대한 테스트", () => {
    test("등록하는 자동차가 2대 미만일 경우에 대해 예외 처리를 하는가", async () => {
      const app = new App();

      const correctInputs = ["자동차1, 자동차2", "2"];
      mockQuestions(correctInputs);
      await expect(app.play()).resolves.not.toThrowError();

      const wrongInputs = ["자동차1", "2"];
      mockQuestions(wrongInputs);
      await expect(app.play()).rejects.toThrow("[ERROR]");
    });
  });

  describe("시도 횟수 입력 기능에 대한 테스트", () => {
    test("입력 값이 숫자가 아닌 경우에 대해 예외 처리를 하는가", async () => {
      const app = new App();

      const inputs = ["자동차1, 자동차2", "문자"];

      mockQuestions(inputs);

      await expect(app.play()).rejects.toThrow("[ERROR]");
    });

    test("시도 횟수 입력 값이 1미만인 경우에 대해 예외 처리를 하는가", async () => {
      const app = new App();

      const inputs = ["자동차1, 자동차2", "0"];

      mockQuestions(inputs);

      await expect(app.play()).rejects.toThrow("[ERROR]");
    });

    test("시도 횟수 입력 값이 1000을 초과할 경우에 대해 예외 처리를 하는가", async () => {
      const app = new App();

      const inputs = ["자동차1, 자동차2", "1001"];

      mockQuestions(inputs);

      await expect(app.play()).rejects.toThrow("[ERROR]");
    });
  });

  describe("라운드 진행에 대한 테스트", () => {
    test("시도 횟수만큼 자동차가 이동하는가(라운드 결과 출력 함수가 실행되는가)", async () => {
      const printRoundResultSpy = getPrintRoundResultSpy();
      const TRIAL_COUNT = 5;
      const inputs = ["자동차1, 자동차2", TRIAL_COUNT];

      mockQuestions(inputs);

      const app = new App();
      await app.play();

      expect(printRoundResultSpy).toBeCalledTimes(TRIAL_COUNT);
    });
  });
});
