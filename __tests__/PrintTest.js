import { MissionUtils } from "@woowacourse/mission-utils";

import startGame from "../src/print/startGame.js";
import askTryNumber from "../src/print/askTryNumber.js";
import announceWinner from "../src/print/announceWinner.js";
import announceCurrentRacingState from "../src/print/announceCurrentRacingState.js";

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("print 폴더에 있는 함수들에 대한 테스트", () => {
  test("startGame 함수 실행후 `경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)` 문구가 출력되는지 확인", () => {
    const message =
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)";
    const logSpy = getLogSpy();

    startGame(message);

    expect(logSpy).toHaveBeenCalledWith(message);
  });

  test("askTryNumber 함수 실행후 `시도할 횟수는 몇 회인가요?` 문구가 출력되는지 확인", () => {
    const message = "시도할 횟수는 몇 회인가요?";
    const logSpy = getLogSpy();

    askTryNumber(message);

    expect(logSpy).toHaveBeenCalledWith(message);
  });

  test("announceWinner 함수 실행후 최종 우승자 문자열이 정상적으로 출력되는지 확인", () => {
    const input = [
      { car: "first1", currentState: 3 },
      { car: "first2", currentState: 3 },
    ];
    const message = "최종 우승자 : first1, first2";
    const logSpy = getLogSpy();

    announceWinner(input);

    expect(logSpy).toHaveBeenCalledWith(message);
  });

  test("announceCurrentRacingState 함수 실행후 문구가 정상적으로 출력되는지 확인", () => {
    let input = [{ car: "first", currentState: 1 }];
    const randoms = [5, 4, 1, 3, 7];
    const outputs = [
      "first : --",
      "first : ---",
      "first : ---",
      "first : ---",
      "first : ----",
    ];
    const logSpy = getLogSpy();

    mockRandoms([...randoms]);

    let count = randoms.length;

    while (count > 0) {
      input = [...announceCurrentRacingState(input)];
      expect(logSpy).toHaveBeenCalledWith(outputs[5 - count]);
      logSpy.mockClear();
      count -= 1;
    }
  });
});
