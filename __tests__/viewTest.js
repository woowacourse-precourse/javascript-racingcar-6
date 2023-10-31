import { MissionUtils } from '@woowacourse/mission-utils';
import outputView from '../src/view/outputView';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('outputView test', () => {
  test('이동 결과 테스트', () => {
    const input = { carName: 'pobi', carPosition: 2 };
    const output = 'pobi : --';

    const logSpy = getLogSpy();
    outputView.printRacing(input);

    expect(logSpy).toHaveBeenCalledWith(output);
  });

  test('승자 결과 테스트', () => {
    const input = 'pobi';
    const output = '최종 우승자 : pobi';

    const logSpy = getLogSpy();
    outputView.printWinner(input);

    expect(logSpy).toHaveBeenCalledWith(output);
  });
});
