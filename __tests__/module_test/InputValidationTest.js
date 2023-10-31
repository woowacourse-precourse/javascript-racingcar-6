import { MissionUtils } from '@woowacourse/mission-utils';
import {
  checkCarNamesAreValid,
  checkTryNumberIsValid,
} from '../../modules/inputValidation';

describe('자동차 이름 유효성 검사.', () => {
  const carNamesOverFive = [['sejong,고세종'], ['고세종,sejong']];
  const carNamesHaveBlank = [
    ['sejong,고세종,""'],
    ['sejong," ",고세종'],
    ['sejong,"",고세종'],
  ];
  const carNamesWithBlank = [['김민협, 고세종'], [' 김민협,고세종']];
  const carNamesAreDuplicated = [['김민협,김민협'], ['고세종,고세종']];

  test.each(carNamesOverFive)('자동차 이름이 5글자 이하인지.', (input) => {
    expect(() => checkCarNamesAreValid(input)).toThrow('[ERROR]');
  });

  test.each(carNamesHaveBlank)('자동차 이름이 공백인지.', (input) => {
    expect(() => checkCarNamesAreValid(input)).toThrow('[ERROR]');
  });

  test.each(carNamesWithBlank)('자동차 이름에 공백을 포함하는지', (input) => {
    expect(() => checkCarNamesAreValid(input)).toThrow('[ERROR]');
  });

  test.each(carNamesAreDuplicated)('자동차 이름이 중복되는지.', (input) => {
    expect(() => checkCarNamesAreValid(input)).toThrow('[ERROR]');
  });
});

describe('시도 횟수 입력 유효성 검사.', () => {
  const tryNumberIsCharacter = 'abc';
  const tryNumberWithBlank = '10 ';

  test('입력이 숫자가 아닌 경우.', () => {
    expect(() => checkTryNumberIsValid(tryNumberIsCharacter)).toThrow(
      '[ERROR]'
    );
  });

  test('입력에 공백(스페이스)가 포함된 경우.', () => {
    expect(() => checkTryNumberIsValid(tryNumberWithBlank)).toThrow('[ERROR]');
  });
});
