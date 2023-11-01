import ProgressOutput from "../../../../src/view/output/ProgressOutput";
import { Console } from "@woowacourse/mission-utils";

describe("ProgressOutput 테스트", () => {
  test("gameInProgressPrint 메서드가 Console.print를 호출해야 함", () => {
    // given
    const name = "hyuri";
    const hyphen = "-";
    Console.print = jest.fn(); // Console.print 함수를 모의 함수로 대체

    // when
    ProgressOutput.gameInProgressPrint(name, hyphen);

    // then
    expect(Console.print).toHaveBeenCalledWith(`${name} : ${hyphen}`);
  });
});