import { ERROR_MESSAGE } from '../src/constants/Message.js';
import { Car, CarList } from '../src/models/index.js';
import { mockRandoms } from '../testUtils/index.js';

describe('자동차 게임:자동차 테스트', () => {
  describe('자동차 이름에 대한 유효성 검사', () => {
    test('자동차 이름이 ","로 구분되어 있지 않으면 오류 발생', () => {
      const ARRAY = ['car1 car12', 'car1  car2'];

      ARRAY.forEach((v) => {
        expect(() => new CarList(v)).toThrow(ERROR_MESSAGE.delimiterError);
      });
    });

    test('경주에 참여하는 자동차가 1개 미만 또는 10개 초과힐 경우, 오류를 발생 ', () => {
      const NAME = 'car';
      const NAME_ARRAY = Array.from({ length: 11 }, () => NAME);

      expect(() => new CarList(NAME_ARRAY.join(','))).toThrow(
        ERROR_MESSAGE.numberOfCar
      );
    });

    test('자동차 이름이 1~5개의 숫자,영문,함글로 이루어지지 않은 경우, 오류 발생', () => {
      const ARRAY = ['car1, car 12', 'car1, car_1', 'car1,car123'];

      ARRAY.forEach((v) => {
        expect(() => new CarList(v)).toThrow(ERROR_MESSAGE.nameError);
      });
    });

    test('자동차 이름이 유효한 경우, CarList에서 자동차 배열을 반환', () => {
      const ARRAY = ['car1,car12', '자동차,12car'];

      ARRAY.forEach((v) => {
        expect(new CarList(v).getCarArray()).toEqual(
          v.split(',').map((t) => new Car(t))
        );
      });
    });
  });

  describe('자동차 전진 테스트', () => {
    test('자동차 전진 테스트', () => {
      const car = new Car('pobi');

      mockRandoms([3]);
      car.handleMovement();

      expect(car.movement.length).toBe(0);
      mockRandoms([4]);

      car.handleMovement();

      expect(car.movement.length).toBe(1);
    });
  });
});
