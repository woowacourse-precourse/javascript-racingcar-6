import Car from '../src/car.js'; // Car 모듈 가져옴
import Game from '../src/game.js'; // Game 모듈 가져옴

describe('Game 클래스 - getWinners()', () => {
  test('한 대의 자동차만 최대 위치에 도달', () => {
    // given
    const cars = [new Car('car1'), new Car('car2'), new Car('car3')];
    cars[0].position = 5;
    cars[1].position = 3;
    cars[2].position = 4;
    const game = new Game(cars);

    // when
    const winners = game.getWinners();

    // then
    expect(winners).toEqual('car1'); // 가장 높은 위치에 있는 자동차는 'car1'
  });

  test('여러 대의 자동차가 최대 위치에 도달', () => {
    // given
    const cars = [new Car('car1'), new Car('car2'), new Car('car3')];
    cars[0].position = 5;
    cars[1].position = 5;
    cars[2].position = 4;
    const game = new Game(cars);

    // when
    const winners = game.getWinners();

    // then
    expect(winners).toEqual('car1, car2'); // 가장 높은 위치에 있는 자동차는 'car1'와 'car2'
  });

  test('getWinners 메서드 - 모든 자동차의 위치가 같음', () => {
    // given
    const cars = [new Car('car1'), new Car('car2'), new Car('car3')];
    cars[0].position = 3;
    cars[1].position = 3;
    cars[2].position = 3;
    const game = new Game(cars);

    // when
    const winners = game.getWinners();

    // then
    expect(winners).toEqual('car1, car2, car3'); // 모든 자동차의 위치가 같으므로 모든 자동차가 우승
  });
});
