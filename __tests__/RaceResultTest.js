import { Console } from "@woowacourse/mission-utils";
import App from "../src/App.js";

jest.mock("@woowacourse/mission-utils", () => {
  return {
    ...jest.requireActual("@woowacourse/mission-utils"),
    Console: {
      print: jest.fn(),
      readLineAsync: jest.fn().mockResolvedValueOnce("pobi,woni,jun").mockResolvedValueOnce("5")
    }
  };
});

describe("App 클래스의 경주 결과 출력 테스트", () => {
  let app;

  beforeEach(() => {
    app = new App();
  });

  test("자동차의 이름과 위치를 정상적으로 출력하는지 검사", async () => {
    await app.play();

    const printCallCount = Console.print.mock.calls.length;

    for (let i = 0; i < printCallCount; i++) {
      const printedMessage = Console.print.mock.calls[i][0];
      if (printedMessage.includes(':') && !printedMessage.includes('최종 우승자')) {  
        expect(printedMessage).toMatch(/^[a-zA-Z0-9]+ : -+$/);
      }
    }
  });
});
