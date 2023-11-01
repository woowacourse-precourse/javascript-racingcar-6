import Car from '../../src/domains/Car.js';

describe('class Car test', () => {
  let car;
  beforeEach(() => {
    const userName = '이두리';
    car = new Car(userName);
  });

  describe('method test : getPositionResult() ', () => {
    test.each([1, 3, 5, 7, 9, 10])(
      `n번 움직였을때 움직인 거리가 n 반환 테스트`,
      (MOVE_FOWARD_AMOUNT) => {
        Array.from({ length: MOVE_FOWARD_AMOUNT }, () => {
          car.moveFoward();
        });
        const { position } = car.getPositionResult();

        expect(position).toEqual(MOVE_FOWARD_AMOUNT);
      }
    );

    test('2번 움직였는데 position이 변경되지 않았을때의 값과 비교했을때 fail 테스트', () => {
      const INVALID_POSITION_DISTANCE = 0;

      car.moveFoward();
      car.moveFoward();

      const { position } = car.getPositionResult();

      expect(position).not.toBe(INVALID_POSITION_DISTANCE);
    });
  });
});
