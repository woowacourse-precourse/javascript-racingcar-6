import { Console } from '@woowacourse/mission-utils';
import RacingGame from '../src/RacingGame.js';

const mockRacingCountInput = (racingCount) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(racingCount);
  });
};
