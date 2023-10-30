const {
  determineMove,
  findMaxScore,
  findWinnerName
} = require("../src/playing/runRace");
const { validateNames, validateParseNumber } = require('../src/playing/checkList');
const { MissionUtils } = require("@woowacourse/mission-utils");

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("문자열 테스트", () => {
  test("split 메서드로 주어진 값을 구분", () => {
    const input = "1,2";
    const result = input.split(",");

    expect(result).toContain("2", "1");
    expect(result).toContainEqual("1", "2");
  });

  test("split 메서드로 구분자가 포함되지 않은 경우 값을 그대로 반환", () => {
    const input = "1";
    const result = input.split(",");

    expect(result).toContain("1");
  });

  test("substring 메서드로 특정 구간 값을 반환", () => {
    const input = "(1,2)";
    const result = input.substring(1, 4);

    expect(result).toEqual("1,2");
  });

  test("at 메서드로 특정 위치의 문자 찾기", () => {
    const input = "abc";
    const result = input.at(0)

    expect(result).toEqual("a");
  });
});

describe('validateParseNumber 테스트', () => {
  test.each([
    [['1ㄷㅁ']],
    [['ㅇ3ㅎ']],
    [['    ']]
  ])("시도 횟수에 대한 예외 처리", (inputs) => {
    mockQuestions(inputs);

    expect(() => validateParseNumber(inputs[0])).toThrowError('[ERROR]');
  });
});
