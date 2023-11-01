/* eslint-disable no-undef */
import { Console } from '@woowacourse/mission-utils';
import Input from '../../src/utils/Input';

const mockInput = (inputs) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

beforeAll(() => {
  Console.readLineAsync = jest.fn();
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('값 입력 테스트', () => {
  test('입력 문구 출력', async () => {
    // given
    const expectedMessage = '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n';
    Console.readLineAsync.mockResolvedValue('pobi,woni');

    // when
    await Input.getCarNames();

    // then
    expect(Console.readLineAsync).toHaveBeenCalledWith(expectedMessage);
  });

  test('이름 입력', async () => {
    // given
    const userInput = ['pobi,woni'];

    // when
    mockInput(userInput);

    // then
    await expect(Input.getCarNames()).resolves.toEqual(['pobi', 'woni']);
  });

  test('5자 초과인 경우에 대한 예외 처리', async () => {
    // given
    const userInput = ['pobi,woni,helloworld'];

    // when
    mockInput(userInput);

    // then
    await expect(Input.getCarNames()).rejects.toThrow('[ERROR]');
  });

  test('이름이 중복되는 경우에 대한 예외 처리', async () => {
    // given
    const userInput = ['pobi,pobi'];

    // when
    mockInput(userInput);

    // then
    await expect(Input.getCarNames()).rejects.toThrow('[ERROR]');
  });

  test('이름이 없는 경우에 대한 예외 처리', async () => {
    // given
    const userInput = [''];

    // when
    mockInput(userInput);

    // then
    await expect(Input.getCarNames()).rejects.toThrow('[ERROR]');
  });

  test('공백 제거', async () => {
    // given
    const userInput = ['pobi, woni ,jason , ryan'];

    // when
    mockInput(userInput);

    // then
    await expect(Input.getCarNames()).resolves.toEqual(['pobi', 'woni', 'jason', 'ryan']);
  });

  test('빈 자동차 이름이 있는 경우 예외 처리', async () => {
    // given
    const userInput = ['pobi,, ,woni,'];

    // when
    mockInput(userInput);

    // then
    await expect(Input.getCarNames()).rejects.toThrow('[ERROR]');
  });
});

describe('시도 횟수 입력 테스트', () => {
  test('입력 문구 출력', async () => {
    // given
    const expectedMessage = '시도할 횟수는 몇 회인가요?\n';
    Console.readLineAsync.mockResolvedValue('5');

    // when
    await Input.getTrialCount();

    // then
    expect(Console.readLineAsync).toHaveBeenCalledWith(expectedMessage);
  });

  test('시도 횟수 입력', async () => {
    // given
    const userInput = ['5'];

    // when
    mockInput(userInput);

    // then
    await expect(Input.getTrialCount()).resolves.toEqual(5);
  });

  test('시도 횟수가 숫자가 아닌 경우 예외 처리', async () => {
    // given
    const userInput = ['a'];

    // when
    mockInput(userInput);

    // then
    await expect(Input.getTrialCount()).rejects.toThrow('[ERROR]');
  });

  test('시도 횟수가 음수인 경우 예외 처리', async () => {
    // given
    const userInput = ['-1'];

    // when
    mockInput(userInput);

    // then
    await expect(Input.getTrialCount()).rejects.toThrow('[ERROR]');
  });

  test('시도 횟수가 소수인 경우 예외 처리', async () => {
    // given
    const userInput = ['1.5'];

    // when
    mockInput(userInput);

    // then
    await expect(Input.getTrialCount()).rejects.toThrow('[ERROR]');
  });

  test('시도 횟수가 없는 경우 예외 처리', async () => {
    // given
    const userInput = [''];

    // when
    mockInput(userInput);

    // then
    await expect(Input.getTrialCount()).rejects.toThrow('[ERROR]');
  });

  test('시도 횟수가 0인 경우 예외 처리', async () => {
    // given
    const userInput = ['0'];

    // when
    mockInput(userInput);

    // then
    await expect(Input.getTrialCount()).rejects.toThrow('[ERROR]');
  });
});
