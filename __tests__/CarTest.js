import Car from '../src/car/Car';
import { Random } from '@woowacourse/mission-utils';

const mockRandoms = (number) => {
  Random.pickNumberInRange = jest.fn().mockReturnValueOnce(number);
};

describe('Car Class 메소드 테스트', () => {
  // move 메소드
  test('무작위 값이 4 이상일 경우 전진한다.', () => {
    const car = new Car('mockName');
    mockRandoms(5);
    car.move();
    expect(car.position).toBe(1);
  });

  test('무작위 값이 4 미만일 경우 전진하지 않는다.', () => {
    const car = new Car('mockName');
    mockRandoms(3);
    car.move();
    expect(car.position).toBe(0);
  });

  // getter 메소드 테스트
  test('Car의 이름을 반환한다.', () => {
    const name = 'temp';
    const car = new Car(name);

    expect(car.getName()).toBe(name);
  });

  test('Car의 위치을 반환한다.', () => {
    const name = 'temp';
    const car = new Car(name);

    expect(car.getPosition()).toBe(0);
  });
});
