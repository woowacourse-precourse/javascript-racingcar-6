import UserInputValidator from '../src/components/UserInputValidator.js';
import { ERROR_MESSAGE } from '../src/utils/constants';

describe('유효성 테스트', () => {
  test('차 이름 5글자 이하 여부 확인', () => {
    const wrong = 'red,darkred,lightyellow';
    const right = 'red,blue,green';
    const userInputValidatorWrong = new UserInputValidator(wrong, '');
    const userInputValidatorRight = new UserInputValidator(right, '');

    expect(userInputValidatorRight.validateCar()).toBeTruthy();

    try {
      userInputValidatorWrong.validateCar();
    } catch (error) {
      expect(error.message).toEqual(ERROR_MESSAGE.input);
    }
  });

  test('경주 횟수 입력 숫자 양의 정수 여부 확인', () => {
    const wrong = '-1';
    const right = '2';
    const userInputValidatorWrong = new UserInputValidator('', wrong);
    const userInputValidatorRight = new UserInputValidator('', right);

    expect(userInputValidatorRight.validateNumber()).toBeTruthy();

    try {
      userInputValidatorWrong.validateNumber();
    } catch (error) {
      expect(error.message).toEqual(ERROR_MESSAGE.input);
    }
  });
});
