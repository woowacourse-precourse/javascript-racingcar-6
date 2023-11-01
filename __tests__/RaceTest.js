import Race from '../src/models/Race.js';

describe('Race 실행 결과', () => {
  let race;
  let scoreBoard;
  let laps;

  beforeEach(() => {
    race = new Race();
    scoreBoard = [
      ['tesla', 0],
      ['benz', 0],
    ];
    laps = 3;
  });

  test('`racing` 메소드 테스트', () => {
    const result = race.racing(scoreBoard, laps);

    expect(result).toEqual(
      expect.arrayContaining([
        ['tesla', expect.any(Number)],
        ['benz', expect.any(Number)],
      ]),
    );
  });
});
