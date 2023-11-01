import { MissionUtils } from '@woowacourse/mission-utils';
import Result from '../src/Result.js';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};
describe('최종결과 출력 테스트', () => {
  test('위치값이 제일 높은 자동차가 승리합니다.', async () => {
    const logSpy = getLogSpy();

    const result = new Result();
    result.FinalResult([
      { name: 'Kim', position: 5 },
      { name: 'Lee', position: 3 },
      { name: 'Park', position: 2 },
    ]);

    expect(logSpy).toHaveBeenCalledWith('최종 우승자 : Kim');
  });

  test('위치값이 제일큰 자동차가 여러대 있으면 공동승리합니다.', async () => {
    const logSpy = getLogSpy();

    const result = new Result();
    result.FinalResult([
      { name: 'Kim', position: 6 },
      { name: 'Lee', position: 2 },
      { name: 'Park', position: 6 },
    ]);

    expect(logSpy).toHaveBeenCalledWith('최종 우승자 : Kim, Park');
  });
});
