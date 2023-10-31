import { MissionUtils } from '@woowacourse/mission-utils';
import User from '../cargame/User';
import { MESSAGES } from '../constants/message';

describe('User', () => {
  describe('getCarNames', () => {
    test('자동차 이름이 잘 입력되었는지 확인', async () => {
      const mockReadLineAsync = jest.fn().mockResolvedValue('pobi,woni,jun');
      MissionUtils.Console.readLineAsync = mockReadLineAsync;

      const user = new User();
      await user.getCarNames();

      expect(user.carNames).toEqual(['pobi', 'woni', 'jun']);
      expect(mockReadLineAsync).toHaveBeenCalledWith(MESSAGES.CAR_NAMES_INPUT);
    });

    test('[예외사항] 자동차 이름이 5글자 이상일 경우', async () => {
      const mockReadLineAsync = jest.fn().mockResolvedValue('pobijun');
      MissionUtils.Console.readLineAsync = mockReadLineAsync;

      const user = new User();

      await expect(user.getCarNames()).rejects.toThrowError(
        MESSAGES.ERROR_CAR_NAME_LENGTH_INPUT_WRONG,
      );
    });

    test('[예외사항] 자동차 이름이 중복되어 입력될 경우', async () => {
      const mockReadLineAsync = jest
        .fn()
        .mockResolvedValue('pobi,woni,jun,pobi');
      MissionUtils.Console.readLineAsync = mockReadLineAsync;

      const user = new User();

      await expect(user.getCarNames()).rejects.toThrowError(
        MESSAGES.ERROR_CAR_NAMES_DUPLICATION_INPUT_WRONG,
      );
    });

    test('[예외사항] 자동차 이름이 콤마(,)를 기준으로 입력되지 않은 경우', async () => {
      const mockReadLineAsync = jest.fn().mockResolvedValue('pobi');
      MissionUtils.Console.readLineAsync = mockReadLineAsync;

      const user = new User();

      await expect(user.getCarNames()).rejects.toThrowError(
        MESSAGES.ERROR_CAR_NAME_COMMA_INPUT_WRONG,
      );
    });
  });

  describe('getTryNumber', () => {
    test('시도할 횟수가 잘 입력되었는지 확인', async () => {
      const mockReadLineAsync = jest.fn().mockResolvedValue('6');
      MissionUtils.Console.readLineAsync = mockReadLineAsync;

      const user = new User();
      await user.getTryNumber();

      expect(user.tryNumber).toBe(6);
      expect(mockReadLineAsync).toHaveBeenCalledWith(MESSAGES.TRY_NUMBER_INPUT);
    });

    test('[예외사항] 입력한 시도할 횟수가 잘못된 형식일 경우 (숫자가 아닌 문자)', async () => {
      const mockReadLineAsync = jest.fn().mockResolvedValue('6a');
      MissionUtils.Console.readLineAsync = mockReadLineAsync;

      const user = new User();

      await expect(user.getTryNumber()).rejects.toThrowError(
        MESSAGES.ERROR_TRY_NUMBER_INPUT_WRONG,
      );
    });
    test('[예외사항] 입력한 시도할 횟수가 잘못된 형식일 경우 (띄어쓰기)', async () => {
      const mockReadLineAsync = jest.fn().mockResolvedValue(' 5');
      MissionUtils.Console.readLineAsync = mockReadLineAsync;

      const user = new User();

      await expect(user.getTryNumber()).rejects.toThrowError(
        MESSAGES.ERROR_TRY_NUMBER_INPUT_WRONG,
      );
    });
  });
});
