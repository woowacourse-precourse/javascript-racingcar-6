import App from '../src/App.js';
import Car from '../src/model/Car.js';
import RandomNumber from '../src/RandomNumber.js';

describe('자동차 경주 게임', () => {
  test.each([[4], [5], [6], [7], [8], [9]])(
    '랜덤값이 4 이상 9 이하인 경우 자동차는 1칸 전진한다',
    (input) => {
      // given
      const randomNumber = input;

      // when
      const car = new Car();
      car.run(randomNumber);

      // then
      expect(car.getStep()).toEqual(1);
    },
  );

  test.each([[0], [1], [2], [3]])(
    '랜덤값이 0 이상 3 이하인 경우 자동차는 전진하지 않는다',
    (input) => {
      // given
      const randomNumber = input;

      // when
      const car = new Car();
      car.run(randomNumber);

      // then
      expect(car.getStep()).toEqual(0);
    },
  );

  test.each([['sujin,yujin'], ['jina,kayla,lily'], ['smuel,andy,scarl']])(
    '입력받은 이름으로 자동차 이름이 생성된다',
    (inputs) => {
      // given
      const names = inputs.split(',');

      // when
      const app = new App();
      app.setCars(names);

      // then
      app.cars.forEach((car, i) => expect(car.getName()).toEqual(names[i]));
    },
  );

  test('랜덤숫자는 0 이상 9 이하로만 생성된다', () => {
    // when
    const randomNumber = RandomNumber.create();

    // then
    expect(randomNumber).toBeGreaterThanOrEqual(0);
    expect(randomNumber).toBeLessThanOrEqual(9);
  });
});
