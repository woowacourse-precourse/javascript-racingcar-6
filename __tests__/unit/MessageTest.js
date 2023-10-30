import { Console } from '@woowacourse/mission-utils';
import RaceRound from '../../src/RaceRound';

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const mockRandom = (numbers) => {
  RaceRound.createRandomNum = jest.fn();
  numbers.reduce((acc, number) => acc.mockReturnValueOnce(number), RaceRound.createRandomNum);
};

describe('특정 상황에서 출력되어야 하는 문자에 대한 테스트', () => {
  const MOVING_FORWARD = 4;
  const STOP = 0;
  const names = ['pobi', 'nori'];
  const randoms = [MOVING_FORWARD, STOP];
  const raceRound = new RaceRound(names, 1);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('차가 전진할 때마다 "-" 문자가 출력 되는가?', () => {
    mockRandom([...randoms]);
    const logSpy = getLogSpy();
    const expectedMessage = '-';

    mockRandom([...randoms]);

    raceRound.proceedRound();
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(expectedMessage),
    );
  });

  test('게임 종료 시 최종 우승자를 출력하는가? (우승자가 여러명일 경우)', () => {
    const expectedMessage = '최종 우승자 : pobi';
    const logSpy = getLogSpy();

    mockRandom([...randoms]);

    raceRound.proceedRound();
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(expectedMessage),
    );
  });
});
