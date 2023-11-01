import { winner } from "../src/Winner.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("우승자 테스트", () => {
  test("단독 우승자 판별", () => {
    //given
    const carNameInput = ["pobi", "whai"];
    const carMoveStorageInput = {pobi: "--", whai: "---"};
    const outputs = ["whai"];
    const logSpy = getLogSpy();

    //when
    winner(carNameInput, carMoveStorageInput);
    
    //then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
  
  test("공동 우승자 판별", () => {
    //given
    const carNameInput = ["pobi", "whai"];
    const carMoveStorageInput = {pobi: "---", whai: "---"};
    const outputs = ["pobi, whai"];
    const logSpy = getLogSpy();

    //when
    winner(carNameInput, carMoveStorageInput);
    
    //then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  })
})