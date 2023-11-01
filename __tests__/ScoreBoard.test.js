import { Console } from '@woowacourse/mission-utils';
import ScoreBoard from '../src/ScoreBoard.js';
import Car from '../src/Car.js';

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

jest.mock('../src/Car.js');
Car.mockImplementation((name, movement) => ({
  name,
  movement,
  move: jest.fn(),
}));

test('자동차의 전진/정지 결과를 받아서, 형식에 맞게 출력한다', () => {
  const logSpy = getLogSpy();
  const inputs = [Car('pobi', '-'), Car('woni', ''), Car('jun', '-')];
  const expected = ['pobi : -', 'woni : ', 'jun : -'];

  ScoreBoard.announceInterimResult(inputs);

  expected.forEach((output) => {
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
});

test('경주 판정 결과를 받아서, 최종 우승자를 출력한다', () => {
  const logSpy = getLogSpy();
  const inputs = [Car('pobi', '-'), Car('jun', '-')];
  const expected = '최종 우승자 : pobi, jun';

  ScoreBoard.announceWinners(inputs);

  expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(expected));
});
