import { printRacing } from "../src/print";
import { isNumFour } from "../src/racing";
import { MissionUtils } from "@woowacourse/mission-utils";

describe("레이싱 결과 계산 테스트", () => {
  test("4 이상 여부 테스트", () => {
    const more = 4;
    const less = 1;

    expect(isNumFour(more)).toBeTruthy();
    expect(isNumFour(less)).toBeFalsy();
  });
});

describe("레이싱 전진 출력 테스트", () => {
  test("레이싱 출력 테스트", () => {
    const racingObj = { abc: 0, def: 1, ghi: 2 };
    const results = ["abc : ", "def : -", "ghi : --"];
    const logSpy = jest.spyOn(MissionUtils.Console, "print");

    printRacing(racingObj);

    results.forEach((result) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(result));
    });
  });
});
