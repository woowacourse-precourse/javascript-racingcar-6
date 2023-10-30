// __tests__/Race.test.js
import { MissionUtils } from "@woowacourse/mission-utils";
import Race from "../src/Race";

// MissionUtils.Random.pickNumberInRange 함수가 호출되는지 확인하는 테스트
test("moveCars 메서드 내에서 MissionUtils.Random.pickNumberInRange 함수를 호출한다.", () => {
  // given
  const race = new Race(["car1", "car2"], 1);
  MissionUtils.Random.pickNumberInRange = jest.fn().mockReturnValue(5);

  // when
  race.moveCars();

  // then
  expect(MissionUtils.Random.pickNumberInRange).toHaveBeenCalledWith(0, 9);
});
