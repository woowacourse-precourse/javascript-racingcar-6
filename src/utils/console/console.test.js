import { Console } from "./console";
import { MissionUtils } from "@woowacourse/mission-utils";

const text = "안녕";

describe("console test", () => {
  test("print test - MissionUtils 의 print 사용하는지 확인", () => {
    const printSpy = jest.spyOn(MissionUtils.Console, "print").mockImplementation((msg) => msg);
    Console.print(text);
    expect(printSpy).toHaveBeenCalledWith(expect.stringContaining(text));
  });

  test("readLineSync test - MissionUtils 의 readLineAsync 사용하는지 확인", async () => {
    MissionUtils.Console.readLineAsync = jest.fn();
    MissionUtils.Console.readLineAsync.mockImplementation(async () => text);
    const res = await Console.readLineAsync();
    expect(res).toBe(text);
  });
});
