import Car from '../src/Car';

let car;
beforeEach(() => {
  car = new Car(' pobi ');
});

describe('전진-정지', () => {
  test('공백 제거', () => {
    expect(car.name).toBe('pobi');
  });

  test.each([4, 9])('condition >= 4 / 전진', carCondition => {
    car.move(carCondition);
    expect(car.position).toBe(1);
  });

  test.each([0, 3])('4 > condition / 정지', carCondition => {
    car.move(carCondition);
    expect(car.position).toBe(0);
  });
});
