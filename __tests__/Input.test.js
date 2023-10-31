import Input from '../src/Input.js';
import { ERROR } from '../src/Constant.js';
import { MissionUtils } from "@woowacourse/mission-utils";

const mockFn = (input) => {
  MissionUtils.Console.readLineAsync = jest.fn(() => {
    return Promise.resolve(input);
  });
};

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
test("6자리 이상의 이름이 포함된 문자열 입력", async () => {
  const input = "sophia";
  mockFn(input);
  expect(async () => await Input.returnArrayOfPlayers()).rejects.toThrow(ERROR.MORE_THAN_MAX);
});