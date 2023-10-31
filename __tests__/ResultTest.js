import { MissionUtils } from "@woowacourse/mission-utils";
import Output from "../src/view/Output.js";

const getPrintSpy = () => {
  const printSpy = jest.spyOn(MissionUtils.Console, "print");
  printSpy.mockClear();
  return printSpy;
};
const output = new Output();

describe("우승자 결과 출력", () => {
  test("우승자 결과 출력(단독)", () => {
    const cars = [
      { name: "abc", move_times: 5 },
      { name: "abcd", move_times: 3 },
      { name: "abcde", move_times: 2 },
    ];
    const result = `최종 우승자 : abc`;
    const printSpy = getPrintSpy();
    output.printWinners(cars);
    expect(printSpy).toHaveBeenCalledWith(result);
  });

  test("우승자 결과 출력(공동)", () => {
    const cars = [
      { name: "abc", move_times: 5 },
      { name: "abcd", move_times: 5 },
      { name: "abcde", move_times: 3 },
    ];
    const result = `최종 우승자 : abc,abcd`;
    const printSpy = getPrintSpy();
    output.printWinners(cars);
    expect(printSpy).toHaveBeenCalledWith(result);
  });
});
