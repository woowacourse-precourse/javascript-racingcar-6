import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE } from '../src/utils/constants';
import { validateNames, validateTryCount } from '../src/utils/validateInput';
import InputView from '../src/view/InputView';

const mockQuestions = inputs => {
  // Application.Test에서 제공하는 함수, 검증을 위해 사용
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('유효성 검증 테스트', () => {
  describe('자동차 이름 유효성 검증 테스트', () => {
    test('자동차 이름이 5자를 초과할 경우', async () => {
      const names = 'pobi,woni,javaji';
      mockQuestions([names]);
      expect(() => validateNames(names)).toThrow(ERROR_MESSAGE.NAME_LENGTH);
    });

    test('자동차 이름이 1자 미만일 경우', async () => {
      const names = 'pobi,woni,,javaji';
      mockQuestions([names]);
      expect(() => validateNames(names)).toThrow(ERROR_MESSAGE.NAME_LENGTH);
    });

    test('자동차 이름이 중복일 경우', async () => {
      const names = 'pobi,woni,pobi,javaji';
      mockQuestions([names]);
      expect(() => validateNames(names)).toThrow(ERROR_MESSAGE.NAME_DUPLICATE);
    });

    test('공백이 포함된 경우(5글자 이하라면 공백도 이름으로 인식하여 정상 반환) - 테스트 1', async () => {
      const names = 'pob i,woni,java';
      const expected = ['pob i', 'woni', 'java'];
      mockQuestions([names]);
      const result = await InputView.carNames();
      expect(result).toEqual(expected);
    });

    test('공백이 포함된 경우(5글자 이하라면 공백도 이름으로 인식하여 정상 반환) - 테스트 2', async () => {
      const names = '안 녕,하세요,우 테co';
      const expected = ['안 녕', '하세요', '우 테co'];
      mockQuestions([names]);
      const result = await InputView.carNames();
      expect(result).toEqual(expected);
    });

    test('공백만 입력된 경우', async () => {
      const names = ' ';
      mockQuestions([names]);
      expect(() => validateNames(names)).toThrow(
        ERROR_MESSAGE.INVALID_CAR_LENGTH,
      );
    });

    test('특수문자가 포함된 경우(UTF-8은 정상 반환)', async () => {
      const names = '안녕*,#$%,테co!,🤔';
      const expected = ['안녕*', '#$%', '테co!', '🤔'];
      mockQuestions([names]);
      const result = await InputView.carNames();
      expect(result).toEqual(expected);
    });

    test('경주에 참여하는 자동차가 1대일 경우', async () => {
      const names = 'pobi';
      mockQuestions([names]);
      expect(() => validateNames(names)).toThrow(
        ERROR_MESSAGE.INVALID_CAR_LENGTH,
      );
    });

    test('경주에 참여하는 자동차가 1대 이상일 경우(정상 반환)', async () => {
      const names = 'pobi,woni,java';
      const expected = ['pobi', 'woni', 'java'];
      mockQuestions([names]);
      const result = await InputView.carNames();
      expect(result).toEqual(expected);
    });
  });

  describe('시도 횟수 유효성 검증 테스트', () => {
    test('시도 횟수가 0보다 작을 경우', async () => {
      const tryCount = '-1';
      mockQuestions([tryCount]);
      expect(() => validateTryCount(tryCount)).toThrow(
        ERROR_MESSAGE.INVALID_TRY_COUNT_NUM,
      );
    });
    test('시도 횟수가 0일 경우', async () => {
      const tryCount = '0';
      mockQuestions([tryCount]);
      expect(() => validateTryCount(tryCount)).toThrow(
        ERROR_MESSAGE.INVALID_TRY_COUNT_NUM,
      );
    });
    test('시도 횟수가 1 이상일 경우 (정상반환)', async () => {
      const tryCount = '1';
      const expected = 1;
      mockQuestions([tryCount]);
      const result = await InputView.tryCount();
      expect(result).toEqual(expected);
    });
    test('시도 횟수가 큰 경우 (정상반환)', async () => {
      const tryCount = '10000000000';
      const expected = 10000000000;
      mockQuestions([tryCount]);
      const result = await InputView.tryCount();
      expect(result).toEqual(expected);
    });
    test('시도 횟수가 문자일 경우', async () => {
      const tryCount = 'a';
      mockQuestions([tryCount]);
      expect(() => validateTryCount(tryCount)).toThrow(
        ERROR_MESSAGE.INVALID_TRY_COUNT_TYPE,
      );
    });
    test('시도 횟수가 1 이상의 자연수가 아닐 경우 - 음수', async () => {
      const tryCount = '-1.5';
      mockQuestions([tryCount]);
      expect(() => validateTryCount(tryCount)).toThrow(
        ERROR_MESSAGE.INVALID_TRY_COUNT_NUM,
      );
    });
    test('시도 횟수가 1 이상의 자연수가 아닐 경우 - 소수', async () => {
      const tryCount = '23.2';
      mockQuestions([tryCount]);
      await expect(() => validateTryCount(tryCount)).toThrow(
        ERROR_MESSAGE.INVALID_TRY_COUNT_TYPE,
      );
    });
    test('시도 횟수가 1 이상의 자연수가 아닐 경우 - 0', async () => {
      const tryCount = '0.0';
      mockQuestions([tryCount]);
      await expect(() => validateTryCount(tryCount)).toThrow(
        ERROR_MESSAGE.INVALID_TRY_COUNT_TYPE ||
          ERROR_MESSAGE.INVALID_TRY_COUNT_NUM,
      );
    });
    test('시도 횟수가 1 이상의 자연수가 아닐 경우 - -0', async () => {
      const tryCount = '-0';
      mockQuestions([tryCount]);
      await expect(() => validateTryCount(tryCount)).toThrow(
        ERROR_MESSAGE.INVALID_TRY_COUNT_TYPE ||
          ERROR_MESSAGE.INVALID_TRY_COUNT_NUM,
      );
    });
  });
});
