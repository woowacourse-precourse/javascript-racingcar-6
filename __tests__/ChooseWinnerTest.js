import { MissionUtils } from "@woowacourse/mission-utils";

import { chooseWinner } from "../src/components/chooseWinner";

describe("기능 테스트 - 우승자 출력", () => {
  test("우승자가 한 명일 때 출력 확인하기", async () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");

    const input = { hani: 0, yeji: 3, mina: 2 };
    const outputs = ["최종 우승자 : yeji"];

    chooseWinner(input);

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(output);
    });
  });

  test("우승자가 한 명 이상일 때 출력 확인하기", async () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");

    const input = { hani: 4, yeji: 4, mina: 1 };
    const outputs = ["최종 우승자 : yeji"];

    chooseWinner(input);

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(output);
    });
  });
});
