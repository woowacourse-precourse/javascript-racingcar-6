import { MissionUtils } from '@woowacourse/mission-utils';
import View from '../src/View';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('View 테스트', () => {
  test('전진 결과 출력 함수 printAdvanceResult()', () => {
    const models = [
      { name: 'pobi', moveCnt: 1 },
      { name: 'java', moveCnt: 0 },
    ];
    const outputs = ['pobi : -', 'java : '];
    const logSpy = getLogSpy();

    const view = new View();
    view.printAdvanceResult(models);

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
