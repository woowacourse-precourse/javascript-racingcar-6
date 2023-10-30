import { askNames, printResultUsingScoreBoard } from "../src/core/io.js";
import { InvalidPlayerNameError } from "../src/utils/error.js";
import { getLogSpy, mockQuestions } from "./utils.js";

describe("입출력 테스트", () => {
  test("askNames가 이름을 제대로 분할하는지 테스트", () => {
    const inputs = ["ab, 12,abc", "abc,a,b", "  bc,   a,        d     "];
    const outputs = [
      ["ab", "12", "abc"],
      ["abc", "a", "b"],
      ["bc", "a", "d"],
    ];

    mockQuestions(inputs);

    inputs.forEach(async (_, index) => {
      const names = await askNames();
      expect(names).toEqual(outputs[index]);
    });
  });

  test("중복된 이름 발견 시 예외 처리", () => {
    const inputs = ["a,a", "b,a,b", "a,a,b", "b,b,b"];

    mockQuestions(inputs);

    inputs.forEach(async () => {
      await expect(askNames()).rejects.toThrowError(
        new InvalidPlayerNameError(InvalidPlayerNameError.TYPE_DUPLICATED)
      );
    });
  });

  test("스코어보드 출력하기", () => {
    const inputs = [
      { a: 3, b: 2, c: 5 },
      { a: 0, b: 0, c: 0 },
      { a: 3, b: 3, c: 3 },
    ];
    const outputs = [
      ["a : ---", "b : --", "c : -----"],
      ["a : ", "b : ", "c : "],
      ["a : ---", "b : ---", "c : ---"],
    ];

    inputs.forEach((board, index) => {
      const logSpy = getLogSpy();

      printResultUsingScoreBoard(board);

      outputs[index].forEach((output) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
      });
    });
  });
});
