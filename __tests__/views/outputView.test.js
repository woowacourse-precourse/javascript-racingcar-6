import { MissionUtils } from '@woowacourse/mission-utils';
import OutputView from '../../src/views/outputView';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('OutputView 테스트', () => {
  test('자동차 리스트가 주어지면 자동차 이름과 전진한 숫자를 표시할 수 있다.', () => {
    const input = [{ carName: 'a', forwardCount: 1 }];
    const output = 'a : -';
    const logSpy = getLogSpy();

    const outputView = new OutputView();

    outputView.printCarList(input);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
});
