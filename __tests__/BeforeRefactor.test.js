import App from "../src/App.js";
import { Console } from "@woowacourse/mission-utils"

const mockInput = (input) => {
  Console.readLineAsync = jest.fn(() => Promise.resolve(input));
};

describe("App class", () => {
  describe("getCarName method", () => {
    test("사용자 입력", async () => {
      const testInput = "pobi,woni,jun";
      mockInput(testInput);

      const app = new App();
      const result = await app.getCarName();

      expect(Console.readLineAsync).toHaveBeenCalledTimes(1);
      expect(result).toEqual(["pobi", "woni", "jun"]);  // 수정된 부분
    });
  });

  describe("sanitizeCarName method", () => {
    let app;
    beforeEach(() => {
      app = new App();
    });

    test("이름 사이에 공백이 없을 때", () => {
      const input = "pobi,woni,jun";
      const result = app.sanitizeCarName(input);
      expect(result).toEqual(["pobi", "woni", "jun"]);
    });

    test("이름 앞뒤에 공백이 있을 때", () => {
      const input = " pobi ,woni , jun ";
      const result = app.sanitizeCarName(input);
      expect(result).toEqual(["pobi", "woni", "jun"]);
    });

    test("공백만 있는 이름이 있을 때", () => {
      const input = "pobi, , jun";
      const result = app.sanitizeCarName(input);
      expect(result).toEqual(["pobi", "", "jun"]);
    });

    test("콤마가 없을 때", () => {
      const input = "pobi woni jun";
      const result = app.sanitizeCarName(input);
      expect(result).toEqual(["pobi woni jun"]);
    });

    test("연속적으로 여러 개의 콤마가 나올 때", () => {
      const input = "pobi,,,woni,,jun";
      const result = app.sanitizeCarName(input);
      expect(result).toEqual(["pobi", "", "", "woni", "", "jun"]);
    });
  });
});