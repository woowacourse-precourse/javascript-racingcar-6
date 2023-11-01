import { Console, MissionUtils } from "@woowacourse/mission-utils";
import Race from "../src/Race";

jest.mock("@woowacourse/mission-utils", () => {
  return {
    Console: {
      print: jest.fn(),
    },
    MissionUtils: {
      ...jest.requireActual("@woowacourse/mission-utils").MissionUtils,
      Random: {
        pickNumberInRange: jest.fn(),
      },
    },
  };
});

describe("Race 클래스 테스트", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("moveCars 메서드 내에서 MissionUtils.Random.pickNumberInRange 함수를 호출한다.", () => {
    // given
    const race = new Race(["car1", "car2"], 1);
    MissionUtils.Random.pickNumberInRange = jest.fn().mockReturnValueOnce(5); // 한 번 호출될 때만 5를 반환하도록 설정

    // when
    race.moveCars();

    // then
    expect(MissionUtils.Random.pickNumberInRange).toHaveBeenCalledWith(0, 9);
  });

  test("determineWinners 메서드가 올바르게 최종 우승자를 결정한다.", () => {
    // given
    const race = new Race(["car1", "car2", "car3"], 3);
    race.POSITIONS = [3, 4, 2]; // 특정 라운드의 자동차 위치 설정

    // when
    const winners = race.determineWinners();

    // then
    expect(winners).toEqual(["car2"]); // car2가 최종 우승자여야 함
  });
});
