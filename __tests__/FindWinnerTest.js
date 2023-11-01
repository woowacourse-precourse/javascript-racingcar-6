import { MissionUtils } from "@woowacourse/mission-utils";
import { printWinner } from "../src/print";
import findWinner from "../src/findWinner";

describe("레이싱 승자 테스트", () => {
  test("승자 한명 테스트", () => {
    const racingObj = { abc: 0, def: 1, ghi: 2 };
    const result = "ghi";
    expect(findWinner(racingObj)).toEqual(result);
  });

  test("승자 두명이상 테스트", () => {
    const racingObj = { abc: 0, def: 2, ghi: 2 };
    const result = "def, ghi";
    expect(findWinner(racingObj)).toEqual(result);
  });
});

describe("레이싱 승자 출력 테스트", () => {
  const racingObj = "def, ghi";
  const result = "최종 우승자 : def, ghi";
  const logSpy = jest.spyOn(MissionUtils.Console, "print");

  printWinner(racingObj);
  expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(result));
});
