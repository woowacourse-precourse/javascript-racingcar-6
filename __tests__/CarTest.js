import Car from '../src/Car';
import { Random } from '@woowacourse/mission-utils';

describe('Car', () => {
  let car;

  beforeEach(() => {
    car = new Car('pobi', '');
  });

  it('이름과 횟수를 가진 Car 객체를 생성해야 합니다', () => {
    expect(car).toBeInstanceOf(Car);
    expect(car.name).toBe('pobi');
    expect(car.result).toBe('');
  });

  it('만약 무작위 숫자가 4 이상이면 자동차가 움직여야 합니다', () => {
    jest.spyOn(Random, 'pickNumberInRange').mockReturnValue(4);

    car.move();
    expect(car.result).toBe('-');
  });

  it('만약 무작위 숫자가 4보다 작으면, 자동차가 움직이지 않습니다', () => {
    jest.spyOn(Random, 'pickNumberInRange').mockReturnValue(2);

    car.move();
    expect(car.result).toBe('');
  });

  it('뒤에 공백이 있어도 올바른 형식으로 자동차 점수를 반환해야 합니다', () => {
    car.result = '--- ';
    expect(car.getCarScore()).toEqual(['pobi', '---']);
  });
});
