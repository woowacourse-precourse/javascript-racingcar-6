import validateUserInput from '../src/Utils/Validator';
import { IS_EMPTY_ERROR, VALIDATE_CAR_NAME_ERROR } from '../src/Utils/Define';

describe('유저 입력 테스트', () => {
  test('차 이름이 공백일때', () => {
    // given
    const input = ' ';
    let result;
    // when
    try {
      validateUserInput(input);
    } catch (error) {
      result = error.message;
    }
    // then
    expect(result).toContain(IS_EMPTY_ERROR);
  });

  test('차 이름이 5글자를 넘어갈때', () => {
    const input = '이름이5글자가넘어요';
    let result;
    try {
      validateUserInput(input);
    } catch (error) {
      result = error.message;
    }
    expect(result).toContain(VALIDATE_CAR_NAME_ERROR);
  });
});

afterEach(() => {
  jest.clearAllMocks();
});
