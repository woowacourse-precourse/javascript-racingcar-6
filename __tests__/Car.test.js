import Car from '../src/Car';

describe('Test Car.js', () => {
  test('객체 생성 (Car > constructor)', () => {
    // given
    const input = 'wolha'

    // when
    const car = new Car(input)

    // then
    expect(car.getName()).toBe(input);
  });

  test('이동 (Car > move)', () => {
    // given
    const input = 'wolha'

    // when
    const car = new Car('Wolha');
    car.move();

    // then
    expect(car.getDistance()).toBe(1);
  });
});