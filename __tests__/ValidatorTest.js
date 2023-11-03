import Validator from '../src/validators/Validator';

describe('차량 이름 입력 예외 테스트', () => {
  test.each(['가나,다&,마바', '가1,나다,라마', '가1,나다,라마'])(
    '영문과,한글만 입력 가능',
    (input) => {
      expect(() => Validator.nameValidate(input)).toThrow();
    },
  );

  test.each(['가나다라마바,우테투에,테코테코테', '편의점,맛있는핫도그,다섯글자'])(
    '5글자 이하 입력',
    (input) => {
      expect(() => Validator.nameValidate(input)).toThrow();
    },
  );

  test.each(['나는혼자', '두명입니다'])(',으로 구분하여 2대 이상 입력', (input) => {
    expect(() => Validator.nameValidate(input)).toThrow();
  });
});

describe('실행 횟수 입력 예외 테스트', () => {
  test.each(['0', '1000', '10000'])('1이상 100이하의 수 입력', (input) => {
    expect(() => Validator.executionNumberValidate(input)).toThrow();
  });
  test.each(['a', '@', ' '])('숫자를 입력 했는지', (input) => {
    expect(() => Validator.executionNumberValidate(input)).toThrow();
  });
});
