import { Random } from '@woowacourse/mission-utils';
import Car from '../src/utils/car';

describe('Car class Test', () => {
  let car;
  let name;

  beforeEach(() => {
    name = 'test';
    car = new Car(name);
  });

  test('자동차 객체를 생성할 때 이름과 move가 초기화되어야 하며 getName은 자동차 이름을, getMove는 자동차 이동거리를 가져와야 한다.', () => {
    expect(car.getName()).toEqual(name);
    expect(car.getMove()).toEqual(0);
  });

  test('moveCar 메서드가 호출되면 이동 거리를 1만큼 증가시켜야 한다.', () => {
    car.moveCar();
    const result = car.getMove();

    expect(result).toEqual(1);
  });

  test('advanceCar 메서드가 호출되면 랜덤수 생성 후, 4 이상이면 해당 자동차를 1 전진시킨다.', () => {
    jest.spyOn(Random, 'pickNumberInRange');

    // 랜덤 수가 4 이상인 경우
    Random.pickNumberInRange.mockReturnValue(4);
    car.advanceCar();
    expect(car.getMove()).toEqual(1);
  });

  test('advanceCar 메서드가 호출되면 랜덤수 생성 후, 4 미만이면 해당 자동차를 전진시키지 않는다.', () => {
    jest.spyOn(Random, 'pickNumberInRange');

    // 랜덤 수가 4 미만인 경우
    Random.pickNumberInRange.mockReturnValue(3);
    car.advanceCar();
    expect(car.getMove()).toEqual(0);
  });
});
