import { playerInput } from '../../src/view/View.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('사용자 입력 유효성 테스트', () => {
  describe('[입력값]', () => {
    it('비었을 경우 에러를 던진다.', async () => {
      const isEmpty = '';
      mockQuestions([isEmpty]);
      await expect(() => playerInput(isEmpty)).rejects.toThrow('[ERROR]');
    });

    it('음수인 경우 에러를 던진다.', async () => {
      const minusNumber = -12;
      mockQuestions([minusNumber]);
      await expect(() => playerInput(minusNumber)).rejects.toThrow('[ERROR]');
    });

    it('문자인 경우 에러를 던진다.', async () => {
      const isNotNumber = 'a';
      mockQuestions([isNotNumber]);
      await expect(() => playerInput(isNotNumber)).rejects.toThrow('[ERROR]');
    });
  });
});
