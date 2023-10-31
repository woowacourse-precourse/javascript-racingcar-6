import { Console } from '@woowacourse/mission-utils';
import RacingGame from '../src/RacingGame.js';
import Validation from '../src/Validation.js';
import ErrorHandler from '../src/ErrorHandler.js';

const mockRacingCountInput = (racingCount) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(racingCount);
  });
};

describe('레이싱 게임 플레이와 관련된 함수 테스트', () => {
  const racingGame = new RacingGame();
  const validation = new Validation();

  test('게임 시도 횟수를 숫자로 변환하여 반환하는지 테스트', async () => {
    const racingCountInput = '5';
    mockRacingCountInput(racingCountInput);
    const racingCount = await racingGame.getRacingCount();

    expect(typeof racingCount).toBe('number');
  });
});
