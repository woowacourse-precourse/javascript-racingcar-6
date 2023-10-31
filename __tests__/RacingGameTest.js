import CarRacingGame from '../src/domain/CarRacingGame.js';

describe('CarRacingGame', () => {
  let carRacingGame;

  beforeEach(() => {
    const randomNumberGenerator = jest.fn();
    randomNumberGenerator.mockReturnValueOnce(1).mockReturnValueOnce(4).mockReturnValueOnce(5);

    const carNames = ['car1', 'car2', 'car3'];
    const round = 1;
    carRacingGame = new CarRacingGame(carNames, round);

    carRacingGame.race(randomNumberGenerator);
  });

  test('라운드마다 객체배열 형태의 진행결과값을 반환하는지 테스트한다.', () => {
    const expected = [
      { name: 'car1', progress: 0 },
      { name: 'car2', progress: 1 },
      { name: 'car3', progress: 1 },
    ];

    expect(carRacingGame.getRoundResult()).toEqual(expected);
  });

  test('가장 큰 전진값을 가진 이름을 배열로 반환하는지 테스트한다.', () => {
    const expected = ['car2', 'car3'];

    expect(carRacingGame.getWinners()).toEqual(expected);
  });

  test('라운드가 마지막일때, 우승자를 반환하는지 테스트한다.', () => {
    expect(carRacingGame.isPlaying()).toBe(false);

    expect(carRacingGame.getWinners()).toEqual(['car2', 'car3']);
  });
});
