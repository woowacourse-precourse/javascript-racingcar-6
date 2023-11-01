import { MissionUtils } from "@woowacourse/mission-utils";
import RacingCar from "../../src/model/RacingCar"

const mockRandom = (number) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  MissionUtils.Random.pickNumberInRange.mockImplementation(() => {
    return number;
  })
}

describe('RacingCar test', () => {
  test('class RacingCar - 다양한 메소드 동작 확인', () => {
    const testCar = new RacingCar('test');

    mockRandom(3);
    testCar.advance();
    const resultDoNotAdvance = testCar.getDisplacement();
    expect(resultDoNotAdvance).toEqual(0);

    mockRandom(4);
    testCar.advance();
    const resultAdvance = testCar.getDisplacement();
    expect(resultAdvance).toEqual(1);

    const resultGetName = testCar.getName();
    expect(resultGetName).toEqual('test');

    const resultGetState = testCar.getState();
    expect(resultGetState).toEqual('test : -');
  })
});