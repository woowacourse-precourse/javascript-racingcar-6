import findAndPrintWinner from '../src/Winner';
import { MissionUtils } from '@woowacourse/mission-utils';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('Winner.js 테스트', () => {
  test('작동 테스트 - 우승자 한명', () => {
    const inputCarNamesArray = ['sk', 'lg', 'kia'];
    const inputraceResults = ['---', '--', '-'];
    const output = '최종 우승자 : sk';
    const logSpy = getLogSpy();

    findAndPrintWinner(inputCarNamesArray, inputraceResults);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
  test('작동 테스트 - 우승자 두명', () => {
    const inputCarNamesArray = ['sk', 'lg', 'kia'];
    const inputraceResults = ['---', '---', '-'];

    const output = '최종 우승자 : sk, lg';

    const spy = jest.spyOn(MissionUtils.Console, 'print');

    findAndPrintWinner(inputCarNamesArray, inputraceResults);

    expect(spy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
});
