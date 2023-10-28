import Race from '../src/models/Race';
import { Console } from '@woowacourse/mission-utils';

describe('Race 실행 결과', () => {
  let race;
  let scoreBoard;
  let laps;

  beforeEach(() => {
    race = new Race();
    scoreBoard = { tesla: 0, benz: 0 };
    laps = 3;
  });

  const getLogSpy = () => {
    const logSpy = jest.spyOn(Console, 'print');
    logSpy.mockClear();
    return logSpy;
  };

  test('`showScoreBoard` 메소드 테스트', () => {
    const ouputs = ['tesla : ', 'benz : '];
    const logSpy = getLogSpy();

    race.racing(scoreBoard, laps);

    ouputs.forEach(output => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('`racing` 메소드 테스트', () => {
    const result = race.racing(scoreBoard, laps);

    expect(result).toMatchObject([
      ['tesla', expect.any(Number)],
      ['benz', expect.any(Number)],
    ]);
  });
});
