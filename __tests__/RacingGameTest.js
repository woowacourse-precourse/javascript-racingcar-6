import Car from '../src/Car';
import RacingGame from '../src/RacingGame';

describe('hasDuplicateCarName 함수 테스트', () => {
  test('중복될 때 예외 처리', () => {
    // given
    const cars = [];
    const carNames = ['name1', 'name2', 'name3'];
    const newCarName = 'name1';

    for (const carName of carNames) {
      const car = new Car(carName);
      cars.push(car);
    }

    const racingGame = new RacingGame(cars);

    // when
    const result = () => racingGame.hasDuplicateCarName(newCarName);

    // then
    expect(result).toThrow();
  });

  test('중복되지 않을 때 false를 반환', () => {
    // given
    const cars = [];
    const carNames = ['name1', 'name2', 'name3'];
    const newCarName = 'name4';

    for (const carName of carNames) {
      const car = new Car(carName);
      cars.push(car);
    }

    const racingGame = new RacingGame(cars);

    // when
    const result = racingGame.hasDuplicateCarName(newCarName);

    // then
    expect(result).toBeFalsy();
  });
});
