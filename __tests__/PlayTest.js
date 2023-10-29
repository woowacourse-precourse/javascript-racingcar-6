import { describe, expect, test } from '@jest/globals';
import { isForward, makeRandomNums, curCarState, checkChampion } from '../src/Play';

describe('게임 진행 테스트', () => {
  test('랜덤 숫자 생성', () => {
    const cars = ['poni', 'jojo', 'poro'];
    const result = makeRandomNums(cars);

    expect(result).toContainEqual(['poni', expect.any(Number)]);
  });

  test('전진 여부 검증', () => {
    const cars = [
      ['poni', 1],
      ['jojo', 2],
      ['poro', 4]
    ];
    const result = isForward(cars);

    expect(result).toContainEqual(['poni', false]);
    expect(result).toContainEqual(['jojo', false]);
    expect(result).toContainEqual(['poro', true]);
  });

  test('현재 자동차 상태 검증', () => {
    const cars = [
      ['poni', 1],
      ['jojo', 2],
      ['poro', 4]
    ];
    const forwardArr = [
      ['poni', false],
      ['jojo', false],
      ['poro', true]
    ];
    const result = curCarState(cars, forwardArr);

    expect(result).toContainEqual(['poni', 1]);
    expect(result).toContainEqual(['jojo', 2]);
    expect(result).toContainEqual(['poro', 5]);
  });

  test('우승자 검증', () => {
    const cars = [
      ['poni', 1],
      ['jojo', 2],
      ['poro', 4]
    ];
    const result = checkChampion(cars);

    expect(result).toContain('poro');
  });
});
