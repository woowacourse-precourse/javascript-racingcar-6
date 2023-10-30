import Car from '../../src/Car.js';

describe('class Car test', () => {
  let car;
  beforeEach(() => {
    const userName = '이두리';
    car = new Car(userName);
  });

  describe('method test : getPositionResult() ', () => {
    test('3번 움직였을때 --- 반환 테스트', () => {
      const isMovable = true;

      car.increasePosition(isMovable);
      car.increasePosition(isMovable);
      car.increasePosition(isMovable);

      const result = car.getPositionResult();

      expect(result).toEqual({ name: '이두리', position: '---' });
    });

    test.failing(
      '2번 움직였는데 position이 변경되지 않았을때 fail 테스트',
      () => {
        const isMovable = true;
        const stop = false;

        car.increasePosition(stop);
        car.increasePosition(isMovable);
        car.increasePosition(isMovable);

        const result = car.getPositionResult();

        expect(result).toEqual({ name: '이두리', position: '' });
      }
    );
  });
});
