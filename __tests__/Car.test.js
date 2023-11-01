import Car from '../src/models/Car.js';
import Track from '../src/models/Track.js';

describe('Track method test', () => {
  test('현재 등록되어 있는 차량', () => {
    // given
    const cars = ['ma', 'ria'].map((carName) => new Car(carName));
    const race = new Track(cars);

    // when
    const getCars = race.getCars();

    // then
    expect(getCars.map((car) => car.getCarName())).toEqual(['ma', 'ria']);
  });
});
