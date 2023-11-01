import { getCarName } from "../src/utils/getCarName.js";
import { getDistance } from "../src/utils/getDistance.js";
import { getRaceResult } from "../src/utils/getRaceResult.js";
import { getWinner } from "../src/utils/getWinner.js";

import { MissionUtils } from "@woowacourse/mission-utils";

describe("함수별 기능 테스트", () => {
  test("자동차 이름 입력받기", async () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "readLineAsync");
    const input = "pobi,woni,john";

    logSpy.mockResolvedValue(input);
    const result = await getCarName();
    const output = ["pobi", "woni", "john"];

    expect(result).toEqual(output);
  });

  test("자동차 전진시키기", () => {
    const mockFn = jest.spyOn(MissionUtils.Random, "pickNumberInRange");
    mockFn.mockReturnValue(4);

    const result = getDistance();
    const output = "-";

    expect(result).toBe(output);
  });

  test("자동차 정지시키기", () => {
    const mockFn = jest.spyOn(MissionUtils.Random, "pickNumberInRange");
    mockFn.mockReturnValue(3);

    const result = getDistance();
    const output = "";

    expect(result).toBe(output);
  });

  test("경주 결과 출력하기", () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");

    const input = [
      { name: "pobi", race: "--" },
      { name: "woni", race: "---" },
      { name: "john", race: "-" },
    ];
    const outputs = ["pobi : --", "woni : ---", "john : -"];

    getRaceResult(input);

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(output);
    });
  });

  test("우승자 출력 확인하기", () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");

    const input = [
      { name: "pobi", race: "--" },
      { name: "woni", race: "---" },
      { name: "john", race: "-" },
    ];
    const output = "최종 우승자 : woni";

    getWinner(input);

    expect(logSpy).toHaveBeenCalledWith(output);
  });
});
