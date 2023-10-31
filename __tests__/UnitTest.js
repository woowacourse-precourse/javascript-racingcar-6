import Car from '../src/model/Car.js';

describe('자동차 경주 게임', () => {
  test.each([[4], [5], [6], [7], [8], [9]])(
    '랜덤값이 4 이상 9 이하인 경우 자동차는 1칸 전진한다',
    (input) => {
      // given
      let randomNumber = input;

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
      let randomNumber = input;

      // when
      const car = new Car();
      car.run(randomNumber);

      // then
      expect(car.getStep()).toEqual(0);
    },
  );
});
