import RacingGame from '../src/RacingGame.js';

describe('RacingGame 클래스 테스트', () => {
  test('RacingGame 인스턴스 생성 테스트. Car 인스턴스를 담을 배열(cars)과 시도 횟수(tryNum)를 초기화한다.', () => {
    const racingGame = new RacingGame();
    expect(racingGame.cars).toEqual([]);
    expect(racingGame.tryNum).toBe(0);
  });

  test('generateCarObjects 메서드 테스트. 자동차 이름 리스트를 이용하여, 이름 하나 당 각각의 자동차 인스턴스를 생성한다.', async () => {
    const racingGame = new RacingGame();
    const carNameList = ['pobi', 'woni', 'jun'];
    racingGame.genearteCarObjects(carNameList);
    expect(racingGame.cars).toEqual([
      { name: 'pobi', moveCount: 0 },
      { name: 'woni', moveCount: 0 },
      { name: 'jun', moveCount: 0 },
    ]);
  });

  test('getWinners 메서드 테스트. 경주개암울 완료한 후 최종 우승자를 결정한다.', async () => {
    const racingGame = new RacingGame();
    const carNameList = ['pobi', 'woni', 'jun'];
    racingGame.genearteCarObjects(carNameList);
    racingGame.cars[0].moveCount = 5;
    racingGame.cars[1].moveCount = 4;
    racingGame.cars[2].moveCount = 5;

    expect(racingGame.getWinners()).toEqual(['pobi', 'jun']);
  });
});
