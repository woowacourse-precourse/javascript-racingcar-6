import { askNames } from "../src/core/io.js";
import { mockQuestions } from "./ApplicationTest.js";

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
});
