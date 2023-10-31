import Car from '../src/Model/Car';
import { Random } from '@woowacourse/mission-utils';

describe('자동차 생성 test', () => {
  test('자동차 생성', async () => {
    // given
    const carNames = ['호중', 'hoj', '77', 'KHJ'];

    // when
    const cars = carNames.map((carName) => new Car(carName));

    // then
    //자동차 이름 일치 여부
    expect(cars.map((car) => car.name)).toEqual(['호중', 'hoj', '77', 'KHJ']);

    //자동차 초기 거리 일치 여부
    expect(cars.map((car) => car.distance)).toEqual([0, 0, 0, 0]);
  });

  const mockRandoms = (numbers) => {
    Random.pickNumberInRange = jest.fn();
    numbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, Random.pickNumberInRange);
  };

  test('자동차 거리 증가', () => {
    const isGo = [4];
    mockRandoms(isGo);

    const car = new Car('hojkim77');

    // 전진 전
    expect(car.distance).toEqual(0);

    // 전진 후
    car.addDistance();
    expect(car.distance).toEqual(1);
  });
});
