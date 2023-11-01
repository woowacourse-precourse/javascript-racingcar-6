import Car from '../src/models/Car.js';
import Track from '../src/models/Track.js';

describe('Track method test', () => {
  test('Track 객체와 Car 객체가 서로 연결되어 자동차 이름을 잘 반환하는지 test', () => {
    // given
    const cars = ['ma', 'ria'].map((carName) => new Car(carName));
    const race = new Track(cars);

    // when
    const getCars = race.getCars();

    // then
    expect(getCars.map((car) => car.getCarName())).toEqual(['ma', 'ria']);
  });

  test('자동차 이름과 전진을 잘 하는지 test', () => {
    // given
    const car = new Car('Maria');

    // when
    car.moveForward();

    // then
    expect(car.getCarName()).toBe('Maria');
    expect(car.getCarDistance()).toBe(1);
  });
});
