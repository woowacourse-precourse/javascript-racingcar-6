import RacingCarGame from '../../src/game/RacingCarGame';

describe('RacingCarGame 클래스 테스트', () => {
  const racingCarGame = new RacingCarGame();

  test('RacingCarGame 생성자 테스트', () => {
    expect(racingCarGame).toBeInstanceOf(RacingCarGame);
  });
});