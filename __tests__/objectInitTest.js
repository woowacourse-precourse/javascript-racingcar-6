import { MissionUtils } from '@woowacourse/mission-utils';
import ConvertInputTo from '../src/modules/ConvertInputTo.js';

const mockQuestions = inputs => {
  MissionUtils.Console.readLineAsync = jest.fn();
  let nowIndex = 0;

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs[nowIndex++];
    return Promise.resolve(input);
  });
};

describe('객체 초기화', () => {
  const testInputs = [
    ['cha,seung,ha', '1'],
    ['a,a,a', '10'],
  ];

  const CAR_LIST_NAME = 'carList';
  const NUMBER_OF_GAME_NAME = 'numberOfGame';
  const CAR_POSITION_MATRIX_NAME = 'carPositionMatrix';

  test.each([
    [testInputs[0], ['cha', 'seung', 'ha']],
    [testInputs[1], ['a', 'a', 'a']],
  ])(
    '자동차 이름이 담긴 문자열을 받아 배열로 바꾸기',
    async (inputs, expectedValue) => {
      // given
      mockQuestions(inputs);
      // when
      const racingInfo = await ConvertInputTo.racingInfo();

      // then
      expect(racingInfo).toHaveProperty(CAR_LIST_NAME, expectedValue);
      expect(Array.isArray(racingInfo[CAR_LIST_NAME])).toBe(true);
    }
  );

  test.each([
    [testInputs[0], 1],
    [testInputs[1], 10],
  ])('시도할 횟수 숫자로 받기', async (inputs, expectedValue) => {
    // given
    mockQuestions(inputs);

    // when
    const racingInfo = await ConvertInputTo.racingInfo();

    // then
    expect(racingInfo).toHaveProperty(NUMBER_OF_GAME_NAME, expectedValue);
    expect(typeof racingInfo[NUMBER_OF_GAME_NAME]).toBe('number');
  });

  test.each([[testInputs[0]], [testInputs[1]]])(
    '시도횟수 별 진행 여부 담긴 배열 만들기',
    async inputs => {
      // given
      mockQuestions(inputs);

      // when
      const racingInfo = await ConvertInputTo.racingInfo();

      // then
      expect(racingInfo).toHaveProperty(CAR_POSITION_MATRIX_NAME);
      expect(racingInfo[CAR_POSITION_MATRIX_NAME]).toHaveLength(
        racingInfo[CAR_LIST_NAME].length
      );
      racingInfo[CAR_POSITION_MATRIX_NAME].forEach(runList => {
        expect(runList).toHaveLength(racingInfo[NUMBER_OF_GAME_NAME]);
        runList.forEach(element => expect(typeof element).toBe('number'));
      });
    }
  );
});
