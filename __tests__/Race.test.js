import Race from "../src/models/Race";
import Car from "../src/models/Car";
import { MissionUtils } from "@woowacourse/mission-utils";
import { MOVE_THRESHOLD } from "../src/constants";

const MOVING_FORWARD = MOVE_THRESHOLD;
const STOP = 1;

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe("Race 클래스 테스트", () => {
  test("경주 진행 메서드를 호출하면 각 차들이 이동하거나 멈춰있어야 한다", () => {
    // given
    const car1 = new Car("car1");
    const car2 = new Car("car2");
    const cars = [car1, car2];
    const race = new Race(cars);
    mockRandoms([STOP, MOVING_FORWARD]);

    // when
    race.progressRound();

    // then
    expect(car1.getPosition()).toBe(0);
    expect(car2.getPosition()).toBe(1);
  });

  test("각 경기에 대한 자동차의 이름과 위치를 반환한다", () => {
    // given
    const car1 = new Car("car1");
    const car2 = new Car("car2");
    const cars = [car1, car2];
    const race = new Race(cars);

    mockRandoms([STOP, MOVING_FORWARD]);

    // when
    race.progressRound();
    const result = race.getRoundResult();

    // then

    expect(result).toEqual([
      { name: "car1", position: 0 },
      { name: "car2", position: 1 },
    ]);
  });

  test("경기에서 가장 많이 이동한 위치 정보를 반환한다", () => {
    const car1 = new Car("car1");
    const car2 = new Car("car2");
    const car3 = new Car("car3");
    const cars = [car1, car2, car3];
    const race = new Race(cars);

    mockRandoms([STOP, MOVING_FORWARD, MOVING_FORWARD]);

    // when
    race.progressRound();
    const result = race.getMaxPosition();

    // then
    expect(result).toEqual(1);
  });

  test("경기에서 가장 많이 이동한 자동차 이름들을 반환한다", () => {
    const car1 = new Car("car1");
    const car2 = new Car("car2");
    const car3 = new Car("car3");
    const cars = [car1, car2, car3];
    const race = new Race(cars);

    mockRandoms([STOP, MOVING_FORWARD, MOVING_FORWARD]);

    // when
    race.progressRound();
    const winnerNames = race.getWinners();

    // then
    expect(winnerNames).toEqual(["car2", "car3"]);
  });
});
