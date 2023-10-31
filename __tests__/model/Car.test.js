import Car from '../../src/model/Car';

const alwaysMoveStrategy = {
  shouldMove: () => true,
};

const neverMoveStrategy = {
  shouldMove: () => false,
};

describe('Car 클래스', () => {
  describe('constructor 메서드', () => {
    test('Car 객체가 올바르게 초기화되어야 한다', () => {
      const car = new Car('pobi', alwaysMoveStrategy);
      const carInfo = car.getCarInformation();
      expect(carInfo.name).toBe('pobi');
      expect(carInfo.position).toBe(0);
    });
  });

  describe('getCarInformation 메서드', () => {
    test('현재 이름과 위치를 객체로 반환해야 한다', () => {
      const car = new Car('pobi', alwaysMoveStrategy);
      const carInfo = car.getCarInformation();
      expect(carInfo.name).toBe('pobi');
      expect(carInfo.position).toBe(0);
    });
  });

  describe('move 메서드', () => {
    test('shouldMove가 true일 때 위치가 증가해야 한다', () => {
      const car = new Car('pobi', alwaysMoveStrategy);
      car.move();
      const carInfo = car.getCarInformation();
      expect(carInfo.position).toBe(1);
    });

    test('shouldMove가 false일 때 위치가 그대로 유지되어야 한다', () => {
      const car = new Car('pobi', neverMoveStrategy);
      car.move();
      const carInfo = car.getCarInformation();
      expect(carInfo.position).toBe(0);
    });
  });
});
