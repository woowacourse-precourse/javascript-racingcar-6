import CarRace from '../src/models/CarRace.js';
import RandomNumberForTest from '../src/utils/RandomNumberForTest.js';
import RandomNumberGenerator from '../src/utils/RandomNumberGenerator.js';

describe('CarRace', () => {
  test('자동차의 전진 거리를 Map으로 반환', () => {
    const randomGenerator = RandomNumberGenerator;
    const race = new CarRace(randomGenerator);
    const startLine = new Map();

    startLine.set('a', 0);
    startLine.set('b', 0);

    const carPosition = race.checkPosition(startLine, 2);

    expect(carPosition.get('a')).toBeGreaterThanOrEqual(0);
    expect(carPosition.get('b')).toBeGreaterThanOrEqual(0);
  });

  test('랜덤 숫자 4-9 범위로 제어하여 전진 여부 테스트', () => {
    const randomTestGenerator = RandomNumberForTest;
    const race = new CarRace(randomTestGenerator);
    const startLine = new Map();

    startLine.set('a', 0);
    startLine.set('b', 0);

    const carPosition = race.checkPosition(startLine, 1);

    expect(carPosition.get('a')).toEqual(1);
    expect(carPosition.get('b')).toEqual(1);
  });
});
