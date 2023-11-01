import { GameController } from "../src/controller/GameController";
import { ERROR_MESSAGE } from "../src/constants/messages";

describe("GameController Error Test", () => {
  let gameController;

  beforeEach(() => {
    gameController = new GameController();
  });

  describe("validateName", () => {
    test("문자열의 길이가 5보다 크면 에러 발생", () => {
      expect(() => {
        gameController.validateName(["longName"]);
      }).toThrow(ERROR_MESSAGE.EXCEEDED_LENGTH);
    });

    test("문자열이 중복되면 에러 발생", () => {
      expect(() => {
        gameController.validateName(["car", "car"]);
      }).toThrow(ERROR_MESSAGE.DUPLICATED_NAME);
    });

    test("문자열이 유효하면 에러를 발생시키지 않는다", () => {
      expect(() => {
        gameController.validateName(["seo", "dae", "won"]);
      }).not.toThrow();
    });
  });

  describe("validateNumber", () => {
    test("숫자가 양의 정수가 아니라면 에러 발생", () => {
      expect(() => {
        gameController.validateNumber(-1);
      }).toThrow(ERROR_MESSAGE.INVALID_NUMBER);

      expect(() => {
        gameController.validateNumber(1.5);
      }).toThrow(ERROR_MESSAGE.INVALID_NUMBER);
    });

    test("숫자가 유효하면 에러를 발생시키지 않는다", () => {
      expect(() => {
        gameController.validateNumber(1);
      }).not.toThrow();
    });
  });
});
