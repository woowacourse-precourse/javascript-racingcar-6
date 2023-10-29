import { MissionUtils } from "@woowacourse/mission-utils";
import Racing from '../src/Racing';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe("Racing 함수 테스트", () => {
  test(" n만큼 반복하여 RandomPick 반환값을 배열에 저장한뒤 반환", () => {
    const car = ['용안', '이삭', '광호'];
    const n = 2;
    const inputs = ['6', '2', '5', '2', '6', '7'];
    
    mockRandoms(inputs);
    expect(Racing(car, n)).toEqual(['-', '-', '--']);
  });
});