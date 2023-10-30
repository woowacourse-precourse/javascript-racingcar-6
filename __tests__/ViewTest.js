import { MissionUtils } from '@woowacourse/mission-utils';
import OutputView from '../src/views/OutputView';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('OutputView 테스트', () => {
  test('전진 결과 출력 - printAdvanceResult(models)', () => {
    const models = [
      { name: 'pobi', moveCnt: 1 },
      { name: 'java', moveCnt: 0 },
    ];
    const outputs = ['pobi : -', 'java : '];
    const logSpy = getLogSpy();

    const view = new OutputView();
    view.printAdvanceResult(models);

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('결과 포맷 - formatResult(model)', () => {
    const model = { name: 'pobi', moveCnt: 3 };

    const view = new OutputView();

    expect(view.formatResult(model)).toBe('pobi : ---');
  });

  test('전진 문구 - generateAdvanceString(moveCnt)', () => {
    const MOVE_CNT = 3;

    const view = new OutputView();

    expect(view.generateAdvanceString(MOVE_CNT)).toBe('---');
  });
});
