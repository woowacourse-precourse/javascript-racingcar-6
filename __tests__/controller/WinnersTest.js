import { Winners } from "../../src/controller/winners";
import { Console } from "@woowacourse/mission-utils";

describe("우승자 선정/출력 테스트", () => {
  test("우승자가 한명인 경우, 최대 거리값 반환", async () => {
    //given
    const array = [
      { name: "one", distance: 4 },
      { name: "two", distance: 5 },
      { name: "three", distance: 6 },
    ];

    //when
    const winners = new Winners();
    const result = winners.getMaxDistance(array);

    //then
    expect(result).toEqual(6);
  });

  test("우승자가 두명 이상인 경우, 최대 거리값 반환", async () => {
    //given
    const array = [
      { name: "one", distance: 4 },
      { name: "two", distance: 8 },
      { name: "three", distance: 8 },
    ];

    //when
    const winners = new Winners();
    const result = winners.getMaxDistance(array);

    //then
    expect(result).toEqual(8);
  });

  test("우승자 한명일 때, 최댓값 가진 자동차 속성 배열 반환", async () => {
    //given
    const array = [
      { name: "one", distance: 4 },
      { name: "two", distance: 5 },
      { name: "three", distance: 6 },
    ];
    const maxNumber = 6;

    //when
    const winners = new Winners();
    const result = winners.getWinnerCarArray(array, maxNumber);

    //then
    expect(result).toEqual([{ name: "three", distance: 6 }]);
  });

  test("우승자 두명 이상일 때, 최댓값 가진 자동차 속성 배열 반환", async () => {
    //given
    const array = [
      { name: "one", distance: 4 },
      { name: "two", distance: 8 },
      { name: "three", distance: 8 },
    ];
    const maxNumber = 8;

    //when
    const winners = new Winners();
    const result = winners.getWinnerCarArray(array, maxNumber);

    //then
    expect(result).toEqual([
      { name: "two", distance: 8 },
      { name: "three", distance: 8 },
    ]);
  });

  test("자동차 속성 배열에서 이름만 있는 배열 반환", async () => {
    //given
    const array = [
      { name: "two", distance: 8 },
      { name: "three", distance: 8 },
    ];

    //when
    const winners = new Winners();
    const result = winners.getOnlyNameArray(array);

    //then
    expect(result).toEqual(["two", "three"]);
  });

  test("우승자 한명일 때, 이름 출력", async () => {
    //given
    const array = [
      { name: "one", distance: 4 },
      { name: "two", distance: 9 },
      { name: "three", distance: 6 },
    ];

    const output = "최종 우승자 : two";

    const logSpy = jest.spyOn(Console, "print");

    //when
    const winners = new Winners();
    winners.selectPrintWinner(array);

    //then
    expect(logSpy).toHaveBeenCalledWith(output);
    logSpy.mockRestore();
  });

  test("우승자 두명 이상일 때, 이름 출력", async () => {
    //given
    const array = [
      { name: "one", distance: 9 },
      { name: "two", distance: 9 },
      { name: "three", distance: 6 },
    ];

    const output = "최종 우승자 : one, two";

    const logSpy = jest.spyOn(Console, "print");

    //when
    const winners = new Winners();
    winners.selectPrintWinner(array);

    //then
    expect(logSpy).toHaveBeenCalledWith(output);
    logSpy.mockRestore();
  });
});
