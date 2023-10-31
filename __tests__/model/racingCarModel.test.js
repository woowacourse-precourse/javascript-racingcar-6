import Car from '../../src/model/Car.js';

describe('레이싱카 테스트', () => {
  it.each([
    { input: 'abc,def,ghi' },
    { input: 'park,kim,lee' },
    { input: 'Raci,Game,Win,Woo,Tech,Cool' },
  ])('정상 생성 테스트', ({ input }) => {
    let RacingCar = [];

    const splitInput = input.split(',');
    splitInput.forEach((carName) => {
      RacingCar.push(new Car(carName));
    });

    expect(RacingCar).toHaveLength(splitInput.length);
    RacingCar.forEach((car, index) => {
      expect(car.getName()).toBe(splitInput[index]);
      expect(car.getAdvance()).toBe(0);
    });
  });
});
