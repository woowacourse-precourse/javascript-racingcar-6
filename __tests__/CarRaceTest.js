import CarRace from '../src/models/CarRace.js';

describe('CarRace', () => {
  test('자동차의 전진 거리를 Map으로 반환', () => {
    const race = new CarRace();
    const startLine = new Map();

    startLine.set('a', 0);
    startLine.set('b', 0);

    const carPosition = race.checkPosition(startLine, 2);

    expect(carPosition.get('a')).toBeGreaterThanOrEqual(0);
    expect(carPosition.get('b')).toBeGreaterThanOrEqual(0);
  });
});
