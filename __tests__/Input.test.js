import Input from '../src/Input.js';
import { ERROR } from '../src/Constant.js';
import { MissionUtils } from "@woowacourse/mission-utils";

const mockFn = (input) => {
  MissionUtils.Console.readLineAsync = jest.fn(() => {
    return Promise.resolve(input);
  });
};

describe("자동차 이름 입력", () => {
  // 일반적인 경우의 사용자 입력 Case
  test("쉼표(,)로 구분된 문자열 입력", async () => {
    const input = "jason,kyle,alex";
    mockFn(input);
    expect(await Input.returnArrayOfPlayers()).toStrictEqual(['jason', 'kyle', 'alex']);
  });

  // 공백이 포함된 사용자 입력 Case
  test("공백이 포함된 문자열 입력", async () => {
    const input = "jason,   kyle";
    mockFn(input);
    expect(await Input.returnArrayOfPlayers()).toStrictEqual(['jason', 'kyle']);
  });

  // 5자를 넘어가는 사용자 입력 Case
  test("6자리 이상의 이름이 포함된 문자열 입력 상황에서의 예외 처리", async () => {
    const input = "sophia";
    mockFn(input);
    expect(async () => await Input.returnArrayOfPlayers()).rejects.toThrow(ERROR.MORE_THAN_MAX);
  });
});

describe("게임 횟수 입력", () => {
  // 일반적인 경우의 사용자 입력 Case
  test("일반적인 숫자 입력", async () => {
    const input = "8";
    mockFn(input);
    expect(await Input.returnNumberOfGames()).toBe(8);
  });

  // 공백이 포함된 사용자 입력 Case
  test("공백이 포함된 숫자 입력", async () => {
    const input = "5   ";
    mockFn(input);
    expect(await Input.returnNumberOfGames()).toBe(5);
  })

  // 아무것도 입력하지 않은 Case
  test("아무것도 입력하지 않은 상황에서의 예외 처리", async () => {
    const input = "";
    mockFn(input);
    expect(async () => await Input.returnNumberOfGames()).rejects.toThrow(ERROR.WRONG_NUMBER);
  });

  // 입력한 값이 숫자가 아닌 Case
  test("숫자가 아닌 형식일 경우의 예외 처리", async () => {
    const input = "hello";
    mockFn(input);
    expect(async () => await Input.returnNumberOfGames()).rejects.toThrow(ERROR.WRONG_NUMBER);
  });
});
