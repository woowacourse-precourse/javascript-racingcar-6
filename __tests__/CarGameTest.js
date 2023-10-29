import CarGame from '../src/model/CarGame.js';

describe('CarGame', () => {
  test('자동차의 전진 거리를 Map으로 반환', () => {
    const carGame = new CarGame();
    const carMap = new Map();

    carMap.set('a', 0);
    carMap.set('b', 0);

    const result = carGame.checkPosition(carMap, 2);

    expect(result.get('a')).toBeGreaterThanOrEqual(0);
    expect(result.get('b')).toBeGreaterThanOrEqual(0);
  });
});
