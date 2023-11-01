import { Console } from '@woowacourse/mission-utils';
import RaceRound from '../../src/RaceRound';
import CarsInfo from '../../src/CarsInfo';

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
  const carsInfo = new CarsInfo(names);
  const randoms = [MOVING_FORWARD, STOP];
  const raceRound = new RaceRound(carsInfo, 1);
  const logSpy = getLogSpy();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('차가 전진할 때마다 "-" 문자가 출력 되는가?', () => {
    // given
    const expectedMessage = '-';

    // when
    mockRandom([...randoms]);
    raceRound.proceedRound();

    // then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(expectedMessage),
    );
  });

  test('게임 종료 시 최종 우승자를 출력하는가? (우승자가 여러명일 경우)', () => {
    // given
    const expectedMessage = '최종 우승자 : pobi';

    // when
    mockRandom([...randoms]);
    raceRound.proceedRound();
    raceRound.announceGameResult();

    //then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(expectedMessage),
    );
  });
});
