import InputCarMoveCount from "../src/class/gameStart.js";
import { Console } from '@woowacourse/mission-utils';

jest.mock('@woowacourse/mission-utils', () => {
  return {
    Console: {
      print: jest.fn(),
      readLineAsync: jest.fn(),
    },
  };
});

test('중복된 자동차 이름을 입력하면 에러가 발생해야 합니다', async () => {
  const inputCarMoveCount = new InputCarMoveCount();
  Console.readLineAsync.mockResolvedValueOnce('carTest1,carTest2,carTest1');

  await expect(inputCarMoveCount.userInput()).rejects.toThrowError();

  jest.restoreAllMocks();
});

test('자동차 입력은 최소 2대 이상 10대 이하여야 합니다', async () => {
  const inputCarMoveCount = new InputCarMoveCount();

  Console.readLineAsync
    .mockResolvedValueOnce('car1,car2')
    .mockResolvedValueOnce('1');

  await expect(inputCarMoveCount.userInput()).resolves.not.toThrowError();

  Console.readLineAsync
    .mockResolvedValueOnce('car1,car2,car3,car4,car5,car6,car7,car8,car9,car10,car11'); // 11대 입력

  await expect(inputCarMoveCount.userInput()).rejects.toThrowError();

  jest.restoreAllMocks();
});

test('자동차 이름에는 공백이 포함되어서는 안됩니다', async () => {
  const inputCarMoveCount = new InputCarMoveCount();

  Console.readLineAsync
    .mockResolvedValueOnce('car1,car2,  ')

  await expect(inputCarMoveCount.userInput()).rejects.toThrowError();

  jest.restoreAllMocks();
});