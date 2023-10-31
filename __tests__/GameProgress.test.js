import GameProgress from "../src/GameProgress";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe("GameProgress 클래스", () => {
  const gameSettings = {
    carNames: ["pobi", "crong", "wang"],
    trialCount: 5,
  };

  beforeEach(() => {
    jest.clearAllMocks(); // 모든 모킹된 함수의 호출 정보를 초기화
  });

  test("전진, 정지", () => {
    // given
    const gameProgress = new GameProgress(gameSettings);
    mockRandoms([4, 2, 5]); // 모든 자동차들을 전진

    // when
    gameProgress.proceed();
    const advance = gameProgress.getAdvance();

    // then
    expect(advance).toEqual({
      pobi: 1,
      crong: 0,
      wang: 1,
    });
  });

  test("연속적인 proceed", () => {
    // given
    const gameProgress = new GameProgress(gameSettings);
    mockRandoms([3, 4, 9, 8, 2, 4]); // Random.pickNumberInRange의 반환값을 모킹

    // when
    gameProgress.proceed();

    // then
    expect(gameProgress.getAdvance()).toEqual({ pobi: 0, crong: 1, wang: 1 });

    // when
    gameProgress.proceed();

    // then
    expect(gameProgress.getAdvance()).toEqual({ pobi: 1, crong: 1, wang: 2 });
  });
});
