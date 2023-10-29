import { MissionUtils } from "@woowacourse/mission-utils";
import RandomPick from '../src/RandomPick.js';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe("RandomPick 함수 테스트", () => {
  test("랜덤값이 4이상일 경우 '-'반환", () => {
    const inputs = ['6'];
    mockRandoms(inputs);
    expect(RandomPick()).toBe('-');
  });

  test("4이하일 경우 ''반환", () => {
    const inputs = ['3'];
    mockRandoms(inputs);
    expect(RandomPick()).toBe('');
  });
});