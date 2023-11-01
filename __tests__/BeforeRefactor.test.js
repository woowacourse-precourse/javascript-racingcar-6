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
      expect(Console.readLineAsync).toHaveBeenCalledWith("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
      expect(result).toEqual(["pobi", "woni", "jun"]); 
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
      expect(result).toEqual(["pobi", "jun"]);
    });

    test("연속적으로 여러 개의 콤마가 나올 때", () => {
      const input = "pobi,,,woni,,jun";
      const result = app.sanitizeCarName(input);
      expect(result).toEqual(["pobi", "woni", "jun"]);
    });
  });

  describe("Error Handling in validateCarName", () => {
    let app;
    beforeEach(() => {
      app = new App();
    });

    test("자동차 이름이 5자를 초과할 때", async () => {
      mockInput("pobipobi,woni,jun");
      await expect(app.getCarName()).rejects.toThrow("[ERROR] 자동차 이름은 5자를 초과할 수 없습니다.");
    });

    test("자동차 이름이 중복될 때", async () => {
      mockInput("pobi,pobi,jun");
      await expect(app.getCarName()).rejects.toThrow("[ERROR] 중복되는 자동차 이름이 있습니다.");
    });

    test("자동차 이름이 최소 2대 미만일 때", async () => {
      mockInput("pobi");
      await expect(app.getCarName()).rejects.toThrow("[ERROR] 최소 두 대 이상의 자동차 이름을 입력해주세요.");
    });
  });

  describe("getRound method", () => {
    let app;
    beforeEach(() => {
      app = new App();
    });

    test("사용자로부터 시도할 횟수 입력 받기", async () => {
      const testInput = "5";
      mockInput(testInput);
      
      const result = await app.getRound();

      expect(Console.readLineAsync).toHaveBeenCalledWith("시도할 횟수는 몇 회인가요?\n");
      expect(result).toBe(5);
    });
  });
});