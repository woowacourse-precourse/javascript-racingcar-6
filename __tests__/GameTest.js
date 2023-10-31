import Game from '../src/Game.js';


jest.mock('../src/Car.js', () => {
  return jest.fn().mockImplementation((name) => {
    return {
      name: name,
      position: 0,
      move: jest.fn()
    };
  });
});


jest.mock('@woowacourse/mission-utils', () => ({
  Console: {
    print: jest.fn()
  }
}));

describe('Game', () => {
  let game;

  beforeEach(() => {
    game = new Game(3, ['CarA', 'CarB']);
  });

  it('Cars을 올바르게 초기화한다', () => {
    expect(game.cars.length).toBe(2);
    expect(game.cars[0].name).toBe('CarA');
    expect(game.cars[1].name).toBe('CarB');
  });

  it('올바른 횟수의 경주를 진행한다', () => {
    game.runRaces();
    game.cars.forEach(car => {
      expect(car.move).toHaveBeenCalledTimes(3);
    });
  });

});

