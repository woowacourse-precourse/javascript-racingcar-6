import { MissionUtils } from '@woowacourse/mission-utils';
import Print from '../src/modules/Print.js';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('실행 결과', () => {
  test('출력하기', () => {
    //given
    const racingInfo = {
      carList: ['one', 'two', 'three'],
      numberOfGame: 3,
      carPositionMatrix: [
        [1, 2, 3],
        [1, 1, 2],
        [0, 0, 0],
      ],
    };
    const outputs = [
      '\n실행 결과',
      'one : -',
      'two : -',
      'three : ',
      '',
      'one : --',
      'two : -',
      'three : ',
      '',
      'one : ---',
      'two : --',
      'three : ',
      '',
    ];
    const logSpy = getLogSpy();

    //when
    Print.racingResultFrom(racingInfo);

    //then
    logSpy.mock.calls.forEach((call, index) => {
      expect(String(call[0])).toBe(outputs[index]);
    });
  });
});
