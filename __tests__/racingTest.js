import getWinners from '../src/functions/startRacing/getWinners';
import canGo from '../src/functions/startRacing/playOneRound/canGo';

describe('레이싱 테스트', () => {
  test('우승자 판별', () => {
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

  test('값이 4이상일 때 전진, 4미만일 때 멈춤', () => {
    const mockData = {
      1: false,
      2: false,
      3: false,
      4: true,
      5: true,
      9: true,
      10: true,
    };
    Object.entries(mockData).forEach(([input, result]) => {
      expect(canGo(input)).toEqual(result);
    });
  });
});
