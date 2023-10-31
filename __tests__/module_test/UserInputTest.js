import { MissionUtils } from '@woowacourse/mission-utils';
import { getCarNames, getTryNumber } from '../../modules/userInput';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('사용자 입력 검사.', () => {
  test('자동차 이름 입력 검사.', async () => {
    const carNames = ['고세종,세종고'];
    mockQuestions(carNames);

    const expectedResult = '고세종,세종고';
    const testResult = await getCarNames();

    expect(testResult).toEqual(expectedResult);
  });

  test('시도 횟수 입력 검사.', async () => {
    const tryNumber = ['10'];
    mockQuestions(tryNumber);

    const expectedResult = '10';
    const testResult = await getTryNumber();

    expect(testResult).toEqual(expectedResult);
  });
});
