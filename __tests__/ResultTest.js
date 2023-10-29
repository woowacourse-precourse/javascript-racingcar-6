import GameResult from '../src/model/GameResult.js';

describe('GameResult', () => {
  test('1회차 자동차 전진 거리 Map 반환', () => {
    const prevLog = new Map();
    const carPosition = new Map();

    carPosition.set('a', 3);
    carPosition.set('b', 0);

    const carLog = new GameResult().getForwardResult(carPosition, prevLog);

    // 'a' 자동차의 전진 거리 = 로그 1 증가
    expect(carLog.get('a')).toBe(1);

    // 'b' 자동차는 4 이상의 숫자가 없었으므로 정지
    expect(carLog.get('b')).toBe(0);

    // 'a' 자동차의 움직여야할 거리에서 1 전진했으므로 -1
    expect(carPosition.get('a')).toBe(2);
  });
});
