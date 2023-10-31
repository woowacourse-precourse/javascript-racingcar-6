import App from "../src/App.js";
import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE, GAME_MESSAGE } from "../src/Message";

describe("class App test", () => {
  let app;

  beforeEach(() => {
    app = new App();
  });

  const getPrintSpy = () => {
    const logSpy = jest.spyOn(Console, "print");
    logSpy.mockClear();
    return logSpy;
  };

  describe("method test : makeObject()", () => {
    test("makeObject()의 인수 carName이 equus이라면 ?", () => {
      const testResult = { name: "equus", result: "" };
      let testObject = app.makeObject("equus");
      expect(testObject).toEqual(testResult);
    });
  });

  describe("method test : findLength()", () => {
    test("result가 -----인 객체를 인수로 준다면 result.length 배열이 [5, 1, 3]이 되는가 ? ", () => {
      const testParameter = [
        { name: "equus", result: "-----" },
        { name: "pony", result: "-" },
        { name: "ray", result: "---" },
      ];
      let testLength = app.findLength(testParameter);
      expect(testLength).toEqual([5, 1, 3]);
    });
  });

  describe("method test : findMaxLength()", () => {
    test("[9, 3, 7]을 인수로 준다면 9가 반환이 되는가 ?", () => {
      const testParameter = [9, 3, 7];
      const testMaxLength = app.findMaxLength(testParameter);
      expect(testMaxLength).toBe(9);
    });
  });

  describe("method test : makeWinnerIndexArray()", () => {
    test("maxLength가 5인 자동차 객체의 index를 넣은 배열[0, 2, 5]이 반환이 되는가 ?", () => {
      const testParameter = [
        { name: "equus", result: "-----" },
        { name: "pony", result: "-" },
        { name: "ray", result: "-----" },
        { name: "SM5", result: "---" },
        { name: "K7", result: "----" },
        { name: "G80", result: "-----" },
      ];
      const testMaxLength = 5;
      const testWinnerIndex = app.makeWinnerIndexArray(
        testParameter,
        testMaxLength
      );
      expect(testWinnerIndex).toEqual([0, 2, 5]);
    });
  });

  describe("method test : makeWinnerArray()", () => {
    test("경주 결과랑 우승자 index 배열을 주면 우승자 이름 배열을 반환하는가 ?", () => {
      const testParameter = [
        { name: "equus", result: "-----" },
        { name: "pony", result: "-" },
        { name: "ray", result: "-----" },
        { name: "SM5", result: "---" },
        { name: "K7", result: "----" },
        { name: "G80", result: "-----" },
      ];
      const testWinnerIndex = [0, 2, 5];
      const winnerNames = app.makeWinnerArray(testParameter, testWinnerIndex);
      expect(winnerNames).toEqual(["equus", "ray", "G80"]);
    });
  });

  describe("method test : checkWinner()", () => {
    test("경주 결과 배열을 보내면 우승자 이름을 반환하는가 ?", () => {
      const testParameter = [
        { name: "equus", result: "-----" },
        { name: "pony", result: "-" },
        { name: "ray", result: "-----" },
        { name: "SM5", result: "---" },
        { name: "K7", result: "----" },
        { name: "G80", result: "-----" },
      ];
      const WinnerName = app.checkWinner(testParameter);
      expect(WinnerName).toEqual(["equus", "ray", "G80"]);
    });
  });

  describe("method test : getCarNamesArray()", () => {
    test("우승자 이름을 쉼표를 기준으로 나눌 수 있는가 ?", () => {
      const testNames = "equus,pony,ray,SM5";
      const carNamesArray = app.getCarNamesArray(testNames);
      expect(carNamesArray).toEqual(["equus", "pony", "ray", "SM5"]);
    });
  });

  describe("method test : checkRepeatNumber()", () => {
    test("시도할 횟수를 숫자가 아닌 문자로 입력했을 때 에러 처리", () => {
      const testRepeatString = "abc";
      expect(() => {
        app.checkRepeatNumber(testRepeatString);
      }).toThrowError(ERROR_MESSAGE.NUMBER);
    });

    test("시도할 횟수에 공백을 포함해 입력했을 때 에러 처리", () => {
      const testRepeatString = "1 2";
      expect(() => {
        app.checkRepeatNumber(testRepeatString);
      }).toThrowError(ERROR_MESSAGE.GAP);
    });
  });

  describe("method test : checkCarNames()", () => {
    test("자동차 이름이 5자 초과일 때 에러 처리", () => {
      const longCarNames = "Grandeur";
      expect(() => {
        app.checkCarNames(longCarNames);
      }).toThrowError(ERROR_MESSAGE.LENGTH);
    });
  });

  describe("method test : printResult()", () => {
    test("자동차 경주 결과 출력 확인", () => {
      const mockConsolePrint = jest
        .spyOn(Console, "print")
        .mockImplementation(() => {});

      const raceResult = [
        { name: "equus", result: "-----" },
        { name: "pony", result: "-" },
        { name: "ray", result: "-----" },
      ];

      app.printResult(raceResult);
      raceResult.forEach((e) => {
        expect(mockConsolePrint).toHaveBeenCalledWith(GAME_MESSAGE.RESULT(e));
      });
      expect(mockConsolePrint).toHaveBeenCalledWith("\n");
    });
  });

  describe("method test : printWinner()", () => {
    test("자동차 경주 우승자 출력 확인", () => {
      const mockConsolePrint = jest
        .spyOn(Console, "print")
        .mockImplementation(() => {});

      const winnerResult = ["equus", "pony", "ray"];
      const winnerResultString = winnerResult.join(", ");

      app.printWinner(winnerResult);
      expect(mockConsolePrint).toHaveBeenCalledWith(
        GAME_MESSAGE.WINNER(winnerResultString)
      );
    });
  });
});
