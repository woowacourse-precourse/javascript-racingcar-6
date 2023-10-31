import { Console } from '@woowacourse/mission-utils';
import RacingGame from '../src/RacingGame.js';
import Validation from '../src/Validation.js';

const mockRacingCountInput = (racingCount) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(racingCount);
  });
};

describe('레이싱 게임 플레이와 관련된 함수 테스트', () => {
  const racingGame = new RacingGame();

  test('게임 시도 횟수를 숫자로 변환하여 반환하는지 테스트', async () => {
    const racingCountInput = '5';
    mockRacingCountInput(racingCountInput);
    const racingCount = await racingGame.getRacingCount();

    expect(typeof racingCount).toBe('number');
  });

  test.each([
    ['-1'],
    ['숫자 아님']
  ])('유효하지 않는 게임 시도 횟수에 대한 예외 처리 테스트', async (inputs) => {
    mockRacingCountInput(inputs);

    await expect(racingGame.getRacingCount()).rejects.toThrow('[ERROR]');
  });
});
