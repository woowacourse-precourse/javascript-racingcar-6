import CarRacingGame from '../src/domain/CarRacingGame';

describe('CarRacingGame', () => {
  test('라운드마다 객체배열 형태의 진행결과값을 반환하는지 테스트', () => {
    const randomNumberGenerator = jest.fn();
    randomNumberGenerator.mockReturnValueOnce(1).mockReturnValueOnce(4);

    const carNames = ['a', 'b'];
    const round = 1;
    const carRacingGame = new CarRacingGame(carNames, round);

    carRacingGame.race(randomNumberGenerator);

    const expected = [
      { name: 'a', progress: 0 },
      { name: 'b', progress: 1 },
    ];

    expect(carRacingGame.getRoundResult()).toEqual(expected);
  });
});
