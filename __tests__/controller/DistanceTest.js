import Distance from "../../src/controller/distance";
import { Console } from "@woowacourse/mission-utils";

describe("전진/멈춤 여부 판단, 실행결과 출력", () => {
  test("객체 전진 판단 후 출력", async () => {
    //given
    const GO = 4;
    const object = { name: "one", distance: 2 };
    const output = "one : ---";

    const logSpy = jest.spyOn(Console, "print");

    //when
    const distance = new Distance();
    distance.isGoStopAndPrintObject(GO, object);

    //then
    expect(logSpy).toHaveBeenCalledWith(output);
    logSpy.mockRestore();
  });

  test("객체 멈춤 판단 후 출력", async () => {
    //given
    const STOP = 3;
    const object = { name: "one", distance: 2 };
    const output = "one : --";

    const logSpy = jest.spyOn(Console, "print");

    //when
    const distance = new Distance();
    distance.isGoStopAndPrintObject(STOP, object);

    //then
    expect(logSpy).toHaveBeenCalledWith(output);
    logSpy.mockRestore();
  });
});
