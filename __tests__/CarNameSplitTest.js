import { carNameSpliter } from '../src/CarNameSpliter.js';
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("자동차 이름 구분 테스트", () => {
  test("split 메서드로 주어진 값을 구분", async () => {
    const input = ["pobi,woni"];
    mockQuestions(input);

    const result = await carNameSpliter();

    expect(result).toContain("woni", "pobi");
    expect(result).toContainEqual("pobi", "woni");
  });
});