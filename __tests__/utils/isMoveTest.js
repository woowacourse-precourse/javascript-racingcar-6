import { Random } from '@woowacourse/mission-utils';
import isMove from '../../src/utils/isMove';

const mockRandmos = (number) => {
  Random.pickNumberInRange = jest.fn();
  Random.pickNumberInRange.mockReturnValueOnce(number);
};

describe('isMove Test', () => {
  test('4이상이면 전진(true)', () => {
    const move = 4;
    mockRandmos(move);

    expect(isMove()).toBeTruthy();
  });

  test('4미만이면 정지(false)', () => {
    const stop = 3;
    mockRandmos(stop);

    expect(isMove()).toBeFalsy();
  });
});
