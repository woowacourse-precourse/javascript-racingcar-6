import RacingCar from '../src/model/RacingCar.js';

describe('RacingCar test', () => {
  const car = new RacingCar();
  const input = 'pobi';

  test('자동차 이름 생성 테스트', () => {
    car.setCarName = input;
    const result = car.getCarName;

    expect(result).toEqual('pobi');
  });

  test('자동차 이동 테스트', () => {
    car.move();
    const result = car.getCarPosition;

    expect(result).toEqual(1);
  });
});
