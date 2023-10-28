import { Console } from '@woowacourse/mission-utils';
import GameManager from '../src/GameManager.js';

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

test('자동차의 전진/정지 결과를 받아서, 형식에 맞게 출력한다', () => {
  const logSpy = getLogSpy();
  const gameManager = new GameManager();
  const expected = 'pobi : -';
  gameManager.announceInterimResult();
  expect(logSpy).toHaveBeenCalledWith(expect.stringMatching(expected));
});

