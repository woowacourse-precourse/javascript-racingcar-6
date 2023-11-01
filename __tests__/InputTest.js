import Input from '../src/Input.js';
import { Console } from "@woowacourse/mission-utils";

describe('Input 클래스 테스트', () => {
  let input;

  beforeEach(() => {
    input = new Input();
    jest.spyOn(Console, 'readLineAsync').mockImplementation(() => {});
  });

  describe('getCarName 메서드', () => {
    test('유효한 입력은 배열을 반환', async () => {
      const userInput = 'car1, car2, car3';
      const expected = ['car1', 'car2', 'car3'];

      Console.readLineAsync.mockResolvedValue(userInput);
      const result = await input.getCarName();
      expect(result).toEqual(expected);
    });

    test('빈 입력은 에러 반환', async () => {
      const userInput = '';

      Console.readLineAsync.mockResolvedValue(userInput);
      await expect(input.getCarName()).rejects.toThrow(
        '[ERROR] 자동차 이름이 입력되지 않았거나 빈 공백이 포함되어 있습니다.'
      );
    });

    test('이름이 5글자를 초과하면 에러 반환', async () => {
      const userInput = 'car1, car2, car3, car123456';

      Console.readLineAsync.mockResolvedValue(userInput);
      await expect(input.getCarName()).rejects.toThrow(
        '[ERROR] 자동차 이름이 5글자를 초과했습니다.'
      );
    });
  });

  describe('getRepeatNumber 메서드', () => {
    test('유효한 입력은 숫자 그대로 반환', async () => {
      const inputNumber = '5';
      const expected = '5';

      Console.readLineAsync.mockResolvedValue(inputNumber);
      const result = await input.getRepeatNumber();
      expect(result).toEqual(expected);
    });

    test('빈 입력은 에러 반환', async () => {
      const inputNumber = '';

      Console.readLineAsync.mockResolvedValue(inputNumber);
      await expect(input.getRepeatNumber()).rejects.toThrow(
        '[ERROR] 시도 횟수가 입력되지 않았습니다.'
      );
    });

    test('음수 입력은 에러 반환', async () => {
      const inputNumber = '-5';

      Console.readLineAsync.mockResolvedValue(inputNumber);
      await expect(input.getRepeatNumber()).rejects.toThrow(
        '[ERROR] 시도 횟수가 양의 정수가 아닙니다.'
      );
    });

    test('소수 입력은 에러 반환', async () => {
      const inputNumber = '3.5';

      Console.readLineAsync.mockResolvedValue(inputNumber);
      await expect(input.getRepeatNumber()).rejects.toThrow(
        '[ERROR] 시도 횟수가 양의 정수가 아닙니다.'
      );
    });
  });
});
