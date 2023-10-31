import { Random } from '@woowacourse/mission-utils';
import { calculateNextResult } from '../src/process';

const mockRandoms = numbers => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickNumberInRange);
};

describe('경주 처리', () => {
  test('전진하는 경우', () => {
    const randoms = [7];

    mockRandoms([...randoms]);

    const input = { name: 'adam', distanceFromStart: 0 };

    const result = calculateNextResult(input);

    expect(result.distanceFromStart).toEqual(1);
  });

  test('정지해있는 경우', () => {
    const randoms = [3];

    mockRandoms([...randoms]);

    const input = { name: 'adam', distanceFromStart: 0 };

    const result = calculateNextResult(input);

    expect(result.distanceFromStart).toEqual(0);
  });
});
