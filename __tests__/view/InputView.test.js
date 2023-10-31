import { MissionUtils } from '@woowacourse/mission-utils';
import InputView from '../../src/view/InputView';

describe('InputView 클래스', () => {
  test('printCarNames 메서드는 사용자 입력을 반환해야 한다', async () => {
    const mockQuestions = ['car1,car2,car3'];
    MissionUtils.Console.readLineAsync = jest.fn().mockResolvedValueOnce(mockQuestions[0]);

    const result = await InputView.printCarNames();

    expect(result).toEqual(mockQuestions[0]);
  });

  test('printNumberOfRounds 메서드는 사용자 입력을 반환해야 한다', async () => {
    const mockQuestions = [5];
    MissionUtils.Console.readLineAsync = jest.fn().mockResolvedValueOnce(mockQuestions[0]);

    const result = await InputView.printNumberOfRounds();

    expect(result).toEqual(mockQuestions[0]);
  });
});
