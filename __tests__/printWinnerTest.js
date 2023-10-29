import { MissionUtils } from '@woowacourse/mission-utils';
import Get from '../src/modules/Get';
import Print from '../src/modules/Print';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const racingInfos = [
  {
    carList: ['one', 'two', 'three'],
    numberOfGame: 4,
    runListArray: [
      [true, true, true, false],
      [true, false, true, true],
      [false, false, false, true],
    ],
  },
  {
    carList: ['one', 'two', 'three'],
    numberOfGame: 5,
    runListArray: [
      [false, false, false, true, false],
      [true, true, false, false, true],
      [true, true, true, true, false],
    ],
  },
];

describe('최종 우승자', () => {
  test.each([
    [racingInfos[0], ['one', 'two']],
    [racingInfos[1], ['three']],
  ])('배열 구하기', (racingInfo, expectedValue) => {
    //when
    const result = Get.winnerNameList(racingInfo);
    //then
    expect(result).toEqual(expectedValue);
  });

  test.each([
    [['one', 'two'], '최종 우승자 : one, two'],
    [['first'], '최종 우승자 : first'],
  ])('배열 출력', (winnerList, expectedValue) => {
    //given
    const logSpy = getLogSpy();

    //when
    Print.winnerFrom(winnerList);

    //then
    expect(logSpy.mock.calls[0][0]).toBe(expectedValue);
  });
});
