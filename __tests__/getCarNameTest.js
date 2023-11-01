import validation from '../src/validationCarName';

describe('checkValidation', () => {
  test('배열이 아닌 경우', () => {
    //given
    const carNames = 'notAnArray';

    //when & then
    expect(validation(carNames)).toBeFalsy();
  });

  test('빈 배열인 경우', () => {
    //given
    const carNames = [];

    //when & then
    expect(validation(carNames)).toBeFalsy();
  });

  test('자동차 이름이 5자 이상인 경우', () => {
    //given
    const carNames = ['hamster'];

    //when & then
    expect(validation(carNames)).toBeFalsy();
  });

  test('중복된 자동차 이름이 있는 경우', () => {
    //given
    const carNames = ['cat', 'dog', 'cat'];

    //when & then
    expect(validation(carNames)).toBeFalsy();
  });

  test('세 자리 숫자를, 중복없이 입력할 경우, 예외가 발생하지 않아요', () => {
    // given
    const carNames = ['cat', 'dog'];

    // when & then
    validation(carNames);
  });
});
