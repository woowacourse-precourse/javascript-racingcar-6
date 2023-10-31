import User from '../src/User';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = input => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(input);
  });
};

describe('User 테스트', () => {
  test.each([['pobi,javajigi'], ['pobi,java,'], ['pobi,Java,03']])(
    '경주를 진행 할 자동차 이름에 대한 에외 처리',
    async inputs => {
      // given
      mockQuestions(inputs);

      // when
      const user = new User();

      // then
      await expect(user.getRacingCarList()).rejects.toThrow('[ERROR]');
    },
  );

  test.each([[0], ['pobi']])(
    '자동차 경주 게임 횟수에 대한 예외 처리',
    async inputs => {
      // given
      mockQuestions(inputs);

      // when
      const user = new User();

      // then
      await expect(user.getRaceNumber()).rejects.toThrow('[ERROR]');
    },
  );
});
