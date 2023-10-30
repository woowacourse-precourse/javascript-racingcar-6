import identifyWinner from '../src/util/progress/identifyWinner.js';

describe('자동차 경주 게임의 결과를 테스터', () => {
  test('우승자가 한명인 경우 해당 플레이어 한명을 출력', async () => {
    // given
    const testGameResult = new Map();
    testGameResult.set('testPlayer1', '-----------');
    testGameResult.set('testPlayer2', '----------');
    testGameResult.set('winnerPlayer', '-------------------------');
    testGameResult.set('testPlayer4', '----------------');
    testGameResult.set('testPlayer4', '-------------------');

    // when
    const result = await identifyWinner(testGameResult);
    const resultMessage = '최종 우승자: winnerPlayer';

    // then
    await expect(result).toBe(resultMessage);
  });

  test('우승자가 여려명 일 경우 해당 플레이어들이 포함된 메세지를 출력', async () => {
    // given
    const testGameResult = new Map();
    testGameResult.set('testPlayer1', '-----------');
    testGameResult.set('testPlayer2', '----------');
    testGameResult.set('winnerPlayer1', '-----------------------------');
    testGameResult.set('testPlayer4', '----------------');
    testGameResult.set('testPlayer4', '-------------------');
    testGameResult.set('winnerPlayer2', '-----------------------------');
    testGameResult.set('winnerPlayer3', '-----------------------------');
    testGameResult.set('testPlayer5', '---------------------');
    testGameResult.set('testPlayer6', '-----------------------');
    testGameResult.set('testPlayer7', '----------------------');

    // when
    const result = await identifyWinner(testGameResult);
    const resultMessage = '최종 우승자: winnerPlayer1, winnerPlayer2, winnerPlayer3';

    // then
    await expect(result).toBe(resultMessage);
  });
});
