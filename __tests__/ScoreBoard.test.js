import { Console } from '@woowacourse/mission-utils';
import ScoreBoard from '../src/ScoreBoard.js';
import Car from '../src/Car.js';

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

jest.mock('../src/Car.js');

test('자동차의 전진/정지 결과를 받아서, 형식에 맞게 출력한다', () => {
  // Car 클래스 모킹
  Car.mockImplementation((name, movement) => ({
    name,
    movement,
    move: jest.fn(),
  }));
  const logSpy = getLogSpy();
  const inputs = [Car('pobi', '-'), Car('woni', ''), Car('jun', '-')];
  const expected = ['pobi : -', 'woni : ', 'jun : -'];

  ScoreBoard.announceInterimResult(inputs);

  expected.forEach((output) => {
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
});
