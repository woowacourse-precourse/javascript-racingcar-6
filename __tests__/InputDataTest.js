import { MissionUtils } from '@woowacourse/mission-utils';
import { getCarName, getPlayNumber } from '../src/Util/inputData';

const mockQuestions = (input) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(input);
  });
};

describe('시도 횟수 반환', () => {
  test('[시도 횟수] 숫자 타입의 시도 횟수 반환', async () => {
    // Arrange
    const input = 5;
    mockQuestions(input);
    // Act
    const result = await getPlayNumber();
    // Assert
    expect(result).toBe(5);
  });
});

describe('자동차 이름 반환', () => {
  test('[자동차 이름] 자동차 이름과 이동거리를 key와 value로 가지는 Map 자료구조 반환', async () => {
    // Arrange
    const input = 'pobi, jun';
    mockQuestions(input);
    // Act
    const result = await getCarName();
    // Assert
    const expectedResult = new Map([
      ['pobi', ''],
      ['jun', ''],
    ]);
    expect(result).toEqual(expectedResult);
  });
});
