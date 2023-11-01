// import  from '../src/Utils/Validator';
import {
  IS_EMPTY_ERROR,
  VALIDATE_CAR_NAME_ERROR,
  VALIDATE_GAME_ROUND_ERROR,
} from '../src/Utils/Define';
import InputView from '../src/view/InputView';
import userInput from '../src/view/View';
// eslint-disable-next-line import/order
import { Console } from '@woowacourse/mission-utils';

const mockReadLineAsync = (inputs) => {
  const inputsCopy = [...inputs]; // inputs 배열을 복사하여 사용
  Console.readLineAsync = jest.fn().mockImplementation(() => {
    const input = inputsCopy.shift();
    return Promise.resolve(input);
  });
};

describe('유저 입력 테스트', () => {
  test('inputView 작동 테스트', async () => {
    const testInputs = ['Car1,Car2,Car3'];
    mockReadLineAsync(testInputs);

    const result = await InputView();

    expect(result).toContain('Car1');
  });
});

test('유저 전체 입력 확인 (userInput)', async () => {
  // given
  const testInputs = ['Car1,Car2,Car3', '3'];
  mockReadLineAsync(testInputs);
  // when
  const result = await userInput();
  // then
  expect(result[0]).toEqual(['Car1', 'Car2', 'Car3']);
  expect(result[1]).toBe('3');
});

test('차 이름이 공백일때', async () => {
  const testInputs = [''];
  mockReadLineAsync(testInputs);
  let result;

  try {
    await userInput();
  } catch (error) {
    result = error.message;
  }

  expect(result).toContain(IS_EMPTY_ERROR);
});

test('차 이름이 5글자를 넘어갈때', async () => {
  const testInputs = ['이름이5글자이상'];
  mockReadLineAsync(testInputs);
  let result;

  try {
    await userInput();
  } catch (error) {
    result = error.message;
  }

  expect(result).toContain(VALIDATE_CAR_NAME_ERROR);
});

test('GameRound의 입력이 숫자가 아닐때', async () => {
  const testInputs = ['car1', '한글'];
  mockReadLineAsync(testInputs);
  let result;

  try {
    await userInput();
  } catch (error) {
    result = error.message;
  }

  expect(result).toContain(VALIDATE_GAME_ROUND_ERROR);
});

test('GameRound의 입력이 공백일때', async () => {
  const testInputs = ['car1', ''];
  mockReadLineAsync(testInputs);
  let result;

  try {
    await userInput();
  } catch (error) {
    result = error.message;
  }

  expect(result).toContain(IS_EMPTY_ERROR);
});

afterEach(() => {
  jest.clearAllMocks();
});
