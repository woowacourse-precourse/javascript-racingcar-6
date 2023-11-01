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
    carPositionMatrix: [
      [1, 2, 3, 3],
      [1, 1, 2, 3],
      [0, 0, 0, 1],
    ],
  },
  {
    carList: ['one', 'two', 'three'],
    numberOfGame: 5,
    carPositionMatrix: [
      [0, 0, 0, 1, 0],
      [1, 2, 2, 2, 3],
      [1, 2, 3, 4, 4],
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
    expect(String(logSpy.mock.calls[0])).toBe(expectedValue);
  });
});
