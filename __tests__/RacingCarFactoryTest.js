import RacingCarFactory from '../src/models/RacingCarFactory';
import RacingCar from '../src/models/RacingCar';

describe('RacingCarFactory 테스트', () => {
  let racingCarFactory;

  beforeEach(() => {
    racingCarFactory = new RacingCarFactory();
  });

  describe('RacingCar 생성 메서드 테스트', () => {
    it('주어진 이름으로 초기화된 RacingCar 인스턴스를 반환하는지 테스트', () => {
      const carName = '전설의 각그랜져';
      const car = racingCarFactory.createRacingCar(carName);

      expect(car).toBeInstanceOf(RacingCar);
      expect(car.getName()).toBe(carName);
    });
  });
});
