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

const updateRaceResults = (participants, raceResults, determineMoveMock) => {
  const updatedRaceResults = { ...raceResults };

  participants.forEach((participant) => {
    if (determineMoveMock()) {
      updatedRaceResults[participant] += '-';
    }

    MissionUtils.Console.print(`${participant} : ${updatedRaceResults[participant]}\n`);
  });

  MissionUtils.Console.print('\n');

  return updatedRaceResults;
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

describe('validateNames 테스트', () => {
  test.each([
    [["pobi,javaji"]],
    [['      ,aqsd']]
  ])("이름에 대한 예외 처리", (inputs) => {
    mockQuestions(inputs);

    expect(() => validateNames(inputs[0])).toThrowError('[ERROR]');
  });
});

describe('determineMove 테스트', () => {
  test('4이상만 이동하는지 확인', () => {
    const inputs = [1, 2, 3, 5, 0, 6, 4, 7, 8];
    const results = [false, false, false, true, false, true, true, true, true];

    const pickNumberSpy = jest.spyOn(MissionUtils.Random, 'pickNumberInRange');

    inputs.forEach((input, index) => {
      pickNumberSpy.mockReturnValueOnce(input);

      expect(determineMove()).toBe(results[index]);
    });

    jest.restoreAllMocks();
  });
});

describe('updateRaceResults 테스트', () => {
  test('레이스 결과가 제대로 출력되는지 확인', () => {
    const lastCall = jest.spyOn(MissionUtils.Console, 'print');

    const participants = [
      ['car1', 'car2', 'car3'],
      ['1', '2', '3'],
      ['나는', '지금', '배고파']];

    const initialRaceResults = [
      { car1: '-', car2: '-', car3: '-' },
      { '1': '', '2': '-', '3': '' },
      { '나는': '--', '지금': '', '배고파': '' }
    ];

    const expectResults = [
      { car1: '-', car2: '--', car3: '--' },
      { '1': '', '2': '--', '3': '-' },
      { '나는': '--', '지금': '-', '배고파': '-' }
    ];

    participants.forEach((_, index) => {
      const determineMoveMock = jest.fn();
      determineMoveMock.mockReturnValueOnce(false);
      determineMoveMock.mockReturnValueOnce(true);
      determineMoveMock.mockReturnValueOnce(true);

      const updatedRaceResults = updateRaceResults(participants[index], initialRaceResults[index], determineMoveMock);

      expect(updatedRaceResults).toEqual(expectResults[index]);
      expect(lastCall).toHaveBeenLastCalledWith('\n');
    });

    jest.restoreAllMocks();
  });
});