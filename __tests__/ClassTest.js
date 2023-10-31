import Car from '../src/model/Car';

describe('ClassTest', () => {
  describe('자동차 클래스(Car) 테스트', () => {
    test('자동차 인스턴스 생성 테스트', () => {
      const car = new Car('test');
      expect(car.name).toBe('test');
      expect(car.moveCount).toBe(0);
    });
    test('자동차 전진 테스트', () => {
      const car = new Car('test');
      car.forward();
      expect(car.moveCount).toBe(1);
    });
    test('자동차 메소드 실행 후 전진 확인 테스트', () => {
      const car = new Car('test');
      const mockForwardData = [
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        [4, 5, 2, 8, 3, 1, 1, 4, 2, 5],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [9, 8, 7, 6, 5, 4, 3, 2, 1, 3],
        [5, 2, 4, 6, 7, 3, 1, 3, 6, 5],
      ].reduce((a, c) => a.concat(c));
      mockForwardData.forEach(num => {
        car.moveCount = num;
        car.forward();
        expect(car.moveCount).toBe(num + 1);
      });
    });
  });
});
