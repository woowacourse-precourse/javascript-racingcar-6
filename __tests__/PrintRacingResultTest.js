import { MissionUtils } from "@woowacourse/mission-utils";

import { printRacingResult } from "../src/components/printRacingResult";

describe("기능 테스트 - 레이싱 결과 출력", () => {
  test("레이싱 결과 출력 정상 작동 확인하기", async () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");

    const input = { hani: 0, yeji: 3, mina: 2 };
    const outputs = ["hani : ", "yeji : ---", "mina : --"];

    printRacingResult(input);

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(output);
    });
  });
});
