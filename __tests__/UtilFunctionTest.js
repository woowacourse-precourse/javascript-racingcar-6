import {
  printConsole,
  generateRandomNumber,
  inputConsoleAsync,
} from "../src/utils/index.js";
import readline from "readline";

describe("유틸리티 함수 테스트", () => {
  test("printConsole 함수는 입력받은 메시지를 콘솔에 반환한다.", () => {
    //given
    const message = "printConsole function test";
    const logSpy = jest.spyOn(console, "log");

    // when
    printConsole(message);

    // then
    expect(logSpy).toHaveBeenCalledWith(message);
  });

  test("generateRandomNumber 함수는 0이상 9 이하의 숫자를 반환한다.", () => {
    // given
    const MIN = 0;
    const MAX = 9;

    //when
    const randomOutput = generateRandomNumber();

    // then
    expect(typeof randomOutput).toBe("number");
    expect(randomOutput).toBeGreaterThanOrEqual(MIN);
    expect(randomOutput).toBeLessThanOrEqual(MAX);
  });

  test("inputConsoleAsync 함수는 입력받은 메시지를 비동기로 반환해주어야 한다.", async () => {
    // given
    const message = "inputConsoleAsync function test";
    const createInterfaceMock = jest.spyOn(readline, "createInterface");
    const readlineMock = {
      question: jest.fn((query, callback) => {
        callback(message);
      }),
      close: jest.fn(),
    };

    createInterfaceMock.mockReturnValue(readlineMock);

    // when
    const result = await inputConsoleAsync(message);

    // then
    expect(result).toBe(message);
  });
});
