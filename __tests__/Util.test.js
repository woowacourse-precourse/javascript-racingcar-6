import { Random } from '@woowacourse/mission-utils';
import Util from '../src/Util.js';

describe('Util 클래스 테스트', () => {
  test('getRandomBoolean true 함수 테스트', () => {
    jest.spyOn(Random, 'pickNumberInRange').mockReturnValue(6);

    expect(Util.getRandomBoolean()).toBe(true);
  });

  test('getRandomBoolean false 함수 테스트', () => {
    jest.spyOn(Random, 'pickNumberInRange').mockReturnValue(3);

    expect(Util.getRandomBoolean()).toBe(false);
  });

  test('getMaxLength 함수 테스트', () => {
    const JOIN_LIST = [
      { name: 'tae', progress: '---' },
      { name: 'yoon', progress: '-' },
    ];
    const result = Util.getMaxLength(JOIN_LIST);
    expect(result).toBe(3);
  });
});
