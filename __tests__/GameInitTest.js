import Game from '../src/model/Game';
import Car from '../src/model/Car';

describe('Game 초기 설정 테스트', () => {
  let game;
  let cars;

  beforeEach(() => {
    const carNameInput = 'Car1,Car2,Car3';
    const roundInput = 5;
    game = new Game(carNameInput, roundInput);
    cars = game.getCars();
  });

  test('입력한 round가 설정된다.', () => {
    expect(game.getRound()).toBe(5);
  });

  test('입력한 수의 자동차가 생성된다.', () => {
    expect(game.getCars()).toHaveLength(3);
  });

  test('각 자동차의 이름이 설정된다.', () => {
    expect(cars.map(car => car.getName())).toEqual(['Car1', 'Car2', 'Car3']);
  });

  test('자동차의 위치가 0으로 초기화된다.', () => {
    expect(cars.map(car => car.getPosition())).toEqual([0, 0, 0]);
  });

  test('자동차 인스턴스가 생성된다', () => {
    cars.forEach(car => expect(car).toBeInstanceOf(Car));
  });

  test('각 자동차 인스턴스가 서로 다른 객체이다.', () => {
    expect(cars[0]).not.toBe(cars[1]);
    expect(cars[0]).not.toBe(cars[2]);
    expect(cars[1]).not.toBe(cars[2]);
  });
});
