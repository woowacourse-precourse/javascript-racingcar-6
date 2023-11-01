import Race from '../src/Race.js';

const CAR_NAMES = ['Car1', 'Car2', 'Car3'];

describe('Race', () => {
  test('자동차 이름을 받으면, 경주할 자동자를 생성한다.', () => {
    const race = new Race(CAR_NAMES);

    expect(race.cars).toHaveLength(CAR_NAMES.length);
  });

  test('모든 차수가 끝나면 우승자가 정해진다.', () => {
    const race = new Race(CAR_NAMES);
    const NUM_ATTEMPTS = 10;

    race.runRace(NUM_ATTEMPTS);

    const winners = race.getWinners();

    expect(winners).not.toEqual([]);
  });
});
