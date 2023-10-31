import getWinners from '../../src/functions/startRacing/getWinners';

describe('getWinners 테스트', () => {
  test('가장 멀리 간 우승자를 리스트 형태로 반환', () => {
    const input = {
      car1: 10,
      car2: 22,
      car3: 5,
    };
    const result = ['car2'];
    expect(getWinners(input)).toEqual(result);
  });

  test('우승자 2명 이상일 때, 중복 우승자 반환', () => {
    const input = {
      car1: 10,
      car2: 22,
      car3: 22,
      car4: 5,
      car5: 5,
    };
    const result = ['car2', 'car3'];
    expect(getWinners(input)).toEqual(result);
  });
});
