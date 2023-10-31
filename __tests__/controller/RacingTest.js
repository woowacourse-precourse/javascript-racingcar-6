import RacingController from "../../src/controller/RacingController";
import OutputView from "../../src/view/output";

describe("RacingController의 기능들에 대한 테스트", () => {
  const carNames = ["pobi", "woony", "jun"];
  const attemptCount = 3;
  let racingController;

  beforeEach(() => {
    racingController = new RacingController(carNames, attemptCount);
  });

  test("RacingController 멤버 변수들에 대한 초기화가 정상적으로 이루어졌는지 확인", () => {
    expect(Object.keys(racingController.racingBoard)).toEqual(carNames);
    Object.values(racingController.racingBoard).forEach((distance) => {
      expect(distance).toEqual(0);
    });

    expect(racingController.attemptCount).toBe(attemptCount);
    expect(racingController.maxDistance).toBe(0);
  });

  test("시도 횟수만큼 각 라운드가 실행되는지 확인", () => {
    racingController.playRound = jest.fn();
    racingController.start();
    expect(racingController.playRound).toHaveBeenCalledTimes(attemptCount);
  });

  test("차가 정상적으로 전진하는지 확인", () => {
    racingController.isForwardRacingCar = jest.fn();
    racingController.isForwardRacingCar.mockReturnValue(true);

    racingController.playRound();
    Object.values(racingController.racingBoard).forEach((distance) => {
      expect(distance).toBe(1);
    });
    expect(racingController.maxDistance).toBe(1);
  });

  test("차가 정상적으로 정지하는지 확인", () => {
    racingController.isForwardRacingCar = jest.fn();
    racingController.isForwardRacingCar.mockReturnValue(false);

    racingController.playRound();
    Object.values(racingController.racingBoard).forEach((distance) => {
      expect(distance).toBe(0);
    });
    expect(racingController.maxDistance).toBe(0);
  });

  test("최대 전진 거리가 정상적으로 갱신되는지 확인", () => {
    let distance = 5;
    racingController.renewMaxDistance(distance);
    expect(racingController.maxDistance).toBe(distance);

    distance = 3;
    racingController.renewMaxDistance(distance);
    expect(racingController.maxDistance).toBe(5);
  });

  test("우승자가 정상적으로 출력되는지 확인", () => {
    racingController.racingBoard = {
      pobi: 5,
      woony: 5,
      jun: 4,
    };
    racingController.maxDistance = 5;

    const finalWinnersSpy = jest.spyOn(OutputView, "printRacingFinalWinners");
    racingController.end();

    expect(finalWinnersSpy).toBeCalledWith("pobi,woony");
  });
});
