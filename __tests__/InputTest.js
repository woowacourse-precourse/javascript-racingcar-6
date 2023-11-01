import { Console } from '@woowacourse/mission-utils';
import Input from '../src/Input.js';
import ERROR from '../src/constants/Error';

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('자동차 이름 입력값 테스트', () => {
  test('이름이 1자 미만 또는 5자 초과인 경우 에러 반환', async () => {
    const input = ['abcde,abcdef', 'a,,b'];

    mockQuestions(input);

    await expect(Input.getCarNames()).rejects.toThrow(ERROR.nameLength);
  });

  test('빈 값인 경우 에러 반환', async () => {
    const input = [''];

    mockQuestions(input);

    await expect(Input.getCarNames()).rejects.toThrow(ERROR.carName);
  });

  test('쉼표(,)가 구분자가 아닌 경우 에러 반환', async () => {
    const input = ['hi.my.name'];

    mockQuestions(input);

    await expect(Input.getCarNames()).rejects.toThrow(ERROR.includeComma);
  });
});
