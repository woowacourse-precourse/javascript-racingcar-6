import Car from "../../src/Car";
import { getLogSpy } from "../../test-utils";

describe("우승자 출력 테스트", () => {
  test("단독 우승", () => {
    // given
    const lucas = new Car("lucas");
    lucas.distance = 3;

    const pobi = new Car("pobi");
    pobi.distance = 2;

    const logSpy = getLogSpy();

    // when
    Car.printWinners([lucas, pobi]);

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(lucas.name));
  });

  test("공동 우승", () => {
    // given
    const lucas = new Car("lucas");
    lucas.distance = 3;

    const pobi = new Car("pobi");
    pobi.distance = 3;

    const logSpy = getLogSpy();

    // when
    Car.printWinners([lucas, pobi]);

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(lucas.name));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(pobi.name));
  });
});
