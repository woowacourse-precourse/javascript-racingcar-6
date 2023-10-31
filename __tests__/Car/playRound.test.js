import Car from "../../src/Car";
import { getLogSpy, mockRandoms } from "../../test-utils";

describe("자동차 경주 한 라운드 진행 테스트", () => {
  test("전진(0~9중 4이상)", async () => {
    // given
    const car = new Car("lucas");
    const output = "lucas : -";
    const logSpy = getLogSpy();

    mockRandoms([4]);

    // when
    car.playRound();

    // then
    expect(logSpy).toHaveBeenCalledWith(output);
  });

  test("중지(0~9중 4미만)", async () => {
    // given
    const car = new Car("lucas");
    const output = "lucas : ";
    const logSpy = getLogSpy();

    mockRandoms([0]);

    // when
    car.playRound();

    // then
    expect(logSpy).toHaveBeenCalledWith(output);
  });
});
