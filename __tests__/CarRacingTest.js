import { CarRacing, RaceSimulator } from '../cargame/CarRacing';

describe('CarRacing', () => {
  describe('pickNumberInRange', () => {
    test('주어진 범위 내에서 숫자 선택', () => {
      const randomNumber = CarRacing.pickNumberInRange(0, 9);

      expect(randomNumber).toBeGreaterThanOrEqual(0);
      expect(randomNumber).toBeLessThanOrEqual(9);
    });
  });
});

describe('RaceSimulator', () => {
  describe('simulateRace', () => {
    test('주어진 횟수로 자동차 레이스 시뮬레이션 하기', () => {
      const carNames = ['pobi', 'woni', 'jun'];
      const raceSimulator = new RaceSimulator(carNames);
      raceSimulator.simulateRace(5);
      const raceResults = raceSimulator.getRaceResults();

      expect(raceResults).toHaveLength(5);
    });
  });

  describe('moveCar', () => {
    test('자동차가 이동하는지 테스트', () => {
      const carNames = ['pobi'];
      const raceSimulator = new RaceSimulator(carNames);
      const car = raceSimulator.cars[0];

      CarRacing.pickNumberInRange = jest.fn(() => 6);

      raceSimulator.moveCar(car);

      expect(car.position).toBe('-');
    });
    test('자동차가 이동 안하는지 테스트', () => {
      const carNames = ['pobi'];
      const raceSimulator = new RaceSimulator(carNames);
      const car = raceSimulator.cars[0];

      CarRacing.pickNumberInRange = jest.fn(() => 0);

      raceSimulator.moveCar(car);

      expect(car.position).toBe('');
    });
  });

  describe('generateRaceResults', () => {
    test('자동차 위치 기반으로 레이스 결과 생성', () => {
      const carNames = ['pobi', 'woni', 'jun'];
      const raceSimulator = new RaceSimulator(carNames);

      raceSimulator.cars[0].position = '--';
      raceSimulator.cars[1].position = '-';
      raceSimulator.cars[2].position = '--';

      raceSimulator.generateRaceResults();
      const raceResults = raceSimulator.getRaceResults();

      expect(raceResults).toEqual(['pobi : --\nwoni : -\njun : --']);
    });
  });
});
